# Topo Graph

Project to display a prettied-up map of a specific hiking destination, then read a Spot GPS tracker XML feed and plot the hiking journey along the generated map.

I love Node, but hosting a server for this feels like overkill until I find it absolutely necessary, so some things will be done the harder way (Most notably, reading JSON blobs).  If this can stay a static HTML page on my site, it will.

---

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


### Generating the Trail

Generating the trail will be a bit more finicky/involved, but hopefully not _too_ difficult.
My process was
- Find an open source trail on OSM (The Whitney Trail I used is from [here](https://www.openstreetmap.org/relation/3289187) )
- With that trail selected and fully in view, export the current map data (I know very little about using OSM, there's probably a WAY better way of handling these next few steps)
- To keep everything JS, I used an online convertor to turn the XML export into JSON
- Store the (probably HUGE) json in a file under routeInfo, and import it to your page with a script tag like we do for the elevationData
- The `generateRouteData()` function is where I parsed this data.  For simplicity of the script, I ended up manually searching for the Trail ref ("34E04" for the Whitney Trail) and pulling out the route data into its own variable called `whitneyRoute`.  This data will be structured like

    ```
    whitneyRoute = {
        "nd": [
            {
                "_ref": "5739597821"
            },
            {
                "_ref": "842909161"
            },
            {
                "_ref": "7774476608"
            }
        ]
        "tag": [
            {
                "_k": "name",
                "_v": "Mount Whitney Trail"
            },
            {
                "_k": "ref",
                "_v": "34E04"
            }
        ],
        "_id": "70653369",
        <other metadata>
    }
    ```
- Then generateRouteData() should go through that nd list, parsing the other top-level `node` array for matches
- Take the dumped output (routeData and landmarks) and copy them into a new json file under routeInfo

---

## Using the data

Replace the imports near the top of `mountainVis.js` with your new data sources

    const pointsData = <name of your json elevation object>;
    const routeData = <name of your json routes object>;

The tracking points are sourced from a [Spot™ Satellite Tracker XML feed](https://www.findmespot.com/en-us/support/spot-x/get-help/general/spot-api-support).  The feed ID can also be replaced while you're already here swapping out things in `mountainVis.js`


## Misc Notes

I have naively left my Google Maps API key in the script import tag, but I will almost certainly deactivate it after this project since I'm just using it to generate these initial point clouds. So replace it with your own.