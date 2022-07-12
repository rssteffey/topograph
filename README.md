# Topo Graph

Project to display a prettied-up map of a specific hiking destination, then read a Spot GPS tracker XML feed and plot the hiking journey along the generated map.

I love Node, but hosting a server for this feels like overkill until I find it absolutely necessary, so some things will be done the harder way (Most notably, reading JSON blobs).  If this can stay a static HTML page on my site, it will.

---

## Generating the Data

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

Open Elevation API is a public API with a relatively low rate limit, so I have it written to sleep 5 seconds between calls.  Go grab a cup of coffee.  When the generation finishes, it will dump the resulting JSON object to console.  In Chrome, right click and "copy object", then paste it in a new file under the `elevationData` directory.  

*(Note that because I'm lazy and running this on a static site, this will actually be a `.js` file, not `.json`, and you'll have to add a `mountainNameElevationData = ` on the front to make your JSON available to the other scripts)*

---

## Using the data

Replace the import near the top of `mountainVis.js` with your new data source

    const pointsData = <name of your json object>;

The tracking points are sourced from a [Spot™ Satellite Tracker XML feed](https://www.findmespot.com/en-us/support/spot-x/get-help/general/spot-api-support).  The feed ID can also be replaced while you're already here swapping out things in `mountainVis.js`


## Misc Notes

I have naively left my Google Maps API key in the script import tag, but I will almost certainly deactivate it after this project since I'm just using it to generate these initial point clouds. So replace it with your own.