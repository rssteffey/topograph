// Priority increases going down, so start with most generic boundaries
const whitneyZones = [
    {
        name: "The Whitney Zone",
        info: "The immediate area around Mt Whitney, restricted to permit holders",
        color: 0xffffff,
        polygonPoints: [
            [36.587225, -118.268935],
            [36.565151, -118.235021],
            [36.553672, -118.247070],
            [36.551239, -118.312680],
            [36.597189, -118.314257],
            [36.597611, -118.275901]
        ]
    },
    {
        name: "The Forest",
        info: "The first 2 miles of trail are forest hiking. Picturesque *and* shaded",
        elevation: 9000,
        color: 0x44ff44,
        polygonPoints: [
            [36.5912667, -118.2341461],
            [36.582128, -118.2406402],
            [36.5757524, -118.2441163],
            [36.5869179, -118.2561755],
            [36.5915179, -118.2451755],
            [36.5912668, -118.2341460]
        ]
    },
    {
        name: "The Ridgeline",
        info: "Most of the altitude is done, but the last 2 miles are above 14000ft",
        elevation: 14000,
        color: 0xaa11dd,
        polygonPoints: [
            [ 36.5790097, -118.2982205 ],
            [ 36.579397, -118.2891704 ],
            [ 36.5561974, -118.2886048 ],
            [ 36.556025, -118.2948293 ],
            [ 36.5790097, -118.2982205 ]
        ]
    },
    {
        name: "The 99 Switchbacks",
        info: "Infamously named, this is the main elevation push for the morning until we reach Trail Crest",
        color: 0x880000,
        polygonPoints: [
            [36.559795, -118.289583],
            [36.562427, -118.286158],
            [36.562901, -118.281427],
            [36.561264, -118.280858],
            [36.556817, -118.288883]
        ]
    },
    {
        name: "The Meadows",
        info: "Home to Outpost Camp, but we're packing right on by up towards Trail Camp (Potentially with the audible to camp here on night #2)",
        elevation: 11000,
        color: 0x448844,
        polygonPoints: [
            [ 36.5714827, -118.2659697],
            [ 36.5664677, -118.2624721],
            [ 36.5724721, -118.2542466],
            [ 36.5749536, -118.2545041],
            [ 36.5714828, -118.2659698 ]
          ]
    },
    {
        name: "Lone Pine Lake",
        info: "2.5 miles in. Time for a relaxing break by the water",
        elevation: 10000,
        polygonPoints: [
            [ 36.5816455, -118.2503820 ],
            [ 36.5781891, -118.2434166 ],
            [ 36.5732360, -118.2494079 ],
            [ 36.5782338, -118.2551027 ],
            [ 36.5809563, -118.2529569 ]
          ]
    },
    {
        name: "Trail Camp",
        info: "Our camp for 2 nights. (I expect to sleep a whole lot better on night two)",
        elevation: 12000,
        color: 0xcc8800,
        polygonPoints: [
            [ 36.5656584, -118.2809234],
            [ 36.5655457, -118.2769872],
            [ 36.5613749, -118.2768155],
            [ 36.5608234, -118.2807637],
            [ 36.5656583, -118.2809233]
          ]
    },
    {
        name: "Whitney Portal",
        info: "The departure point for the primary Mt. Whitney Trail",
        elevation: 8300,
        color: 0xcccc44,
        polygonPoints: [
            [36.586862, -118.243744],
            [36.593159, -118.230539],
            [36.589403, -118.220400],
            [36.585750, -118.227449],
            [36.584053, -118.243253]
        ]
    },
    {
        name: "Mirror Lake",
        info: "Purty",
        elevation: 10640,
        color: 0x8888ff,
        polygonPoints: [
                [ 36.5714294, -118.2644308 ],
                [ 36.5700196, -118.2642504 ],
                [ 36.5700368, -118.2619759 ],
                [ 36.5709676, -118.2614618 ],
                [ 36.5718538, -118.2624372 ]
          ]
    },
    {
        name: "The Needles",
        info: "Nearing the summit now",
        elevation: 14300,
        color: 0xffaaaa,
        polygonPoints: [
            [ 36.5717943, -118.2942532 ],
            [ 36.5720913, -118.2887009 ],
            [ 36.5769131, -118.2903437 ],
            [ 36.5771196, -118.2933502 ],
            [ 36.5758103, -118.2950228 ],
            [ 36.5717943, -118.2942532 ]
        ]
    },
    {
        name: "Summit",
        info: "Evidently we made it",
        elevation: 14505,
        color: 0xffffff,
        polygonPoints: [
            [ 36.5797819, -118.2936417 ],
            [ 36.5800148, -118.2906442 ],
            [ 36.5769131, -118.2903437 ],
            [ 36.5771196, -118.2933502 ],
            [ 36.5797819, -118.2936417 ]
        ]
    },
    {
        name: "Outpost Camp",
        info: "Camping further downhill",
        elevation: 10300,
        color: 0xaaff44,
        polygonPoints: [
            [ 36.5712668, -118.2599327 ],
            [ 36.5724898, -118.2594775 ],
            [ 36.5724326, -118.2580017 ],
            [ 36.5713665, -118.2574571 ],
            [ 36.5703798, -118.2575594 ],
            [ 36.5702497, -118.2594733 ],
            [ 36.5712667, -118.2599326 ]
        ]
    },
    {
        name: "Trail Crest",
        info: "The switchbacks are over!",
        elevation: 13700,
        color: 0x228888,
        polygonPoints: [
            [ 36.5626706, -118.2946595 ],
            [ 36.5614469, -118.2900018 ],
            [ 36.5576206, -118.2884564 ],
            [ 36.5572586, -118.2929638 ],
            [ 36.5626706, -118.2946595 ]
        ]
    }
]