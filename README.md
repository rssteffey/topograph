# Topo Graph

Project to display a prettied-up map of a specific hiking destination, then read a Spot GPS tracker XML feed and plot the hiking journey along the generated map.

I love Node, but hosting a server for this feels like overkill until I find it absolutely necessary, so some things will be done the harder way (Most notably, reading JSON blobs).  If this can stay a static HTML page on my site, it will.

Demo here: [From when Shawn hiked Mt. Whitney](https://www.rssteffey.com/topograph/)

---

# How to use this for your own Mt. Whitney Hike

Good news, this is simple(ish)!

- Point things at your own [Spot™ GPS feed](https://www.findmespot.com/en-us/support/spot-x/get-help/general/spot-api-support)
- Update the bonus tracker text for when the tracker is off-map

To change the url in `getRemoteFeedData()`, swap my Lambda URL to your Spot json URL. 
>https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/{your_spot_feed_id}/message.json

(You can also deploy your own AWS Lambda caching function; see `lambdaCache.js` to copy mine)

If you're using a different tracker like InReach, you'll unfortunately have to customize those relevant methods yourself.  Hopefully it should be limited to those 2/3, since `normalizeSpotFeed()` is meant to standardize your results.

The culprit for status updates on the top left panel is `getFlavorTextByTime()`.  You can modify that function with your own trip-specific info, or just delete it and return "Currently not on map" for whenever your tracker isn't within bounds.

---

# How to use this for a different location

## Step 1: Generating Data

### The Mountain

The data is generated with a combination of Google Maps' coordinate-calculation API and the [Open Elevation API](https://open-elevation.com/) because Google gets expensive quick.

To generate a new mountain for your own use, add this import to `index.html`

    <script src="generateMountain.js"></script> 

Then open up a browser console window, and run

    generateElevationData(36.573672, -118.265232, 4.5, 3, 10, "whitney")  

Those params are
- Latitude of the point to center the map on
- Longitude of the point to center the map on
- Total width (East/West) in miles you want the generated area
- Total height (North/South) in miles you want the generated area
- Grid points per mile *(The Whitney map in this project uses 15, although this is probably entirely too high since most points are returned in sets of 2-3 neighbors of identical elevation.  I interpolate this out in the display portion, but you could save a ton of mesh points up front by dropping to < 10)*
- The name stored in the final json object

Open Elevation API is a public API with a relatively low rate limit, so I have it written to sleep 5 seconds between calls.  Go grab a cup of coffee.  
When the generation finishes, it will dump the resulting JSON object to console.  In Chrome, right click and "copy object", then paste it in a new file under the `elevationData` directory.  

*(Note that because I'm lazy and running this on a static site, this will actually be a `.js` file, not `.json`, and you'll have to add a `mountainNameElevationData = ` on the front to make your JSON available to the other scripts)*


### The Trail

Generating the trail will be a bit more finicky/involved, but hopefully not _too_ difficult.
My process was
- Find an open source trail on OSM (The Whitney Trail I used is from [here](https://www.openstreetmap.org/relation/3289187) )
- With that trail selected and fully in view, export the current map data
- To keep everything JS, I used an online convertor to turn the XML export into JSON
- Store the (probably HUGE) json in a file under routeInfo, and import it to your page with a script tag like we do for the elevationData
- The `generateRouteData(routeID)` function is where I parsed this data. Call it from the developer console with that OSM relation ID (3289187 in this case)
- This should parse out the Ways associated with the trail, and the nodes associated with those Ways, storing them as multiple ways with lat/lon values
- Take the dumped output (routeData and landmarks) and copy them into a new `js` file under routeInfo

> Note: While `routeData` works out-of-the-box, the `landmarks` array is for *reference only*. You will have to modify the data with your own supplemental information to match this format (where *iconname* is a [Font Awesome](https://fontawesome.com/) icon)
```
{
    "lat": "36.5593438",
    "lon": "-118.2915790",
    "elev": "13,645 ft",
    "tag": "Trail Crest",
    "info": "The junction of the Mount Whitney and John Muir Trails",
    "type": "junction",
    "iconname": "fa-signs-post"
}
```

---

## Using the data

Replace the imports near the top of `mountainVis.js` with your new data sources

    const pointsData = <name of your json elevation object>;
    const routeData = <name of your json routes object>;
    const landmarkData = <name of your json landmarks object>;
    const zoneData = <name of your json zones object>;

> Note: zoneData is a custom list of polygons, manually made.  Reference the whitneyZones.js file to see the format

The tracking points are sourced from a [Spot™ Satellite Tracker XML feed](https://www.findmespot.com/en-us/support/spot-x/get-help/general/spot-api-support).  I ended up keeping this call in an AWS Lambda function to handle caching in 10 minute intervals and protect my feed ID.

If using this for your own project, change the url in `getRemoteFeedData()` directly to your SPOT JSON URL. (or deploy your own copy of the Lambda, as mentioned in the "Using this for your own Mt. Whitney Hike" section)

---

# FAQ

## - Shawn, How do I add a satellite view like you did?

Unfortunately, this part isn't automated.  I made the decision early on not to use map tileset structures for my data, and that wipes out most satellite views.

To do it manually, I went to https://earthexplorer.usgs.gov/ , and then built a polygon (bottom left of the menu) with the four coordinates of my map corners (first and last entries of the first and last rows in your elevation data).

Then I zoomed that rectangle to fill as much of the screen as possible, and took a screenshot.  Then I cleared the point markers and took another screenshot of the same area.

Take both these images into your photo editor of choice, overlay them exactly, then crop the image to the four corner markers, and export only the clean layer.  There's your map texture.

## - I'm having trouble making zones on my map

The Zones concept was a last-minute addition for me, so it's the ugliest feature. I made the Whitney zones manually with [this online polygon tool](https://www.keene.edu/campus/maps/tool/).

 When you're on the app, try pressing `` ` `` to enter debug mode, then `z` to view your zones on the map.  Clicking around in debug mode will simulate a tracking marker zone update at that point (Although it will also simulate all tracking points as if they're offset from Spring Hill, TN to the Mt Whitney Trailhead, so you'll want to modify that bit)

 Zones later in the list have priority; so when you define your array, start with the largest zones and nest inward.

 ## - It's Aug 12/13/14 but I don't see anything like tracking points on the map?

 Look, it's tough to test a data feed coming from a very sketchy API (sometimes objects are objects, sometimes they're arrays; the pagination consistently counts 1 entry too many; requests frequently fail for no discernable reason) that ALSO requires me to walk around town to generate one new test data point every ten minutes. \
 It's likely things are just broken now that I'm in CA away from a computer.  Sorry about that.  I'll fix it for the next mountain.
