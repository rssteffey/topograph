// Priority increases going down, so start with most generic boundaries
const whitneyZones = [
    {
        name: "The Whitney Zone",
        info: "The immediate area around Mt Whitney, restricted to permit holders",
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
        name: "The 99 Switchbacks",
        info: "Infamously named, this is the main elevation push for the morning until we reach Trail Crest",
        polygonPoints: [
            [36.559795, -118.289583],
            [36.562427, -118.286158],
            [36.562901, -118.281427],
            [36.561264, -118.280858],
            [36.556817, -118.288883]
        ]
    },
    {
        name: "Whitney Portal",
        info: "The departure point for the primary Mt. Whitney Trail",
        elevation: 8300,
        polygonPoints: [
            [36.586862, -118.243744],
            [36.593159, -118.230539],
            [36.589403, -118.220400],
            [36.585750, -118.227449],
            [36.584053, -118.243253]
        ]
    }
]