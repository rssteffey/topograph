// This is the AWS lambda function that ensures global caching of the points.  I'm storing it here for reference if you want to deploy your own

const http = require('https');
var cache = null;

const apiUrl = "api.findmespot.com";
const feedId = "Y0UR_F33D_ID_H3R3";
const apiPath = "/spot-main-web/consumer/rest-api/2.0/public/feed/" + feedId + "/message.json";

exports.handler = async (event) => {
    // Ten minutes ago
    var cacheCheckTime = Date.now() - 600000;
    
    // Compare timestamp since cache call
    if(cache != null && cache.timestamp > cacheCheckTime){
        cache.source = "cache";
        const response = {
            statusCode: 200,
            body: JSON.stringify(cache),
        };
        return response;
    } else {
        // Request new data
        return getFullSpotFeed(apiUrl, apiPath)
        .then(messages => {
            cache = {
                feed: messages,
                source: "fresh",
                timestamp: Date.now()
            }
            
            const response = {
                statusCode: 200,
                body: JSON.stringify(cache),
            };
            
            return response;
        })
      .catch(console.error);
    }
};

function getFullSpotFeed(host, path, messages = []) {
  return new Promise((resolve, reject) => makeSpotRequest(host, path)
    .then(data => {
        // Go until no more pages to paginate
        if(data.response.errors){
            resolve(messages);
        } else {
            var messageList = data.response.feedMessageResponse.messages.message;
            if(data.response.feedMessageResponse.count == 1){
                messageList = [data.response.feedMessageResponse.messages.message];
            }
            messages = messages.concat(...messageList);
            var msgLength = data.response.feedMessageResponse.messages.message.length;
            getFullSpotFeed(host, apiPath + "?start=" + (msgLength + 1), messages).then(resolve).catch(reject)
        }
    }).catch(console.error));
}

function makeSpotRequest(host, path) {
    return new Promise((resolve, reject) => {
        const options = {
            host: host,
            path: path,
            port: 443,
            protocol: 'https:',
            method: 'GET'
        };
        const req = http.request(options, (res) => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
                resolve( {
                    response: {
                        errors: {
                            error: {
                                msg : "Failure to make request (code=" + res.statusCode + ")"
                            }
                        }
                    }
                })
            }
            var body = [];
            res.on('data', function(chunk) {
                body.push(chunk);
            });
            res.on('end', function() {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch(e) {
                    reject(e);
                }
                resolve(body);
            });
        });
        req.on('error', (e) => {
          reject(e.message);
        });
        // send the request
       req.end();
    });
}
