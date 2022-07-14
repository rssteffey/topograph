
/*
    Generate a mountain data file using Google Elevation API
    Map will be centered on coordinates (centerLat, centerLon)
    rectX/rectY controls the length of each edge of the resulting rectangular map (in miles, because I'm an American who thinks in Imperial)
    pointDensity defines the number of points per mile
    mountainName controls the resulting file name

    Ideal Mt. Whitney map is centered on 36.573171, -118.266792, 4.5 x 2.5
*/
function generateElevationData(centerLat, centerLon, rectX, rectY, pointDensity, mountainName){
    // A is center
    var pointA = new google.maps.LatLng(centerLat, centerLon); 
    // B is center west side (bearing 270 is west)
    var distance = (rectX * 1609.34 ) / 2; // * 1609.34 to get meters, /2 to find edge from center
    var pointB = google.maps.geometry.spherical.computeOffset(pointA, distance, 270);
    // C is top left corner of grid
    distance = (rectY * 1609.34 ) / 2;
    var startingPoint = google.maps.geometry.spherical.computeOffset(pointB, distance, 0);
    // same distance but North (bearing 0)

    //console.log(pointA.lat(), pointA.lng());
    

    var dataBlock = {
        name: mountainName,
        grid: []
    };

    var numRows = rectY * pointDensity;
    var numCols = rectX * pointDensity;
    var offsetDistance = (1609.34 / pointDensity); // Meters per mile, divided by point density

    // Preamble
    console.log("Grid of points starting at")
    console.log(startingPoint.lat(), startingPoint.lng());
    console.log("Grid spans " + rectX + " miles East, " + rectY + " miles South");
    console.log("And is subdivided into " + numCols + " points East, " + numRows + " points south. (For a total of " + numCols * numRows + " points");
    console.log("Distance between each resulting grid point is " + offsetDistance + " meters")

    for(var i = 0; i < numRows; i++){
        // Each row should start offsetDistance * i south from the grid corner
        var rowStartPoint = google.maps.geometry.spherical.computeOffset(startingPoint, offsetDistance * i, 180); // SOUTH
        var rowData = { locations: [] };
        for(var j = 0; j < numCols; j++){
            var currPoint = google.maps.geometry.spherical.computeOffset(rowStartPoint, offsetDistance * j, 90); // EAST
            rowData.locations.push({
                "latitude" : currPoint.lat(),
                "longitude": currPoint.lng()
            });
        }

        // Request points from Open Elevation API
        console.log("Requesting points for row " + i + " of " + numRows)
        var elevData = JSON.parse(requestElevationForRow(JSON.stringify(rowData)));

        dataBlock.grid.push(elevData.results);

        // Let's avoid the rate limit
        sleep(5000);
    }

    console.log(dataBlock.grid); //Copy out of console to save in Whitney file
}

function requestElevationForRow(rowData){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.open-elevation.com/api/v1/lookup", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(rowData);

    return xhttp.responseText
}

function generateRouteData(routeId){
    var routeData = { ways : []};
    var landmarks = [];

    // Someone entered the John Muir trail data in reverse order, which draws a route straight across the map
    // to start the next section.
    // Instead of trying to manually account for things, it's easier just to treat the Ways as unique meshes,
    // since that's technically how the data is represented on OSM
    //routeData.ways = [];

    var trail = whitneyMapNodes.relation.find(function (e) {
        return e._id == routeId;
    });

    console.log(trail);
    // Loop over ways for current trail
    for(var w = 0; w < trail.member.length; w++){
        var way = whitneyMapNodes.way.find(function (e) {
            return e._id == trail.member[w]._ref;
        });
        routeData.ways.push({
            name: way._id,
            nodes : []
        })

        var nodes = way.nd;

        for(var i = 0; i < nodes.length; i++){
            var match = whitneyMapNodes.node.find(function (e) {
                return e._id == nodes[i]._ref;
            });
            
            if(match.tag){
                var nameTag = match.tag.find(function (e) {
                    return e._k == "name";
                });
    
                var fordTag = match.tag.find(function (e) {
                    return e._k == "ford";
                });
    
                var tagLabel = nameTag ? nameTag._v : null;
                var fordLabel = fordTag ? fordTag._v : null;
    
                landmarks.push({
                    lat: match._lat,
                    lon: match._lon,
                    tag: tagLabel,
                    riverFord: fordLabel
                });
            } else {
                routeData.ways[w].nodes.push({
                    lat: match._lat,
                    lon: match._lon
                });
            }
        }
    }

    // Iterate over the trail nodes, storing the appropriate lat/lon in our custom (smaller) file
    
    console.log(routeData);
    console.log(landmarks);
}

// Don't judge me, just let me have my nice sleep function
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
