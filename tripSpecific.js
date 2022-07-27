// Additional methods that are needed for this project but clutter up the actual map bits


// At any point during the writing of this method I could have imported Moment.js
// and yet - here I still am
function getFlavorTextByTime(){

    try{
        var now = new Date();

        // California UTC offset is 7 hours, so the difference between user and california is
        var userOffset = (now.getTimezoneOffset() / 60) - 7;

        var pstHours = (now.getHours() + userOffset + 24) % 24;
        // If hours cross days, subtract back to PST
        // No this doesn't work at the end of the month; No I do not care in this project where I hike on Aug 13th.
        var pstDate = now.getDate();
        
        if(pstHours > now.getHours()){
            pstDate--;
        }
        
        if((pstDate <= 10 && now.getMonth() == 7) || now.getMonth() < 7){
            return "Still in TN";
        } // Aug 11
        else if (pstDate == 11 && now.getMonth() == 7){ 
            // Flight leaves at 7:15a CST (5:15a PST)
            if(pstHours >= 5 && pstHours < 10){
                return "Flying to LAX";
            }
            if(pstHours >= 10 && pstHours < 12){
                return "Grabbing last minute supplies";
            }
            if(pstHours >= 12 && pstHours <= 17){
                return "Driving to trailhead";
            } 
            if(pstHours > 17) {
                return "Running behind; probably exploring Lone Pine";
            }
        } // Aug 12
        else if (now.getMonth() == 7 && pstDate == 12 && pstHours > 10){
            return "If you see this, we may have had to cut the hike short or our tracker is sending faulty data.";
        } // Aug 13
        else if (now.getMonth() == 7 && pstDate == 13){
            return "There's a chance that if you see this message, it means we felt so good after summitting that we hiked right back out the same day (but more likely it's a bug)";
        } // Aug 14
        else if ( pstDate == 14 && now.getMonth() == 7 ){
            if( pstHours >= 10 && pstHours < 14 ){
                return "Driving back to Anaheim";
            }
            if( pstHours >= 14 ){
                return "Probably drinking a giant margarita and/or sleeping";
            }
        } // 15-16
        else if ((pstDate >= 15 || pstDate == 16) && now.getMonth() == 7){
            return "We're on Splash Mountain; You missed the hike";
        } // The rest
        else {
            return "You missed the live hike!  I'll try to update this site with the historical data soon"
        }

    } catch (e){
        // I don't actually trust my ability to write a timezone parser with crashing somewhere, so I assume most of the pre-trip will display this
        return "Travelling";
    }

    return "Travelling";
}

// Output in California time
function formatDate(timestamp){
    var date = new Date(timestamp * 1000);

    var timeString = date.toLocaleTimeString(
        'en-US',
        {
          timeZone: 'pst',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }
    );

    var dateString = date.toLocaleDateString(
        'en-US',
        {
          timeZone: 'pst',
          month: 'long',
          day: 'numeric'
        }
    );

    return  timeString + " (PST), " + dateString;
}