const whitneyTrailLandmarks = [
    {
        "lat": "36.5593438",
        "lon": "-118.2915790",
        "elev": "13,645 ft",
        "tag": "Trail Crest",
        "info": "The junction of the Mount Whitney Trail and the 211 mile John Muir Trail; don't miss your turn",
        "type": "junction",
        "textureName": "signs",
        "iconname": "fa-signs-post"
    },
    {
        "lat": "36.562140",
        "lon": "-118.286517",
        "tag": "The 99 Switchbacks",
        "info": "Technically 97, but who's counting?  This chunk of steep zig-zagging will be most of our morning; with any luck we'll make Trail Crest before sunrise.",
        "link": "https://4055b5b7-a-62cb3a1a-s-sites.googlegroups.com/site/mtwhitneytrailinfo/MtWhitneyTrail/waypoints/WaynePyle97Switchbacks.pdf?attachauth=ANoY7crMqLkQvtDI0u4-gEw_Jk3PmgAYSSE7einW856Fi23PldSSag-rtzMIZ-9u0PgsbVlOf59C6Bwl6VS9erSUXlGejCoaSE7cE2HpsDy_EEWmFF5xc1Z8zwMGmbre-ntJHyr7FTL4jTbKanoQz2VnSrhsXk-1gbDOisRjH3X-caGl3_yaOUsEyKs44ElO0g-UeFr10FmV6GE3eqtyd1ff2VZrsPfFj4vTsx7vy3Nm3x4xfT1RyZEt1YenHVgx4Z5a73X4r6KxpLQWIgm_57g3utoPAILdRA%3D%3D&attredirects=0",
        "type": "switchbacks",
        "textureName": "switchback",
        "hoverBoost": 0.03,
        "iconname": "fa-s fa-flip-horizontal"
    },
    {
        "lat": "36.5654812",
        "lon": "-118.2719387",
        "tag": "Creek Crossing",
        "info": "One of many stream crossings on the way up the trail (although this one has stepping stones)",
        "type": "river ford",
        "textureName": "water",
        "iconSize": 0.03,
        "iconname": "fa-water"
    },
    {
        "lat": "36.5709070",
        "lon": "-118.2617096",
        "tag": "Lone Pine Creek Crossing",
        "info": "One of many stream crossings to wade during the trail",
        "type": "river ford",
        "textureName": "water",
        "iconSize": 0.03,
        "iconname": "fa-water"
    },
    {
        "lat": "36.5719575",
        "lon": "-118.2592566",
        "tag": "Lone Pine Creek Crossing",
        "info": "One of many stream crossings to wade during the trail",
        "type": "river ford",
        "textureName": "water",
        "iconSize": 0.03,
        "iconname": "fa-water"
    },
    {
        "lat": "36.5711046",
        "lon": "-118.2584299",
        "tag": "Lone Pine Creek Crossing",
        "info": "One of many stream crossings to wade during the trail",
        "type": "river ford",
        "textureName": "water",
        "iconSize": 0.03,
        "iconname": "fa-water"
    },
    {
        "lat": "36.5868294",
        "lon": "-118.2453406",
        "tag": "Creek Crossing",
        "info": "The first of many stream crossings to wade during the trail",
        "type": "river ford",
        "textureName": "water",
        "iconSize": 0.03,
        "iconname": "fa-water"
    },
    {
        "lat": "36.5868781",
        "lon": "-118.2401401",
        "elev": "8,330 ft",
        "tag": "Whitney Portal Trailhead",
        "info": "The return point once we're at the end of our physical ability. (Fingers crossed the bears haven't taken an interest in our rental car contents)",
        "type": "trailhead",
        "hoverBoost": 0.01,
        "textureName": "hike",
        "iconname": "fa-person-hiking"
    },
    {
        "lat": "36.562999",
        "lon": "-118.278792",
        "elev": "12,000 ft",
        "tag": "Trail Camp",
        "info": "Our home for 2 nights, and the last dependable water source before the summit (Filtering out giardia recommended)",
        "type": "camp",
        "textureName": "tent",
        "iconname": "fa-campground"
    },
    {
        "lat": "36.570973",
        "lon": "-118.259875",
        "tag": "Outpost Camp",
        "elev": "10,400 ft",
        "info": "Still 1,600 ft of elevation until Trail Camp.  If you see us stopping here for the night, it means we've either been driven down-mountain by storms or altitude sickness.  In either case, we'll be heading out for the summit bid extra early in the morning. (Unless this is on our down-hill half, in which case we're 2 miles closer to a shower)",
        "type": "camp",
        "textureName": "tent",
        "iconname": "fa-campground",
        "hoverBoost": 0.01,
        "iconSize": 0.04
    },
    {
        "lat": "36.588715",
        "lon": "-118.229271",
        "elev": "8,300 ft",
        "tag": "Whitney Portal Campground",
        "info": "The last driveable & campable place before backpacking up the mountain.  If you don't see us here on the night of the 11th, we're already off schedule",
        "type": "camp",
        "textureName": "tent",
        "hoverBoost": 0.01,
        "iconname": "fa-campground"
    },
    {
        "lat": "36.5785905",
        "lon": "-118.2933377",
        "tag": "Mount Whitney Summit",
        "elev": "14,505 feet",
        "info": "The highest point in the lower 48 states.",
        "type": "peak",
        "textureName": "mountain",
        "hoverBoost": 0.01,
        "iconname": "fa-mountain"
    },
    {
        "lat": "36.573901",
        "lon": "-118.290015",
        "tag": "The Spires",
        "elev": "14,300 feet",
        "info": "These spires help give Whitney such a distinctive profile.  We'll be passing by them as we aim for the summit",
        "type": "peak",
        "textureName": "mountain",
        "iconSize": 0.03,
        "hoverBoost": 0.02,
        "iconname": "fa-mountain"
    },
    {
        "lat": "36.576387",
        "lon": "-118.248317",
        "tag": "Lone Pine Lake",
        "elev": "10,050 feet",
        "info": "2.5 Miles into the woods and the first significant checkpoint",
        "type": "lake",
        "textureName": "fish",
        "hoverBoost": 0.01,
        "iconname": "fa-fish"
    },
    {
        "lat": "36.561391",
        "lon": "-118.272203",
        "tag": "Consultation Lake",
        "elev": "11,800 feet",
        "info": "Just shy of Trail Camp, Consultation Lake is a viable second choice for spending the night if camp is looking too crowded",
        "type": "lake",
        "textureName": "fish",
        "hoverBoost": 0.01,
        "iconname": "fa-fish"
    },
    {
        "lat": "36.576060",
        "lon": "-118.251608",
        "tag": "The Whitney Zone",
        "elev": "10,100 feet",
        "info": "Past this point all hikers require a Mount Whitney permit (Day or Overnight).  These are distributed with a yearly lottery, and these summer dates are highly competitive - plan in advance. (Shawn has been trying for 6 years)",
        "type": "junction",
        "textureName": "signs",
        "hoverBoost": 0.01,
        "iconname": "fa-road-barrier"
    },

];

// Generated from OSM Trail: https://www.openstreetmap.org/relation/3289187
const whitneyTrailData = {
    "ways": [
        {
            "name": "1015911445",
            "nodes": [
                {
                    "lat": "36.5605651",
                    "lon": "-118.2931074"
                },
                {
                    "lat": "36.5605480",
                    "lon": "-118.2931282"
                },
                {
                    "lat": "36.5605214",
                    "lon": "-118.2931231"
                },
                {
                    "lat": "36.5604754",
                    "lon": "-118.2930865"
                },
                {
                    "lat": "36.5603814",
                    "lon": "-118.2928251"
                },
                {
                    "lat": "36.5603627",
                    "lon": "-118.2928191"
                },
                {
                    "lat": "36.5603282",
                    "lon": "-118.2927842"
                },
                {
                    "lat": "36.5603094",
                    "lon": "-118.2927386"
                },
                {
                    "lat": "36.5602598",
                    "lon": "-118.2926877"
                },
                {
                    "lat": "36.5602092",
                    "lon": "-118.2926515"
                },
                {
                    "lat": "36.5601526",
                    "lon": "-118.2926293"
                },
                {
                    "lat": "36.5601133",
                    "lon": "-118.2925985"
                },
                {
                    "lat": "36.5600600",
                    "lon": "-118.2925811"
                },
                {
                    "lat": "36.5600358",
                    "lon": "-118.2925341"
                },
                {
                    "lat": "36.5600067",
                    "lon": "-118.2924939"
                },
                {
                    "lat": "36.5599792",
                    "lon": "-118.2924034"
                },
                {
                    "lat": "36.5599259",
                    "lon": "-118.2923356"
                },
                {
                    "lat": "36.5598790",
                    "lon": "-118.2923142"
                },
                {
                    "lat": "36.5598618",
                    "lon": "-118.2922907"
                },
                {
                    "lat": "36.5598656",
                    "lon": "-118.2922786"
                },
                {
                    "lat": "36.5598925",
                    "lon": "-118.2922786"
                },
                {
                    "lat": "36.5599113",
                    "lon": "-118.2922726"
                },
                {
                    "lat": "36.5599200",
                    "lon": "-118.2922632"
                },
                {
                    "lat": "36.5598450",
                    "lon": "-118.2921444"
                },
                {
                    "lat": "36.5597124",
                    "lon": "-118.2921173"
                },
                {
                    "lat": "36.5596846",
                    "lon": "-118.2920949"
                },
                {
                    "lat": "36.5596722",
                    "lon": "-118.2920614"
                },
                {
                    "lat": "36.5596512",
                    "lon": "-118.2919642"
                },
                {
                    "lat": "36.5595833",
                    "lon": "-118.2918669"
                },
                {
                    "lat": "36.5594783",
                    "lon": "-118.2917885"
                },
                {
                    "lat": "36.5594406",
                    "lon": "-118.2917449"
                },
                {
                    "lat": "36.5594460",
                    "lon": "-118.2917080"
                },
                {
                    "lat": "36.5594395",
                    "lon": "-118.2916591"
                },
                {
                    "lat": "36.5594137",
                    "lon": "-118.2916336"
                },
                {
                    "lat": "36.5593727",
                    "lon": "-118.2916175"
                },
                {
                    "lat": "36.5593533",
                    "lon": "-118.2916027"
                }
            ]
        },
        {
            "name": "70653369",
            "nodes": [
                {
                    "lat": "36.5592729",
                    "lon": "-118.2914684"
                },
                {
                    "lat": "36.5591950",
                    "lon": "-118.2914364"
                },
                {
                    "lat": "36.5590463",
                    "lon": "-118.2913519"
                },
                {
                    "lat": "36.5589429",
                    "lon": "-118.2911937"
                },
                {
                    "lat": "36.5589089",
                    "lon": "-118.2910888"
                },
                {
                    "lat": "36.5588880",
                    "lon": "-118.2909684"
                },
                {
                    "lat": "36.5588675",
                    "lon": "-118.2907672"
                },
                {
                    "lat": "36.5588664",
                    "lon": "-118.2907122"
                },
                {
                    "lat": "36.5588804",
                    "lon": "-118.2906640"
                },
                {
                    "lat": "36.5588740",
                    "lon": "-118.2906264"
                },
                {
                    "lat": "36.5588524",
                    "lon": "-118.2906063"
                },
                {
                    "lat": "36.5588632",
                    "lon": "-118.2905647"
                },
                {
                    "lat": "36.5588632",
                    "lon": "-118.2905231"
                },
                {
                    "lat": "36.5588750",
                    "lon": "-118.2904950"
                },
                {
                    "lat": "36.5588750",
                    "lon": "-118.2904534"
                },
                {
                    "lat": "36.5588513",
                    "lon": "-118.2904226"
                },
                {
                    "lat": "36.5588718",
                    "lon": "-118.2901517"
                },
                {
                    "lat": "36.5588923",
                    "lon": "-118.2900229"
                },
                {
                    "lat": "36.5588880",
                    "lon": "-118.2898740"
                },
                {
                    "lat": "36.5588944",
                    "lon": "-118.2896863"
                },
                {
                    "lat": "36.5589117",
                    "lon": "-118.2896206"
                },
                {
                    "lat": "36.5589106",
                    "lon": "-118.2894918"
                },
                {
                    "lat": "36.5589181",
                    "lon": "-118.2893845"
                },
                {
                    "lat": "36.5589084",
                    "lon": "-118.2893027"
                },
                {
                    "lat": "36.5588804",
                    "lon": "-118.2891472"
                },
                {
                    "lat": "36.5588901",
                    "lon": "-118.2890841"
                },
                {
                    "lat": "36.5588654",
                    "lon": "-118.2889768"
                },
                {
                    "lat": "36.5588524",
                    "lon": "-118.2889031"
                },
                {
                    "lat": "36.5588212",
                    "lon": "-118.2887998"
                },
                {
                    "lat": "36.5588083",
                    "lon": "-118.2886885"
                },
                {
                    "lat": "36.5588093",
                    "lon": "-118.2885852"
                },
                {
                    "lat": "36.5587770",
                    "lon": "-118.2885383"
                },
                {
                    "lat": "36.5587652",
                    "lon": "-118.2882862"
                },
                {
                    "lat": "36.5587382",
                    "lon": "-118.2882124"
                },
                {
                    "lat": "36.5586074",
                    "lon": "-118.2876961"
                },
                {
                    "lat": "36.5585955",
                    "lon": "-118.2875372"
                },
                {
                    "lat": "36.5585815",
                    "lon": "-118.2874574"
                },
                {
                    "lat": "36.5585610",
                    "lon": "-118.2873910"
                },
                {
                    "lat": "36.5585384",
                    "lon": "-118.2873675"
                },
                {
                    "lat": "36.5585325",
                    "lon": "-118.2873441"
                },
                {
                    "lat": "36.5585443",
                    "lon": "-118.2873387"
                },
                {
                    "lat": "36.5585653",
                    "lon": "-118.2873501"
                },
                {
                    "lat": "36.5585993",
                    "lon": "-118.2873481"
                },
                {
                    "lat": "36.5586558",
                    "lon": "-118.2874721"
                },
                {
                    "lat": "36.5587571",
                    "lon": "-118.2876136"
                },
                {
                    "lat": "36.5587873",
                    "lon": "-118.2876411"
                },
                {
                    "lat": "36.5588083",
                    "lon": "-118.2876766"
                },
                {
                    "lat": "36.5588417",
                    "lon": "-118.2877102"
                },
                {
                    "lat": "36.5588713",
                    "lon": "-118.2877719"
                },
                {
                    "lat": "36.5589057",
                    "lon": "-118.2878322"
                },
                {
                    "lat": "36.5589273",
                    "lon": "-118.2878584"
                },
                {
                    "lat": "36.5589348",
                    "lon": "-118.2878168"
                },
                {
                    "lat": "36.5588993",
                    "lon": "-118.2876438"
                },
                {
                    "lat": "36.5588729",
                    "lon": "-118.2875593"
                },
                {
                    "lat": "36.5588589",
                    "lon": "-118.2874118"
                },
                {
                    "lat": "36.5588470",
                    "lon": "-118.2873635"
                },
                {
                    "lat": "36.5588713",
                    "lon": "-118.2873722"
                },
                {
                    "lat": "36.5589009",
                    "lon": "-118.2874285"
                },
                {
                    "lat": "36.5589375",
                    "lon": "-118.2874815"
                },
                {
                    "lat": "36.5590576",
                    "lon": "-118.2876404"
                },
                {
                    "lat": "36.5591163",
                    "lon": "-118.2877551"
                },
                {
                    "lat": "36.5591611",
                    "lon": "-118.2878201"
                },
                {
                    "lat": "36.5591837",
                    "lon": "-118.2878691"
                },
                {
                    "lat": "36.5592225",
                    "lon": "-118.2879194"
                },
                {
                    "lat": "36.5592305",
                    "lon": "-118.2879549"
                },
                {
                    "lat": "36.5592758",
                    "lon": "-118.2880166"
                },
                {
                    "lat": "36.5593022",
                    "lon": "-118.2880890"
                },
                {
                    "lat": "36.5593329",
                    "lon": "-118.2881353"
                },
                {
                    "lat": "36.5594422",
                    "lon": "-118.2883734"
                },
                {
                    "lat": "36.5594675",
                    "lon": "-118.2884471"
                },
                {
                    "lat": "36.5594848",
                    "lon": "-118.2884599"
                },
                {
                    "lat": "36.5594982",
                    "lon": "-118.2884545"
                },
                {
                    "lat": "36.5594961",
                    "lon": "-118.2884283"
                },
                {
                    "lat": "36.5594708",
                    "lon": "-118.2883378"
                },
                {
                    "lat": "36.5594605",
                    "lon": "-118.2882252"
                },
                {
                    "lat": "36.5594654",
                    "lon": "-118.2880461"
                },
                {
                    "lat": "36.5594600",
                    "lon": "-118.2879918"
                },
                {
                    "lat": "36.5594487",
                    "lon": "-118.2879677"
                },
                {
                    "lat": "36.5594460",
                    "lon": "-118.2879516"
                },
                {
                    "lat": "36.5594543",
                    "lon": "-118.2879472"
                },
                {
                    "lat": "36.5594729",
                    "lon": "-118.2879549"
                },
                {
                    "lat": "36.5595128",
                    "lon": "-118.2880320"
                },
                {
                    "lat": "36.5595289",
                    "lon": "-118.2881011"
                },
                {
                    "lat": "36.5595327",
                    "lon": "-118.2881353"
                },
                {
                    "lat": "36.5595451",
                    "lon": "-118.2881769"
                },
                {
                    "lat": "36.5595650",
                    "lon": "-118.2882017"
                },
                {
                    "lat": "36.5596765",
                    "lon": "-118.2884580"
                },
                {
                    "lat": "36.5596835",
                    "lon": "-118.2884585"
                },
                {
                    "lat": "36.5596948",
                    "lon": "-118.2881346"
                },
                {
                    "lat": "36.5596835",
                    "lon": "-118.2881024"
                },
                {
                    "lat": "36.5596884",
                    "lon": "-118.2880696"
                },
                {
                    "lat": "36.5597003",
                    "lon": "-118.2880679"
                },
                {
                    "lat": "36.5597110",
                    "lon": "-118.2880723"
                },
                {
                    "lat": "36.5597848",
                    "lon": "-118.2882265"
                },
                {
                    "lat": "36.5598322",
                    "lon": "-118.2883465"
                },
                {
                    "lat": "36.5598828",
                    "lon": "-118.2884324"
                },
                {
                    "lat": "36.5599038",
                    "lon": "-118.2884793"
                },
                {
                    "lat": "36.5599792",
                    "lon": "-118.2886074"
                },
                {
                    "lat": "36.5599916",
                    "lon": "-118.2886489"
                },
                {
                    "lat": "36.5600072",
                    "lon": "-118.2886586"
                },
                {
                    "lat": "36.5600153",
                    "lon": "-118.2886503"
                },
                {
                    "lat": "36.5599986",
                    "lon": "-118.2885705"
                },
                {
                    "lat": "36.5599889",
                    "lon": "-118.2884806"
                },
                {
                    "lat": "36.5599711",
                    "lon": "-118.2884062"
                },
                {
                    "lat": "36.5599625",
                    "lon": "-118.2883452"
                },
                {
                    "lat": "36.5599485",
                    "lon": "-118.2883070"
                },
                {
                    "lat": "36.5599393",
                    "lon": "-118.2881299"
                },
                {
                    "lat": "36.5599275",
                    "lon": "-118.2880716"
                },
                {
                    "lat": "36.5599237",
                    "lon": "-118.2879469"
                },
                {
                    "lat": "36.5599431",
                    "lon": "-118.2877900"
                },
                {
                    "lat": "36.5599420",
                    "lon": "-118.2877370"
                },
                {
                    "lat": "36.5599329",
                    "lon": "-118.2876948"
                },
                {
                    "lat": "36.5599131",
                    "lon": "-118.2876506"
                },
                {
                    "lat": "36.5598758",
                    "lon": "-118.2875861"
                },
                {
                    "lat": "36.5598408",
                    "lon": "-118.2875479"
                },
                {
                    "lat": "36.5598025",
                    "lon": "-118.2874869"
                },
                {
                    "lat": "36.5597503",
                    "lon": "-118.2873917"
                },
                {
                    "lat": "36.5597131",
                    "lon": "-118.2872837"
                },
                {
                    "lat": "36.5596770",
                    "lon": "-118.2870966"
                },
                {
                    "lat": "36.5596765",
                    "lon": "-118.2870584"
                },
                {
                    "lat": "36.5597171",
                    "lon": "-118.2868515"
                },
                {
                    "lat": "36.5597261",
                    "lon": "-118.2867613"
                },
                {
                    "lat": "36.5597180",
                    "lon": "-118.2867412"
                },
                {
                    "lat": "36.5597040",
                    "lon": "-118.2867231"
                },
                {
                    "lat": "36.5596523",
                    "lon": "-118.2866883"
                },
                {
                    "lat": "36.5596000",
                    "lon": "-118.2866212"
                },
                {
                    "lat": "36.5595796",
                    "lon": "-118.2865689"
                },
                {
                    "lat": "36.5595709",
                    "lon": "-118.2865307"
                },
                {
                    "lat": "36.5595526",
                    "lon": "-118.2864824"
                },
                {
                    "lat": "36.5595526",
                    "lon": "-118.2864502"
                },
                {
                    "lat": "36.5595672",
                    "lon": "-118.2864576"
                },
                {
                    "lat": "36.5595893",
                    "lon": "-118.2865099"
                },
                {
                    "lat": "36.5596550",
                    "lon": "-118.2865991"
                },
                {
                    "lat": "36.5597024",
                    "lon": "-118.2866259"
                },
                {
                    "lat": "36.5597745",
                    "lon": "-118.2866433"
                },
                {
                    "lat": "36.5597923",
                    "lon": "-118.2866648"
                },
                {
                    "lat": "36.5598144",
                    "lon": "-118.2867486"
                },
                {
                    "lat": "36.5598235",
                    "lon": "-118.2867546"
                },
                {
                    "lat": "36.5598268",
                    "lon": "-118.2867479"
                },
                {
                    "lat": "36.5598349",
                    "lon": "-118.2866701"
                },
                {
                    "lat": "36.5598489",
                    "lon": "-118.2866634"
                },
                {
                    "lat": "36.5598575",
                    "lon": "-118.2866889"
                },
                {
                    "lat": "36.5598413",
                    "lon": "-118.2868297"
                },
                {
                    "lat": "36.5598478",
                    "lon": "-118.2869397"
                },
                {
                    "lat": "36.5598672",
                    "lon": "-118.2869800"
                },
                {
                    "lat": "36.5598769",
                    "lon": "-118.2868633"
                },
                {
                    "lat": "36.5598973",
                    "lon": "-118.2867600"
                },
                {
                    "lat": "36.5598973",
                    "lon": "-118.2866889"
                },
                {
                    "lat": "36.5599124",
                    "lon": "-118.2866715"
                },
                {
                    "lat": "36.5599275",
                    "lon": "-118.2867251"
                },
                {
                    "lat": "36.5599301",
                    "lon": "-118.2869726"
                },
                {
                    "lat": "36.5599501",
                    "lon": "-118.2869478"
                },
                {
                    "lat": "36.5599690",
                    "lon": "-118.2866795"
                },
                {
                    "lat": "36.5599841",
                    "lon": "-118.2866819"
                },
                {
                    "lat": "36.5599892",
                    "lon": "-118.2867178"
                },
                {
                    "lat": "36.5599994",
                    "lon": "-118.2867426"
                },
                {
                    "lat": "36.5599986",
                    "lon": "-118.2867908"
                },
                {
                    "lat": "36.5600026",
                    "lon": "-118.2868210"
                },
                {
                    "lat": "36.5600115",
                    "lon": "-118.2868284"
                },
                {
                    "lat": "36.5600266",
                    "lon": "-118.2868110"
                },
                {
                    "lat": "36.5600298",
                    "lon": "-118.2867912"
                },
                {
                    "lat": "36.5600266",
                    "lon": "-118.2867372"
                },
                {
                    "lat": "36.5599964",
                    "lon": "-118.2865950"
                },
                {
                    "lat": "36.5600040",
                    "lon": "-118.2865736"
                },
                {
                    "lat": "36.5600223",
                    "lon": "-118.2865803"
                },
                {
                    "lat": "36.5600675",
                    "lon": "-118.2867667"
                },
                {
                    "lat": "36.5600772",
                    "lon": "-118.2867479"
                },
                {
                    "lat": "36.5600578",
                    "lon": "-118.2866232"
                },
                {
                    "lat": "36.5600654",
                    "lon": "-118.2865427"
                },
                {
                    "lat": "36.5600718",
                    "lon": "-118.2865377"
                },
                {
                    "lat": "36.5600805",
                    "lon": "-118.2865427"
                },
                {
                    "lat": "36.5600845",
                    "lon": "-118.2865726"
                },
                {
                    "lat": "36.5600775",
                    "lon": "-118.2866028"
                },
                {
                    "lat": "36.5600786",
                    "lon": "-118.2866229"
                },
                {
                    "lat": "36.5601098",
                    "lon": "-118.2867070"
                },
                {
                    "lat": "36.5601149",
                    "lon": "-118.2867359"
                },
                {
                    "lat": "36.5601074",
                    "lon": "-118.2868297"
                },
                {
                    "lat": "36.5601483",
                    "lon": "-118.2869558"
                },
                {
                    "lat": "36.5601830",
                    "lon": "-118.2870175"
                },
                {
                    "lat": "36.5602033",
                    "lon": "-118.2870175"
                },
                {
                    "lat": "36.5601828",
                    "lon": "-118.2868834"
                },
                {
                    "lat": "36.5602089",
                    "lon": "-118.2866798"
                },
                {
                    "lat": "36.5602027",
                    "lon": "-118.2866018"
                },
                {
                    "lat": "36.5602065",
                    "lon": "-118.2865535"
                },
                {
                    "lat": "36.5601850",
                    "lon": "-118.2863530"
                },
                {
                    "lat": "36.5601771",
                    "lon": "-118.2863141"
                },
                {
                    "lat": "36.5601806",
                    "lon": "-118.2863013"
                },
                {
                    "lat": "36.5601901",
                    "lon": "-118.2863010"
                },
                {
                    "lat": "36.5602157",
                    "lon": "-118.2863992"
                },
                {
                    "lat": "36.5602262",
                    "lon": "-118.2864103"
                },
                {
                    "lat": "36.5602240",
                    "lon": "-118.2864281"
                },
                {
                    "lat": "36.5602302",
                    "lon": "-118.2864499"
                },
                {
                    "lat": "36.5602458",
                    "lon": "-118.2864723"
                },
                {
                    "lat": "36.5602550",
                    "lon": "-118.2865065"
                },
                {
                    "lat": "36.5602544",
                    "lon": "-118.2865293"
                },
                {
                    "lat": "36.5602636",
                    "lon": "-118.2865712"
                },
                {
                    "lat": "36.5602830",
                    "lon": "-118.2866246"
                },
                {
                    "lat": "36.5602873",
                    "lon": "-118.2867385"
                },
                {
                    "lat": "36.5603110",
                    "lon": "-118.2868136"
                },
                {
                    "lat": "36.5604096",
                    "lon": "-118.2869082"
                },
                {
                    "lat": "36.5604424",
                    "lon": "-118.2869565"
                },
                {
                    "lat": "36.5604640",
                    "lon": "-118.2869813"
                },
                {
                    "lat": "36.5604973",
                    "lon": "-118.2869813"
                },
                {
                    "lat": "36.5604984",
                    "lon": "-118.2869612"
                },
                {
                    "lat": "36.5604710",
                    "lon": "-118.2869250"
                },
                {
                    "lat": "36.5604456",
                    "lon": "-118.2869022"
                },
                {
                    "lat": "36.5604289",
                    "lon": "-118.2868452"
                },
                {
                    "lat": "36.5603632",
                    "lon": "-118.2867111"
                },
                {
                    "lat": "36.5603875",
                    "lon": "-118.2866339"
                },
                {
                    "lat": "36.5603815",
                    "lon": "-118.2865444"
                },
                {
                    "lat": "36.5603942",
                    "lon": "-118.2865357"
                },
                {
                    "lat": "36.5604039",
                    "lon": "-118.2865454"
                },
                {
                    "lat": "36.5604201",
                    "lon": "-118.2865944"
                },
                {
                    "lat": "36.5604305",
                    "lon": "-118.2866106"
                },
                {
                    "lat": "36.5604456",
                    "lon": "-118.2865950"
                },
                {
                    "lat": "36.5604273",
                    "lon": "-118.2865226"
                },
                {
                    "lat": "36.5604596",
                    "lon": "-118.2865481"
                },
                {
                    "lat": "36.5604704",
                    "lon": "-118.2865427"
                },
                {
                    "lat": "36.5604642",
                    "lon": "-118.2865253"
                },
                {
                    "lat": "36.5604357",
                    "lon": "-118.2864928"
                },
                {
                    "lat": "36.5604236",
                    "lon": "-118.2864636"
                },
                {
                    "lat": "36.5604289",
                    "lon": "-118.2864334"
                },
                {
                    "lat": "36.5604645",
                    "lon": "-118.2864878"
                },
                {
                    "lat": "36.5604629",
                    "lon": "-118.2864529"
                },
                {
                    "lat": "36.5604384",
                    "lon": "-118.2864076"
                },
                {
                    "lat": "36.5604314",
                    "lon": "-118.2863748"
                },
                {
                    "lat": "36.5604397",
                    "lon": "-118.2863617"
                },
                {
                    "lat": "36.5604475",
                    "lon": "-118.2863677"
                },
                {
                    "lat": "36.5604790",
                    "lon": "-118.2864391"
                },
                {
                    "lat": "36.5604842",
                    "lon": "-118.2864465"
                },
                {
                    "lat": "36.5604898",
                    "lon": "-118.2864462"
                },
                {
                    "lat": "36.5604941",
                    "lon": "-118.2864338"
                },
                {
                    "lat": "36.5604941",
                    "lon": "-118.2864170"
                },
                {
                    "lat": "36.5604736",
                    "lon": "-118.2863798"
                },
                {
                    "lat": "36.5604728",
                    "lon": "-118.2863644"
                },
                {
                    "lat": "36.5604661",
                    "lon": "-118.2863476"
                },
                {
                    "lat": "36.5604656",
                    "lon": "-118.2862806"
                },
                {
                    "lat": "36.5604699",
                    "lon": "-118.2862752"
                },
                {
                    "lat": "36.5604782",
                    "lon": "-118.2862916"
                },
                {
                    "lat": "36.5604769",
                    "lon": "-118.2863107"
                },
                {
                    "lat": "36.5604828",
                    "lon": "-118.2863483"
                },
                {
                    "lat": "36.5605011",
                    "lon": "-118.2863922"
                },
                {
                    "lat": "36.5605087",
                    "lon": "-118.2863899"
                },
                {
                    "lat": "36.5605006",
                    "lon": "-118.2863473"
                },
                {
                    "lat": "36.5604963",
                    "lon": "-118.2862913"
                },
                {
                    "lat": "36.5604780",
                    "lon": "-118.2862450"
                },
                {
                    "lat": "36.5604763",
                    "lon": "-118.2862169"
                },
                {
                    "lat": "36.5604851",
                    "lon": "-118.2862010"
                },
                {
                    "lat": "36.5604938",
                    "lon": "-118.2862172"
                },
                {
                    "lat": "36.5604979",
                    "lon": "-118.2862410"
                },
                {
                    "lat": "36.5605173",
                    "lon": "-118.2862849"
                },
                {
                    "lat": "36.5605369",
                    "lon": "-118.2863007"
                },
                {
                    "lat": "36.5605477",
                    "lon": "-118.2862886"
                },
                {
                    "lat": "36.5605442",
                    "lon": "-118.2862712"
                },
                {
                    "lat": "36.5605297",
                    "lon": "-118.2862638"
                },
                {
                    "lat": "36.5605194",
                    "lon": "-118.2862464"
                },
                {
                    "lat": "36.5605035",
                    "lon": "-118.2861827"
                },
                {
                    "lat": "36.5605122",
                    "lon": "-118.2861760"
                },
                {
                    "lat": "36.5605221",
                    "lon": "-118.2862118"
                },
                {
                    "lat": "36.5605337",
                    "lon": "-118.2862316"
                },
                {
                    "lat": "36.5605569",
                    "lon": "-118.2862457"
                },
                {
                    "lat": "36.5605628",
                    "lon": "-118.2862420"
                },
                {
                    "lat": "36.5605636",
                    "lon": "-118.2862336"
                },
                {
                    "lat": "36.5605585",
                    "lon": "-118.2862239"
                },
                {
                    "lat": "36.5605466",
                    "lon": "-118.2862192"
                },
                {
                    "lat": "36.5605377",
                    "lon": "-118.2862088"
                },
                {
                    "lat": "36.5605302",
                    "lon": "-118.2861907"
                },
                {
                    "lat": "36.5605237",
                    "lon": "-118.2861572"
                },
                {
                    "lat": "36.5605283",
                    "lon": "-118.2861384"
                },
                {
                    "lat": "36.5605334",
                    "lon": "-118.2861391"
                },
                {
                    "lat": "36.5605359",
                    "lon": "-118.2861679"
                },
                {
                    "lat": "36.5605407",
                    "lon": "-118.2861800"
                },
                {
                    "lat": "36.5605582",
                    "lon": "-118.2862078"
                },
                {
                    "lat": "36.5605666",
                    "lon": "-118.2862088"
                },
                {
                    "lat": "36.5605695",
                    "lon": "-118.2861944"
                },
                {
                    "lat": "36.5605555",
                    "lon": "-118.2861746"
                },
                {
                    "lat": "36.5605504",
                    "lon": "-118.2861619"
                },
                {
                    "lat": "36.5605491",
                    "lon": "-118.2861444"
                },
                {
                    "lat": "36.5605520",
                    "lon": "-118.2861330"
                },
                {
                    "lat": "36.5605641",
                    "lon": "-118.2861156"
                },
                {
                    "lat": "36.5605711",
                    "lon": "-118.2861169"
                },
                {
                    "lat": "36.5605666",
                    "lon": "-118.2861515"
                },
                {
                    "lat": "36.5605800",
                    "lon": "-118.2861780"
                },
                {
                    "lat": "36.5605881",
                    "lon": "-118.2861806"
                },
                {
                    "lat": "36.5605903",
                    "lon": "-118.2861706"
                },
                {
                    "lat": "36.5605806",
                    "lon": "-118.2860938"
                },
                {
                    "lat": "36.5605771",
                    "lon": "-118.2860231"
                },
                {
                    "lat": "36.5605807",
                    "lon": "-118.2859820"
                },
                {
                    "lat": "36.5605870",
                    "lon": "-118.2859775"
                },
                {
                    "lat": "36.5605935",
                    "lon": "-118.2859892"
                },
                {
                    "lat": "36.5606024",
                    "lon": "-118.2860227"
                },
                {
                    "lat": "36.5606091",
                    "lon": "-118.2860331"
                },
                {
                    "lat": "36.5606192",
                    "lon": "-118.2860284"
                },
                {
                    "lat": "36.5606236",
                    "lon": "-118.2860197"
                },
                {
                    "lat": "36.5606247",
                    "lon": "-118.2860026"
                },
                {
                    "lat": "36.5606123",
                    "lon": "-118.2859745"
                },
                {
                    "lat": "36.5605986",
                    "lon": "-118.2858836"
                },
                {
                    "lat": "36.5606115",
                    "lon": "-118.2858008"
                },
                {
                    "lat": "36.5606191",
                    "lon": "-118.2857947"
                },
                {
                    "lat": "36.5606315",
                    "lon": "-118.2857944"
                },
                {
                    "lat": "36.5606382",
                    "lon": "-118.2857971"
                },
                {
                    "lat": "36.5606438",
                    "lon": "-118.2858075"
                },
                {
                    "lat": "36.5606304",
                    "lon": "-118.2859010"
                },
                {
                    "lat": "36.5606325",
                    "lon": "-118.2859356"
                },
                {
                    "lat": "36.5606422",
                    "lon": "-118.2859295"
                },
                {
                    "lat": "36.5606632",
                    "lon": "-118.2858356"
                },
                {
                    "lat": "36.5606681",
                    "lon": "-118.2858253"
                },
                {
                    "lat": "36.5606756",
                    "lon": "-118.2858306"
                },
                {
                    "lat": "36.5606662",
                    "lon": "-118.2858625"
                },
                {
                    "lat": "36.5606565",
                    "lon": "-118.2859346"
                },
                {
                    "lat": "36.5606816",
                    "lon": "-118.2860935"
                },
                {
                    "lat": "36.5607106",
                    "lon": "-118.2862262"
                },
                {
                    "lat": "36.5607279",
                    "lon": "-118.2863858"
                },
                {
                    "lat": "36.5607373",
                    "lon": "-118.2864395"
                },
                {
                    "lat": "36.5607419",
                    "lon": "-118.2864515"
                },
                {
                    "lat": "36.5607481",
                    "lon": "-118.2864549"
                },
                {
                    "lat": "36.5607588",
                    "lon": "-118.2864401"
                },
                {
                    "lat": "36.5607543",
                    "lon": "-118.2862832"
                },
                {
                    "lat": "36.5607575",
                    "lon": "-118.2862574"
                },
                {
                    "lat": "36.5607618",
                    "lon": "-118.2862511"
                },
                {
                    "lat": "36.5607664",
                    "lon": "-118.2862521"
                },
                {
                    "lat": "36.5607726",
                    "lon": "-118.2862557"
                },
                {
                    "lat": "36.5607742",
                    "lon": "-118.2862638"
                },
                {
                    "lat": "36.5607852",
                    "lon": "-118.2863731"
                },
                {
                    "lat": "36.5608154",
                    "lon": "-118.2865595"
                },
                {
                    "lat": "36.5608259",
                    "lon": "-118.2865716"
                },
                {
                    "lat": "36.5608342",
                    "lon": "-118.2865639"
                },
                {
                    "lat": "36.5608364",
                    "lon": "-118.2865243"
                },
                {
                    "lat": "36.5608278",
                    "lon": "-118.2864794"
                },
                {
                    "lat": "36.5608275",
                    "lon": "-118.2864569"
                },
                {
                    "lat": "36.5608297",
                    "lon": "-118.2864418"
                },
                {
                    "lat": "36.5608367",
                    "lon": "-118.2864338"
                },
                {
                    "lat": "36.5608434",
                    "lon": "-118.2864358"
                },
                {
                    "lat": "36.5608480",
                    "lon": "-118.2864422"
                },
                {
                    "lat": "36.5608534",
                    "lon": "-118.2864676"
                },
                {
                    "lat": "36.5608606",
                    "lon": "-118.2865287"
                },
                {
                    "lat": "36.5608954",
                    "lon": "-118.2866125"
                },
                {
                    "lat": "36.5609220",
                    "lon": "-118.2868515"
                },
                {
                    "lat": "36.5609282",
                    "lon": "-118.2868616"
                },
                {
                    "lat": "36.5609363",
                    "lon": "-118.2868592"
                },
                {
                    "lat": "36.5609417",
                    "lon": "-118.2868465"
                },
                {
                    "lat": "36.5609420",
                    "lon": "-118.2867613"
                },
                {
                    "lat": "36.5609517",
                    "lon": "-118.2867540"
                },
                {
                    "lat": "36.5609579",
                    "lon": "-118.2867647"
                },
                {
                    "lat": "36.5609589",
                    "lon": "-118.2868177"
                },
                {
                    "lat": "36.5609627",
                    "lon": "-118.2868277"
                },
                {
                    "lat": "36.5609735",
                    "lon": "-118.2868297"
                },
                {
                    "lat": "36.5609772",
                    "lon": "-118.2868210"
                },
                {
                    "lat": "36.5609754",
                    "lon": "-118.2867741"
                },
                {
                    "lat": "36.5609938",
                    "lon": "-118.2864770"
                },
                {
                    "lat": "36.5609929",
                    "lon": "-118.2863966"
                },
                {
                    "lat": "36.5609692",
                    "lon": "-118.2863550"
                },
                {
                    "lat": "36.5609600",
                    "lon": "-118.2862175"
                },
                {
                    "lat": "36.5609464",
                    "lon": "-118.2861728"
                },
                {
                    "lat": "36.5610079",
                    "lon": "-118.2860009"
                },
                {
                    "lat": "36.5610036",
                    "lon": "-118.2859017"
                },
                {
                    "lat": "36.5610155",
                    "lon": "-118.2857193"
                },
                {
                    "lat": "36.5609842",
                    "lon": "-118.2856576"
                },
                {
                    "lat": "36.5609767",
                    "lon": "-118.2855651"
                },
                {
                    "lat": "36.5609433",
                    "lon": "-118.2854806"
                },
                {
                    "lat": "36.5609438",
                    "lon": "-118.2854648"
                },
                {
                    "lat": "36.5609506",
                    "lon": "-118.2854528"
                },
                {
                    "lat": "36.5609587",
                    "lon": "-118.2854511"
                },
                {
                    "lat": "36.5609681",
                    "lon": "-118.2854615"
                },
                {
                    "lat": "36.5610225",
                    "lon": "-118.2856063"
                },
                {
                    "lat": "36.5610327",
                    "lon": "-118.2856657"
                },
                {
                    "lat": "36.5610486",
                    "lon": "-118.2856791"
                },
                {
                    "lat": "36.5610564",
                    "lon": "-118.2856744"
                },
                {
                    "lat": "36.5610602",
                    "lon": "-118.2856502"
                },
                {
                    "lat": "36.5610580",
                    "lon": "-118.2856170"
                },
                {
                    "lat": "36.5609961",
                    "lon": "-118.2853840"
                },
                {
                    "lat": "36.5609861",
                    "lon": "-118.2853203"
                },
                {
                    "lat": "36.5609896",
                    "lon": "-118.2853143"
                },
                {
                    "lat": "36.5610063",
                    "lon": "-118.2853176"
                },
                {
                    "lat": "36.5610575",
                    "lon": "-118.2854474"
                },
                {
                    "lat": "36.5610844",
                    "lon": "-118.2854984"
                },
                {
                    "lat": "36.5611003",
                    "lon": "-118.2855051"
                },
                {
                    "lat": "36.5611081",
                    "lon": "-118.2855007"
                },
                {
                    "lat": "36.5611116",
                    "lon": "-118.2854786"
                },
                {
                    "lat": "36.5611076",
                    "lon": "-118.2854608"
                },
                {
                    "lat": "36.5610804",
                    "lon": "-118.2854149"
                },
                {
                    "lat": "36.5610610",
                    "lon": "-118.2852875"
                },
                {
                    "lat": "36.5610570",
                    "lon": "-118.2852115"
                },
                {
                    "lat": "36.5610516",
                    "lon": "-118.2851949"
                },
                {
                    "lat": "36.5610392",
                    "lon": "-118.2851775"
                },
                {
                    "lat": "36.5610265",
                    "lon": "-118.2851661"
                },
                {
                    "lat": "36.5609584",
                    "lon": "-118.2851601"
                },
                {
                    "lat": "36.5609013",
                    "lon": "-118.2851389"
                },
                {
                    "lat": "36.5608830",
                    "lon": "-118.2851363"
                },
                {
                    "lat": "36.5608450",
                    "lon": "-118.2851041"
                },
                {
                    "lat": "36.5608458",
                    "lon": "-118.2850954"
                },
                {
                    "lat": "36.5608749",
                    "lon": "-118.2850913"
                },
                {
                    "lat": "36.5609374",
                    "lon": "-118.2851178"
                },
                {
                    "lat": "36.5609832",
                    "lon": "-118.2851212"
                },
                {
                    "lat": "36.5610228",
                    "lon": "-118.2851121"
                },
                {
                    "lat": "36.5610133",
                    "lon": "-118.2850930"
                },
                {
                    "lat": "36.5609993",
                    "lon": "-118.2850830"
                },
                {
                    "lat": "36.5608970",
                    "lon": "-118.2850648"
                },
                {
                    "lat": "36.5608846",
                    "lon": "-118.2850602"
                },
                {
                    "lat": "36.5608798",
                    "lon": "-118.2850488"
                },
                {
                    "lat": "36.5608900",
                    "lon": "-118.2850387"
                },
                {
                    "lat": "36.5609589",
                    "lon": "-118.2850447"
                },
                {
                    "lat": "36.5610089",
                    "lon": "-118.2850333"
                },
                {
                    "lat": "36.5610171",
                    "lon": "-118.2850226"
                },
                {
                    "lat": "36.5610214",
                    "lon": "-118.2850079"
                },
                {
                    "lat": "36.5610145",
                    "lon": "-118.2850013"
                },
                {
                    "lat": "36.5609293",
                    "lon": "-118.2849965"
                },
                {
                    "lat": "36.5608754",
                    "lon": "-118.2849998"
                },
                {
                    "lat": "36.5608577",
                    "lon": "-118.2849931"
                },
                {
                    "lat": "36.5608485",
                    "lon": "-118.2849830"
                },
                {
                    "lat": "36.5608523",
                    "lon": "-118.2849710"
                },
                {
                    "lat": "36.5609148",
                    "lon": "-118.2849562"
                },
                {
                    "lat": "36.5609347",
                    "lon": "-118.2849374"
                },
                {
                    "lat": "36.5609379",
                    "lon": "-118.2849126"
                },
                {
                    "lat": "36.5609173",
                    "lon": "-118.2849084"
                },
                {
                    "lat": "36.5608981",
                    "lon": "-118.2849281"
                },
                {
                    "lat": "36.5608684",
                    "lon": "-118.2849374"
                },
                {
                    "lat": "36.5608501",
                    "lon": "-118.2849301"
                },
                {
                    "lat": "36.5608469",
                    "lon": "-118.2849187"
                },
                {
                    "lat": "36.5608485",
                    "lon": "-118.2849066"
                },
                {
                    "lat": "36.5608534",
                    "lon": "-118.2848912"
                },
                {
                    "lat": "36.5608862",
                    "lon": "-118.2848778"
                },
                {
                    "lat": "36.5609422",
                    "lon": "-118.2848409"
                },
                {
                    "lat": "36.5610079",
                    "lon": "-118.2848174"
                },
                {
                    "lat": "36.5610219",
                    "lon": "-118.2848201"
                },
                {
                    "lat": "36.5610340",
                    "lon": "-118.2848314"
                },
                {
                    "lat": "36.5610731",
                    "lon": "-118.2848811"
                },
                {
                    "lat": "36.5611000",
                    "lon": "-118.2848885"
                },
                {
                    "lat": "36.5611070",
                    "lon": "-118.2848764"
                },
                {
                    "lat": "36.5610974",
                    "lon": "-118.2848489"
                },
                {
                    "lat": "36.5610801",
                    "lon": "-118.2848315"
                },
                {
                    "lat": "36.5610661",
                    "lon": "-118.2848033"
                },
                {
                    "lat": "36.5610489",
                    "lon": "-118.2847785"
                },
                {
                    "lat": "36.5610241",
                    "lon": "-118.2847678"
                },
                {
                    "lat": "36.5610079",
                    "lon": "-118.2847544"
                },
                {
                    "lat": "36.5610047",
                    "lon": "-118.2847396"
                },
                {
                    "lat": "36.5610069",
                    "lon": "-118.2847229"
                },
                {
                    "lat": "36.5610230",
                    "lon": "-118.2847188"
                },
                {
                    "lat": "36.5610564",
                    "lon": "-118.2847336"
                },
                {
                    "lat": "36.5610936",
                    "lon": "-118.2847685"
                },
                {
                    "lat": "36.5611270",
                    "lon": "-118.2848147"
                },
                {
                    "lat": "36.5611614",
                    "lon": "-118.2848462"
                },
                {
                    "lat": "36.5611851",
                    "lon": "-118.2848610"
                },
                {
                    "lat": "36.5612105",
                    "lon": "-118.2848623"
                },
                {
                    "lat": "36.5612261",
                    "lon": "-118.2848717"
                },
                {
                    "lat": "36.5612465",
                    "lon": "-118.2848751"
                },
                {
                    "lat": "36.5612600",
                    "lon": "-118.2848717"
                },
                {
                    "lat": "36.5612638",
                    "lon": "-118.2848476"
                },
                {
                    "lat": "36.5611927",
                    "lon": "-118.2848120"
                },
                {
                    "lat": "36.5611454",
                    "lon": "-118.2847338"
                },
                {
                    "lat": "36.5611237",
                    "lon": "-118.2845988"
                },
                {
                    "lat": "36.5611081",
                    "lon": "-118.2845646"
                },
                {
                    "lat": "36.5610763",
                    "lon": "-118.2845324"
                },
                {
                    "lat": "36.5610257",
                    "lon": "-118.2845210"
                },
                {
                    "lat": "36.5609756",
                    "lon": "-118.2845217"
                },
                {
                    "lat": "36.5609729",
                    "lon": "-118.2845077"
                },
                {
                    "lat": "36.5609762",
                    "lon": "-118.2844915"
                },
                {
                    "lat": "36.5610160",
                    "lon": "-118.2844694"
                },
                {
                    "lat": "36.5610347",
                    "lon": "-118.2844660"
                },
                {
                    "lat": "36.5611318",
                    "lon": "-118.2844694"
                },
                {
                    "lat": "36.5611593",
                    "lon": "-118.2844825"
                },
                {
                    "lat": "36.5611781",
                    "lon": "-118.2844976"
                },
                {
                    "lat": "36.5612164",
                    "lon": "-118.2845586"
                },
                {
                    "lat": "36.5612767",
                    "lon": "-118.2845921"
                },
                {
                    "lat": "36.5613069",
                    "lon": "-118.2845928"
                },
                {
                    "lat": "36.5613370",
                    "lon": "-118.2846196"
                },
                {
                    "lat": "36.5613591",
                    "lon": "-118.2846504"
                },
                {
                    "lat": "36.5613763",
                    "lon": "-118.2846531"
                },
                {
                    "lat": "36.5613785",
                    "lon": "-118.2846209"
                },
                {
                    "lat": "36.5613699",
                    "lon": "-118.2845948"
                },
                {
                    "lat": "36.5613026",
                    "lon": "-118.2845096"
                },
                {
                    "lat": "36.5612767",
                    "lon": "-118.2844707"
                },
                {
                    "lat": "36.5611943",
                    "lon": "-118.2843179"
                },
                {
                    "lat": "36.5611738",
                    "lon": "-118.2842964"
                },
                {
                    "lat": "36.5611544",
                    "lon": "-118.2842629"
                },
                {
                    "lat": "36.5611588",
                    "lon": "-118.2842314"
                },
                {
                    "lat": "36.5611561",
                    "lon": "-118.2841730"
                },
                {
                    "lat": "36.5611412",
                    "lon": "-118.2841462"
                },
                {
                    "lat": "36.5611097",
                    "lon": "-118.2841200"
                },
                {
                    "lat": "36.5611211",
                    "lon": "-118.2841053"
                },
                {
                    "lat": "36.5611259",
                    "lon": "-118.2840905"
                },
                {
                    "lat": "36.5611324",
                    "lon": "-118.2840858"
                },
                {
                    "lat": "36.5611422",
                    "lon": "-118.2840880"
                },
                {
                    "lat": "36.5611668",
                    "lon": "-118.2841100"
                },
                {
                    "lat": "36.5611921",
                    "lon": "-118.2841455"
                },
                {
                    "lat": "36.5612487",
                    "lon": "-118.2841837"
                },
                {
                    "lat": "36.5612600",
                    "lon": "-118.2842045"
                },
                {
                    "lat": "36.5612794",
                    "lon": "-118.2842112"
                },
                {
                    "lat": "36.5612907",
                    "lon": "-118.2842340"
                },
                {
                    "lat": "36.5613397",
                    "lon": "-118.2842481"
                },
                {
                    "lat": "36.5613850",
                    "lon": "-118.2843031"
                },
                {
                    "lat": "36.5614081",
                    "lon": "-118.2843192"
                },
                {
                    "lat": "36.5614447",
                    "lon": "-118.2843769"
                },
                {
                    "lat": "36.5614577",
                    "lon": "-118.2843802"
                },
                {
                    "lat": "36.5614662",
                    "lon": "-118.2843659"
                },
                {
                    "lat": "36.5614668",
                    "lon": "-118.2843541"
                },
                {
                    "lat": "36.5614544",
                    "lon": "-118.2843407"
                },
                {
                    "lat": "36.5614399",
                    "lon": "-118.2843058"
                },
                {
                    "lat": "36.5614177",
                    "lon": "-118.2842438"
                },
                {
                    "lat": "36.5614114",
                    "lon": "-118.2842139"
                },
                {
                    "lat": "36.5614119",
                    "lon": "-118.2841851"
                },
                {
                    "lat": "36.5614065",
                    "lon": "-118.2841435"
                },
                {
                    "lat": "36.5613957",
                    "lon": "-118.2841033"
                },
                {
                    "lat": "36.5613930",
                    "lon": "-118.2840637"
                },
                {
                    "lat": "36.5613526",
                    "lon": "-118.2838163"
                },
                {
                    "lat": "36.5612848",
                    "lon": "-118.2836634"
                },
                {
                    "lat": "36.5612783",
                    "lon": "-118.2836393"
                },
                {
                    "lat": "36.5612888",
                    "lon": "-118.2836253"
                },
                {
                    "lat": "36.5613473",
                    "lon": "-118.2836909"
                },
                {
                    "lat": "36.5613866",
                    "lon": "-118.2837593"
                },
                {
                    "lat": "36.5614006",
                    "lon": "-118.2837915"
                },
                {
                    "lat": "36.5614130",
                    "lon": "-118.2838042"
                },
                {
                    "lat": "36.5614286",
                    "lon": "-118.2838049"
                },
                {
                    "lat": "36.5614356",
                    "lon": "-118.2838002"
                },
                {
                    "lat": "36.5614361",
                    "lon": "-118.2837821"
                },
                {
                    "lat": "36.5614275",
                    "lon": "-118.2837506"
                },
                {
                    "lat": "36.5614076",
                    "lon": "-118.2837177"
                },
                {
                    "lat": "36.5613478",
                    "lon": "-118.2835380"
                },
                {
                    "lat": "36.5613149",
                    "lon": "-118.2834811"
                },
                {
                    "lat": "36.5612961",
                    "lon": "-118.2834213"
                },
                {
                    "lat": "36.5613020",
                    "lon": "-118.2834133"
                },
                {
                    "lat": "36.5613171",
                    "lon": "-118.2834173"
                },
                {
                    "lat": "36.5613343",
                    "lon": "-118.2834495"
                },
                {
                    "lat": "36.5613920",
                    "lon": "-118.2835125"
                },
                {
                    "lat": "36.5614690",
                    "lon": "-118.2836097"
                },
                {
                    "lat": "36.5614821",
                    "lon": "-118.2836044"
                },
                {
                    "lat": "36.5614873",
                    "lon": "-118.2835943"
                },
                {
                    "lat": "36.5614383",
                    "lon": "-118.2835018"
                },
                {
                    "lat": "36.5613420",
                    "lon": "-118.2832823"
                },
                {
                    "lat": "36.5612810",
                    "lon": "-118.2831055"
                },
                {
                    "lat": "36.5612293",
                    "lon": "-118.2829881"
                },
                {
                    "lat": "36.5612202",
                    "lon": "-118.2829573"
                },
                {
                    "lat": "36.5612212",
                    "lon": "-118.2829425"
                },
                {
                    "lat": "36.5612315",
                    "lon": "-118.2829385"
                },
                {
                    "lat": "36.5612622",
                    "lon": "-118.2829687"
                },
                {
                    "lat": "36.5613131",
                    "lon": "-118.2830486"
                },
                {
                    "lat": "36.5614223",
                    "lon": "-118.2831509"
                },
                {
                    "lat": "36.5615036",
                    "lon": "-118.2832579"
                },
                {
                    "lat": "36.5615153",
                    "lon": "-118.2832644"
                },
                {
                    "lat": "36.5615255",
                    "lon": "-118.2832631"
                },
                {
                    "lat": "36.5615269",
                    "lon": "-118.2832486"
                },
                {
                    "lat": "36.5615180",
                    "lon": "-118.2832188"
                },
                {
                    "lat": "36.5614889",
                    "lon": "-118.2831558"
                },
                {
                    "lat": "36.5613205",
                    "lon": "-118.2826975"
                },
                {
                    "lat": "36.5613289",
                    "lon": "-118.2826708"
                },
                {
                    "lat": "36.5613397",
                    "lon": "-118.2826750"
                },
                {
                    "lat": "36.5613580",
                    "lon": "-118.2827219"
                },
                {
                    "lat": "36.5613971",
                    "lon": "-118.2827835"
                },
                {
                    "lat": "36.5615904",
                    "lon": "-118.2829893"
                },
                {
                    "lat": "36.5616047",
                    "lon": "-118.2829895"
                },
                {
                    "lat": "36.5615998",
                    "lon": "-118.2829684"
                },
                {
                    "lat": "36.5615344",
                    "lon": "-118.2828068"
                },
                {
                    "lat": "36.5614672",
                    "lon": "-118.2826998"
                },
                {
                    "lat": "36.5614625",
                    "lon": "-118.2826649"
                },
                {
                    "lat": "36.5614889",
                    "lon": "-118.2826716"
                },
                {
                    "lat": "36.5615652",
                    "lon": "-118.2827498"
                },
                {
                    "lat": "36.5616623",
                    "lon": "-118.2828031"
                },
                {
                    "lat": "36.5616785",
                    "lon": "-118.2828326"
                },
                {
                    "lat": "36.5617128",
                    "lon": "-118.2828498"
                },
                {
                    "lat": "36.5617275",
                    "lon": "-118.2828500"
                },
                {
                    "lat": "36.5617324",
                    "lon": "-118.2828382"
                },
                {
                    "lat": "36.5616801",
                    "lon": "-118.2827382"
                },
                {
                    "lat": "36.5616026",
                    "lon": "-118.2826173"
                },
                {
                    "lat": "36.5615867",
                    "lon": "-118.2825719"
                },
                {
                    "lat": "36.5616287",
                    "lon": "-118.2825801"
                },
                {
                    "lat": "36.5618566",
                    "lon": "-118.2827742"
                },
                {
                    "lat": "36.5618643",
                    "lon": "-118.2827615"
                },
                {
                    "lat": "36.5618641",
                    "lon": "-118.2827417"
                },
                {
                    "lat": "36.5617716",
                    "lon": "-118.2825859"
                },
                {
                    "lat": "36.5616651",
                    "lon": "-118.2824603"
                },
                {
                    "lat": "36.5616820",
                    "lon": "-118.2824301"
                },
                {
                    "lat": "36.5618605",
                    "lon": "-118.2825322"
                },
                {
                    "lat": "36.5618810",
                    "lon": "-118.2825261"
                },
                {
                    "lat": "36.5618810",
                    "lon": "-118.2825074"
                },
                {
                    "lat": "36.5618192",
                    "lon": "-118.2824289"
                },
                {
                    "lat": "36.5618211",
                    "lon": "-118.2824045"
                },
                {
                    "lat": "36.5618575",
                    "lon": "-118.2823917"
                },
                {
                    "lat": "36.5619752",
                    "lon": "-118.2824557"
                },
                {
                    "lat": "36.5619774",
                    "lon": "-118.2824245"
                },
                {
                    "lat": "36.5619668",
                    "lon": "-118.2823685"
                },
                {
                    "lat": "36.5619388",
                    "lon": "-118.2823138"
                },
                {
                    "lat": "36.5619435",
                    "lon": "-118.2823015"
                },
                {
                    "lat": "36.5620349",
                    "lon": "-118.2823138"
                },
                {
                    "lat": "36.5620517",
                    "lon": "-118.2823102"
                },
                {
                    "lat": "36.5620760",
                    "lon": "-118.2822603"
                },
                {
                    "lat": "36.5621031",
                    "lon": "-118.2821798"
                },
                {
                    "lat": "36.5621008",
                    "lon": "-118.2821540"
                },
                {
                    "lat": "36.5620863",
                    "lon": "-118.2821464"
                },
                {
                    "lat": "36.5619758",
                    "lon": "-118.2821158"
                },
                {
                    "lat": "36.5619467",
                    "lon": "-118.2821010"
                },
                {
                    "lat": "36.5619526",
                    "lon": "-118.2820849"
                },
                {
                    "lat": "36.5619860",
                    "lon": "-118.2820702"
                },
                {
                    "lat": "36.5620458",
                    "lon": "-118.2820185"
                },
                {
                    "lat": "36.5622750",
                    "lon": "-118.2818650"
                },
                {
                    "lat": "36.5623534",
                    "lon": "-118.2817802"
                },
                {
                    "lat": "36.5624925",
                    "lon": "-118.2817139"
                },
                {
                    "lat": "36.5626541",
                    "lon": "-118.2815988"
                },
                {
                    "lat": "36.5626668",
                    "lon": "-118.2815854"
                },
                {
                    "lat": "36.5626614",
                    "lon": "-118.2815639"
                },
                {
                    "lat": "36.5626437",
                    "lon": "-118.2815579"
                },
                {
                    "lat": "36.5625209",
                    "lon": "-118.2815733"
                },
                {
                    "lat": "36.5624961",
                    "lon": "-118.2815827"
                },
                {
                    "lat": "36.5624869",
                    "lon": "-118.2815662"
                },
                {
                    "lat": "36.5624961",
                    "lon": "-118.2815471"
                },
                {
                    "lat": "36.5625262",
                    "lon": "-118.2815244"
                },
                {
                    "lat": "36.5625483",
                    "lon": "-118.2815216"
                },
                {
                    "lat": "36.5626027",
                    "lon": "-118.2814901"
                },
                {
                    "lat": "36.5626000",
                    "lon": "-118.2814687"
                },
                {
                    "lat": "36.5625405",
                    "lon": "-118.2814577"
                },
                {
                    "lat": "36.5624325",
                    "lon": "-118.2814620"
                },
                {
                    "lat": "36.5624272",
                    "lon": "-118.2814476"
                },
                {
                    "lat": "36.5624767",
                    "lon": "-118.2813815"
                },
                {
                    "lat": "36.5626980",
                    "lon": "-118.2812651"
                },
                {
                    "lat": "36.5627083",
                    "lon": "-118.2812430"
                },
                {
                    "lat": "36.5627088",
                    "lon": "-118.2812273"
                },
                {
                    "lat": "36.5626760",
                    "lon": "-118.2812320"
                },
                {
                    "lat": "36.5625995",
                    "lon": "-118.2812273"
                },
                {
                    "lat": "36.5625906",
                    "lon": "-118.2812198"
                },
                {
                    "lat": "36.5626940",
                    "lon": "-118.2810892"
                },
                {
                    "lat": "36.5626819",
                    "lon": "-118.2810777"
                },
                {
                    "lat": "36.5626490",
                    "lon": "-118.2810777"
                },
                {
                    "lat": "36.5626420",
                    "lon": "-118.2810616"
                },
                {
                    "lat": "36.5626571",
                    "lon": "-118.2810147"
                },
                {
                    "lat": "36.5626420",
                    "lon": "-118.2809826"
                },
                {
                    "lat": "36.5625700",
                    "lon": "-118.2807419"
                },
                {
                    "lat": "36.5625850",
                    "lon": "-118.2806594"
                },
                {
                    "lat": "36.5625878",
                    "lon": "-118.2805722"
                },
                {
                    "lat": "36.5626112",
                    "lon": "-118.2805343"
                },
                {
                    "lat": "36.5627269",
                    "lon": "-118.2804408"
                },
                {
                    "lat": "36.5628044",
                    "lon": "-118.2804199"
                },
                {
                    "lat": "36.5628701",
                    "lon": "-118.2803476"
                },
                {
                    "lat": "36.5629202",
                    "lon": "-118.2802769"
                },
                {
                    "lat": "36.5629511",
                    "lon": "-118.2802048"
                },
                {
                    "lat": "36.5629501",
                    "lon": "-118.2801443"
                },
                {
                    "lat": "36.5629800",
                    "lon": "-118.2800792"
                },
                {
                    "lat": "36.5629837",
                    "lon": "-118.2799490"
                },
                {
                    "lat": "36.5629949",
                    "lon": "-118.2798711"
                },
                {
                    "lat": "36.5629371",
                    "lon": "-118.2797502"
                },
                {
                    "lat": "36.5629240",
                    "lon": "-118.2796548"
                },
                {
                    "lat": "36.5629472",
                    "lon": "-118.2795623"
                },
                {
                    "lat": "36.5629697",
                    "lon": "-118.2795048"
                },
                {
                    "lat": "36.5629987",
                    "lon": "-118.2794688"
                },
                {
                    "lat": "36.5629987",
                    "lon": "-118.2794118"
                },
                {
                    "lat": "36.5629679",
                    "lon": "-118.2791828"
                },
                {
                    "lat": "36.5630174",
                    "lon": "-118.2789851"
                },
                {
                    "lat": "36.5630491",
                    "lon": "-118.2789386"
                },
                {
                    "lat": "36.5630669",
                    "lon": "-118.2788293"
                },
                {
                    "lat": "36.5631546",
                    "lon": "-118.2786956"
                },
                {
                    "lat": "36.5632518",
                    "lon": "-118.2784980"
                },
                {
                    "lat": "36.5632303",
                    "lon": "-118.2782483"
                },
                {
                    "lat": "36.5633054",
                    "lon": "-118.2778484"
                },
                {
                    "lat": "36.5633592",
                    "lon": "-118.2776932"
                },
                {
                    "lat": "36.5634385",
                    "lon": "-118.2773460"
                },
                {
                    "lat": "36.5634247",
                    "lon": "-118.2771947"
                },
                {
                    "lat": "36.5634585",
                    "lon": "-118.2770287"
                },
                {
                    "lat": "36.5634310",
                    "lon": "-118.2769737"
                },
                {
                    "lat": "36.5633858",
                    "lon": "-118.2769284"
                },
                {
                    "lat": "36.5633824",
                    "lon": "-118.2768790"
                },
                {
                    "lat": "36.5634244",
                    "lon": "-118.2768199"
                },
                {
                    "lat": "36.5634894",
                    "lon": "-118.2767856"
                },
                {
                    "lat": "36.5635038",
                    "lon": "-118.2767348"
                },
                {
                    "lat": "36.5634618",
                    "lon": "-118.2766977"
                },
                {
                    "lat": "36.5634056",
                    "lon": "-118.2766909"
                },
                {
                    "lat": "36.5633613",
                    "lon": "-118.2766607"
                },
                {
                    "lat": "36.5633736",
                    "lon": "-118.2765948"
                },
                {
                    "lat": "36.5634828",
                    "lon": "-118.2764094"
                },
                {
                    "lat": "36.5634607",
                    "lon": "-118.2763016"
                },
                {
                    "lat": "36.5635642",
                    "lon": "-118.2759675"
                },
                {
                    "lat": "36.5636603",
                    "lon": "-118.2757492"
                },
                {
                    "lat": "36.5636946",
                    "lon": "-118.2756446"
                },
                {
                    "lat": "36.5636783",
                    "lon": "-118.2755479"
                },
                {
                    "lat": "36.5636824",
                    "lon": "-118.2754331"
                },
                {
                    "lat": "36.5637131",
                    "lon": "-118.2753506"
                },
                {
                    "lat": "36.5638029",
                    "lon": "-118.2751849"
                },
                {
                    "lat": "36.5638663",
                    "lon": "-118.2749284"
                },
                {
                    "lat": "36.5638556",
                    "lon": "-118.2747878"
                },
                {
                    "lat": "36.5639978",
                    "lon": "-118.2744184"
                },
                {
                    "lat": "36.5641456",
                    "lon": "-118.2741012"
                },
                {
                    "lat": "36.5642934",
                    "lon": "-118.2737483"
                },
                {
                    "lat": "36.5644081",
                    "lon": "-118.2736577"
                },
                {
                    "lat": "36.5646331",
                    "lon": "-118.2732705"
                },
                {
                    "lat": "36.5647252",
                    "lon": "-118.2731685"
                },
                {
                    "lat": "36.5648603",
                    "lon": "-118.2730714"
                },
                {
                    "lat": "36.5649606",
                    "lon": "-118.2727776"
                },
                {
                    "lat": "36.5650080",
                    "lon": "-118.2727227"
                },
                {
                    "lat": "36.5650874",
                    "lon": "-118.2726609"
                },
                {
                    "lat": "36.5651845",
                    "lon": "-118.2724068"
                },
                {
                    "lat": "36.5652727",
                    "lon": "-118.2722366"
                },
                {
                    "lat": "36.5652738",
                    "lon": "-118.2720718"
                },
                {
                    "lat": "36.5653257",
                    "lon": "-118.2719661"
                },
                {
                    "lat": "36.5653312",
                    "lon": "-118.2717368"
                },
                {
                    "lat": "36.5653385",
                    "lon": "-118.2716870"
                },
                {
                    "lat": "36.5653488",
                    "lon": "-118.2716764"
                },
                {
                    "lat": "36.5653573",
                    "lon": "-118.2716816"
                },
                {
                    "lat": "36.5653676",
                    "lon": "-118.2717244"
                },
                {
                    "lat": "36.5653742",
                    "lon": "-118.2718082"
                },
                {
                    "lat": "36.5653962",
                    "lon": "-118.2719043"
                },
                {
                    "lat": "36.5654415",
                    "lon": "-118.2719537"
                },
                {
                    "lat": "36.5655054",
                    "lon": "-118.2719304"
                },
                {
                    "lat": "36.5655683",
                    "lon": "-118.2717725"
                },
                {
                    "lat": "36.5655859",
                    "lon": "-118.2716806"
                },
                {
                    "lat": "36.5655805",
                    "lon": "-118.2716518"
                },
                {
                    "lat": "36.5655983",
                    "lon": "-118.2715901"
                },
                {
                    "lat": "36.5655981",
                    "lon": "-118.2714951"
                },
                {
                    "lat": "36.5656123",
                    "lon": "-118.2714272"
                },
                {
                    "lat": "36.5656103",
                    "lon": "-118.2714007"
                },
                {
                    "lat": "36.5655622",
                    "lon": "-118.2714620"
                },
                {
                    "lat": "36.5655418",
                    "lon": "-118.2714674"
                },
                {
                    "lat": "36.5655412",
                    "lon": "-118.2714466"
                },
                {
                    "lat": "36.5656146",
                    "lon": "-118.2712370"
                },
                {
                    "lat": "36.5656256",
                    "lon": "-118.2711271"
                },
                {
                    "lat": "36.5657348",
                    "lon": "-118.2708072"
                },
                {
                    "lat": "36.5657362",
                    "lon": "-118.2706815"
                },
                {
                    "lat": "36.5657669",
                    "lon": "-118.2706265"
                },
                {
                    "lat": "36.5657631",
                    "lon": "-118.2705588"
                },
                {
                    "lat": "36.5657833",
                    "lon": "-118.2705020"
                },
                {
                    "lat": "36.5658749",
                    "lon": "-118.2703934"
                },
                {
                    "lat": "36.5658628",
                    "lon": "-118.2702483"
                },
                {
                    "lat": "36.5658714",
                    "lon": "-118.2702054"
                },
                {
                    "lat": "36.5658886",
                    "lon": "-118.2701893"
                },
                {
                    "lat": "36.5659479",
                    "lon": "-118.2702108"
                },
                {
                    "lat": "36.5659856",
                    "lon": "-118.2702014"
                },
                {
                    "lat": "36.5660917",
                    "lon": "-118.2701320"
                },
                {
                    "lat": "36.5664390",
                    "lon": "-118.2701410"
                },
                {
                    "lat": "36.5665327",
                    "lon": "-118.2700861"
                },
                {
                    "lat": "36.5666954",
                    "lon": "-118.2700579"
                },
                {
                    "lat": "36.5667246",
                    "lon": "-118.2700118"
                },
                {
                    "lat": "36.5667868",
                    "lon": "-118.2697473"
                },
                {
                    "lat": "36.5667889",
                    "lon": "-118.2695524"
                },
                {
                    "lat": "36.5668683",
                    "lon": "-118.2693333"
                },
                {
                    "lat": "36.5670681",
                    "lon": "-118.2688355"
                },
                {
                    "lat": "36.5671731",
                    "lon": "-118.2686698"
                },
                {
                    "lat": "36.5671693",
                    "lon": "-118.2686544"
                },
                {
                    "lat": "36.5671526",
                    "lon": "-118.2686524"
                },
                {
                    "lat": "36.5670675",
                    "lon": "-118.2687054"
                },
                {
                    "lat": "36.5670503",
                    "lon": "-118.2687020"
                },
                {
                    "lat": "36.5670621",
                    "lon": "-118.2686672"
                },
                {
                    "lat": "36.5671039",
                    "lon": "-118.2686044"
                },
                {
                    "lat": "36.5671771",
                    "lon": "-118.2685346"
                },
                {
                    "lat": "36.5673430",
                    "lon": "-118.2681296"
                },
                {
                    "lat": "36.5674809",
                    "lon": "-118.2678162"
                },
                {
                    "lat": "36.5674878",
                    "lon": "-118.2677185"
                },
                {
                    "lat": "36.5674378",
                    "lon": "-118.2677920"
                },
                {
                    "lat": "36.5674140",
                    "lon": "-118.2677847"
                },
                {
                    "lat": "36.5674597",
                    "lon": "-118.2675627"
                },
                {
                    "lat": "36.5674741",
                    "lon": "-118.2673663"
                },
                {
                    "lat": "36.5674494",
                    "lon": "-118.2673502"
                },
                {
                    "lat": "36.5674257",
                    "lon": "-118.2673596"
                },
                {
                    "lat": "36.5673794",
                    "lon": "-118.2674307"
                },
                {
                    "lat": "36.5673535",
                    "lon": "-118.2674521"
                },
                {
                    "lat": "36.5673412",
                    "lon": "-118.2675368"
                },
                {
                    "lat": "36.5672663",
                    "lon": "-118.2676385"
                },
                {
                    "lat": "36.5671944",
                    "lon": "-118.2677934"
                },
                {
                    "lat": "36.5671298",
                    "lon": "-118.2678308"
                },
                {
                    "lat": "36.5670956",
                    "lon": "-118.2678363"
                },
                {
                    "lat": "36.5670810",
                    "lon": "-118.2678068"
                },
                {
                    "lat": "36.5670814",
                    "lon": "-118.2677622"
                },
                {
                    "lat": "36.5670617",
                    "lon": "-118.2677266"
                },
                {
                    "lat": "36.5670409",
                    "lon": "-118.2677549"
                },
                {
                    "lat": "36.5670382",
                    "lon": "-118.2678092"
                },
                {
                    "lat": "36.5670129",
                    "lon": "-118.2679132"
                },
                {
                    "lat": "36.5669964",
                    "lon": "-118.2679173"
                },
                {
                    "lat": "36.5669666",
                    "lon": "-118.2677663"
                },
                {
                    "lat": "36.5669585",
                    "lon": "-118.2677577"
                },
                {
                    "lat": "36.5669500",
                    "lon": "-118.2677704"
                },
                {
                    "lat": "36.5669456",
                    "lon": "-118.2679159"
                },
                {
                    "lat": "36.5668882",
                    "lon": "-118.2681207"
                },
                {
                    "lat": "36.5668359",
                    "lon": "-118.2682420"
                },
                {
                    "lat": "36.5667891",
                    "lon": "-118.2682997"
                },
                {
                    "lat": "36.5667546",
                    "lon": "-118.2683976"
                },
                {
                    "lat": "36.5666881",
                    "lon": "-118.2685464"
                },
                {
                    "lat": "36.5666652",
                    "lon": "-118.2685585"
                },
                {
                    "lat": "36.5666504",
                    "lon": "-118.2684988"
                },
                {
                    "lat": "36.5666418",
                    "lon": "-118.2683834"
                },
                {
                    "lat": "36.5666841",
                    "lon": "-118.2682769"
                },
                {
                    "lat": "36.5666625",
                    "lon": "-118.2682031"
                },
                {
                    "lat": "36.5667132",
                    "lon": "-118.2679570"
                },
                {
                    "lat": "36.5667164",
                    "lon": "-118.2678263"
                },
                {
                    "lat": "36.5667355",
                    "lon": "-118.2675801"
                },
                {
                    "lat": "36.5667514",
                    "lon": "-118.2675433"
                },
                {
                    "lat": "36.5667579",
                    "lon": "-118.2674615"
                },
                {
                    "lat": "36.5667762",
                    "lon": "-118.2674414"
                },
                {
                    "lat": "36.5667837",
                    "lon": "-118.2673596"
                },
                {
                    "lat": "36.5668009",
                    "lon": "-118.2673180"
                },
                {
                    "lat": "36.5667848",
                    "lon": "-118.2672630"
                },
                {
                    "lat": "36.5667743",
                    "lon": "-118.2671684"
                },
                {
                    "lat": "36.5667789",
                    "lon": "-118.2670203"
                },
                {
                    "lat": "36.5668058",
                    "lon": "-118.2669324"
                },
                {
                    "lat": "36.5668677",
                    "lon": "-118.2667923"
                },
                {
                    "lat": "36.5668646",
                    "lon": "-118.2666959"
                },
                {
                    "lat": "36.5668900",
                    "lon": "-118.2665401"
                },
                {
                    "lat": "36.5668763",
                    "lon": "-118.2660603"
                },
                {
                    "lat": "36.5669162",
                    "lon": "-118.2659756"
                },
                {
                    "lat": "36.5669087",
                    "lon": "-118.2658951"
                },
                {
                    "lat": "36.5670717",
                    "lon": "-118.2652705"
                },
                {
                    "lat": "36.5670745",
                    "lon": "-118.2652453"
                },
                {
                    "lat": "36.5670524",
                    "lon": "-118.2652205"
                },
                {
                    "lat": "36.5670578",
                    "lon": "-118.2651950"
                },
                {
                    "lat": "36.5671498",
                    "lon": "-118.2651220"
                },
                {
                    "lat": "36.5672153",
                    "lon": "-118.2650366"
                },
                {
                    "lat": "36.5672412",
                    "lon": "-118.2650207"
                },
                {
                    "lat": "36.5672959",
                    "lon": "-118.2650150"
                },
                {
                    "lat": "36.5672886",
                    "lon": "-118.2649808"
                },
                {
                    "lat": "36.5671136",
                    "lon": "-118.2648430"
                },
                {
                    "lat": "36.5670790",
                    "lon": "-118.2647556"
                },
                {
                    "lat": "36.5670953",
                    "lon": "-118.2646357"
                },
                {
                    "lat": "36.5671680",
                    "lon": "-118.2645588"
                },
                {
                    "lat": "36.5673958",
                    "lon": "-118.2643776"
                },
                {
                    "lat": "36.5674311",
                    "lon": "-118.2642777"
                },
                {
                    "lat": "36.5674305",
                    "lon": "-118.2642241"
                },
                {
                    "lat": "36.5674774",
                    "lon": "-118.2641617"
                },
                {
                    "lat": "36.5674829",
                    "lon": "-118.2641208"
                },
                {
                    "lat": "36.5674623",
                    "lon": "-118.2641242"
                },
                {
                    "lat": "36.5674208",
                    "lon": "-118.2641537"
                },
                {
                    "lat": "36.5673890",
                    "lon": "-118.2641228"
                },
                {
                    "lat": "36.5673823",
                    "lon": "-118.2640545"
                },
                {
                    "lat": "36.5674619",
                    "lon": "-118.2639658"
                },
                {
                    "lat": "36.5675056",
                    "lon": "-118.2638170"
                },
                {
                    "lat": "36.5675767",
                    "lon": "-118.2637265"
                },
                {
                    "lat": "36.5675681",
                    "lon": "-118.2634830"
                },
                {
                    "lat": "36.5676941",
                    "lon": "-118.2632832"
                },
                {
                    "lat": "36.5677168",
                    "lon": "-118.2632041"
                },
                {
                    "lat": "36.5677729",
                    "lon": "-118.2631453"
                },
                {
                    "lat": "36.5677874",
                    "lon": "-118.2630299"
                },
                {
                    "lat": "36.5678673",
                    "lon": "-118.2628852"
                },
                {
                    "lat": "36.5679781",
                    "lon": "-118.2627743"
                },
                {
                    "lat": "36.5681126",
                    "lon": "-118.2624939"
                },
                {
                    "lat": "36.5682370",
                    "lon": "-118.2624330"
                },
                {
                    "lat": "36.5683846",
                    "lon": "-118.2622452"
                },
                {
                    "lat": "36.5684934",
                    "lon": "-118.2621339"
                },
                {
                    "lat": "36.5685784",
                    "lon": "-118.2617289"
                },
                {
                    "lat": "36.5686592",
                    "lon": "-118.2616055"
                },
                {
                    "lat": "36.5687346",
                    "lon": "-118.2615478"
                },
                {
                    "lat": "36.5688962",
                    "lon": "-118.2614660"
                },
                {
                    "lat": "36.5689277",
                    "lon": "-118.2614641"
                },
                {
                    "lat": "36.5689372",
                    "lon": "-118.2614942"
                },
                {
                    "lat": "36.5689401",
                    "lon": "-118.2616317"
                },
                {
                    "lat": "36.5689449",
                    "lon": "-118.2616666"
                },
                {
                    "lat": "36.5689692",
                    "lon": "-118.2616760"
                },
                {
                    "lat": "36.5689864",
                    "lon": "-118.2616505"
                },
                {
                    "lat": "36.5690208",
                    "lon": "-118.2615078"
                },
                {
                    "lat": "36.5689917",
                    "lon": "-118.2613743"
                },
                {
                    "lat": "36.5690535",
                    "lon": "-118.2612725"
                },
                {
                    "lat": "36.5690753",
                    "lon": "-118.2611436"
                },
                {
                    "lat": "36.5691407",
                    "lon": "-118.2610419"
                },
                {
                    "lat": "36.5691641",
                    "lon": "-118.2609927"
                },
                {
                    "lat": "36.5691770",
                    "lon": "-118.2609860"
                },
                {
                    "lat": "36.5691910",
                    "lon": "-118.2609860"
                },
                {
                    "lat": "36.5692045",
                    "lon": "-118.2610027"
                },
                {
                    "lat": "36.5692079",
                    "lon": "-118.2610441"
                },
                {
                    "lat": "36.5691861",
                    "lon": "-118.2611459"
                },
                {
                    "lat": "36.5691819",
                    "lon": "-118.2611744"
                },
                {
                    "lat": "36.5691824",
                    "lon": "-118.2612012"
                },
                {
                    "lat": "36.5691948",
                    "lon": "-118.2612053"
                },
                {
                    "lat": "36.5692079",
                    "lon": "-118.2611776"
                },
                {
                    "lat": "36.5692869",
                    "lon": "-118.2610852"
                },
                {
                    "lat": "36.5692988",
                    "lon": "-118.2610839"
                },
                {
                    "lat": "36.5693058",
                    "lon": "-118.2610946"
                },
                {
                    "lat": "36.5692987",
                    "lon": "-118.2611097"
                },
                {
                    "lat": "36.5693005",
                    "lon": "-118.2613110"
                },
                {
                    "lat": "36.5693514",
                    "lon": "-118.2614603"
                },
                {
                    "lat": "36.5693887",
                    "lon": "-118.2615278"
                },
                {
                    "lat": "36.5693986",
                    "lon": "-118.2615711"
                },
                {
                    "lat": "36.5694000",
                    "lon": "-118.2616176"
                },
                {
                    "lat": "36.5693903",
                    "lon": "-118.2616512"
                },
                {
                    "lat": "36.5693661",
                    "lon": "-118.2616827"
                },
                {
                    "lat": "36.5693569",
                    "lon": "-118.2617249"
                },
                {
                    "lat": "36.5694041",
                    "lon": "-118.2618538"
                },
                {
                    "lat": "36.5693930",
                    "lon": "-118.2619167"
                },
                {
                    "lat": "36.5693532",
                    "lon": "-118.2620121"
                },
                {
                    "lat": "36.5692471",
                    "lon": "-118.2621615"
                },
                {
                    "lat": "36.5692374",
                    "lon": "-118.2621836"
                },
                {
                    "lat": "36.5692357",
                    "lon": "-118.2622138"
                },
                {
                    "lat": "36.5692390",
                    "lon": "-118.2622305"
                },
                {
                    "lat": "36.5692751",
                    "lon": "-118.2622178"
                },
                {
                    "lat": "36.5693795",
                    "lon": "-118.2621621"
                },
                {
                    "lat": "36.5694657",
                    "lon": "-118.2620971"
                },
                {
                    "lat": "36.5695206",
                    "lon": "-118.2620327"
                },
                {
                    "lat": "36.5695416",
                    "lon": "-118.2619992"
                },
                {
                    "lat": "36.5695535",
                    "lon": "-118.2619650"
                },
                {
                    "lat": "36.5695756",
                    "lon": "-118.2619409"
                },
                {
                    "lat": "36.5695766",
                    "lon": "-118.2618899"
                },
                {
                    "lat": "36.5695653",
                    "lon": "-118.2618530"
                },
                {
                    "lat": "36.5695608",
                    "lon": "-118.2617892"
                },
                {
                    "lat": "36.5695912",
                    "lon": "-118.2617249"
                },
                {
                    "lat": "36.5696420",
                    "lon": "-118.2617091"
                },
                {
                    "lat": "36.5696711",
                    "lon": "-118.2617498"
                },
                {
                    "lat": "36.5696924",
                    "lon": "-118.2617551"
                },
                {
                    "lat": "36.5697549",
                    "lon": "-118.2617015"
                },
                {
                    "lat": "36.5698509",
                    "lon": "-118.2616525"
                },
                {
                    "lat": "36.5699517",
                    "lon": "-118.2616618"
                },
                {
                    "lat": "36.5700336",
                    "lon": "-118.2615867"
                },
                {
                    "lat": "36.5700885",
                    "lon": "-118.2614875"
                },
                {
                    "lat": "36.5701227",
                    "lon": "-118.2614480"
                },
                {
                    "lat": "36.5701542",
                    "lon": "-118.2614338"
                },
                {
                    "lat": "36.5701647",
                    "lon": "-118.2614413"
                },
                {
                    "lat": "36.5701682",
                    "lon": "-118.2615063"
                },
                {
                    "lat": "36.5701623",
                    "lon": "-118.2615834"
                },
                {
                    "lat": "36.5701705",
                    "lon": "-118.2616189"
                },
                {
                    "lat": "36.5701949",
                    "lon": "-118.2616230"
                },
                {
                    "lat": "36.5702070",
                    "lon": "-118.2616073"
                },
                {
                    "lat": "36.5702619",
                    "lon": "-118.2614875"
                },
                {
                    "lat": "36.5702784",
                    "lon": "-118.2614721"
                },
                {
                    "lat": "36.5702941",
                    "lon": "-118.2614716"
                },
                {
                    "lat": "36.5703037",
                    "lon": "-118.2614916"
                },
                {
                    "lat": "36.5703014",
                    "lon": "-118.2615666"
                },
                {
                    "lat": "36.5702824",
                    "lon": "-118.2616618"
                },
                {
                    "lat": "36.5702557",
                    "lon": "-118.2616981"
                },
                {
                    "lat": "36.5702094",
                    "lon": "-118.2618262"
                },
                {
                    "lat": "36.5701556",
                    "lon": "-118.2619610"
                },
                {
                    "lat": "36.5701025",
                    "lon": "-118.2620360"
                },
                {
                    "lat": "36.5701254",
                    "lon": "-118.2620508"
                },
                {
                    "lat": "36.5701652",
                    "lon": "-118.2620280"
                },
                {
                    "lat": "36.5703096",
                    "lon": "-118.2618483"
                },
                {
                    "lat": "36.5703231",
                    "lon": "-118.2618349"
                },
                {
                    "lat": "36.5703473",
                    "lon": "-118.2618316"
                },
                {
                    "lat": "36.5703618",
                    "lon": "-118.2618309"
                },
                {
                    "lat": "36.5703807",
                    "lon": "-118.2618423"
                },
                {
                    "lat": "36.5703494",
                    "lon": "-118.2618832"
                },
                {
                    "lat": "36.5702929",
                    "lon": "-118.2620354"
                },
                {
                    "lat": "36.5702913",
                    "lon": "-118.2620609"
                },
                {
                    "lat": "36.5703064",
                    "lon": "-118.2620636"
                },
                {
                    "lat": "36.5703287",
                    "lon": "-118.2620461"
                },
                {
                    "lat": "36.5704238",
                    "lon": "-118.2619502"
                },
                {
                    "lat": "36.5704636",
                    "lon": "-118.2619388"
                },
                {
                    "lat": "36.5704954",
                    "lon": "-118.2619422"
                },
                {
                    "lat": "36.5705043",
                    "lon": "-118.2619555"
                },
                {
                    "lat": "36.5704857",
                    "lon": "-118.2619898"
                },
                {
                    "lat": "36.5704168",
                    "lon": "-118.2620830"
                },
                {
                    "lat": "36.5704081",
                    "lon": "-118.2621172"
                },
                {
                    "lat": "36.5704254",
                    "lon": "-118.2621527"
                },
                {
                    "lat": "36.5704868",
                    "lon": "-118.2621078"
                },
                {
                    "lat": "36.5705455",
                    "lon": "-118.2620797"
                },
                {
                    "lat": "36.5706530",
                    "lon": "-118.2619800"
                },
                {
                    "lat": "36.5708209",
                    "lon": "-118.2618308"
                },
                {
                    "lat": "36.5709717",
                    "lon": "-118.2616186"
                },
                {
                    "lat": "36.5711397",
                    "lon": "-118.2615478"
                },
                {
                    "lat": "36.5712659",
                    "lon": "-118.2614218"
                },
                {
                    "lat": "36.5712636",
                    "lon": "-118.2613507"
                },
                {
                    "lat": "36.5710835",
                    "lon": "-118.2613675"
                },
                {
                    "lat": "36.5710482",
                    "lon": "-118.2613601"
                },
                {
                    "lat": "36.5710695",
                    "lon": "-118.2613045"
                },
                {
                    "lat": "36.5712267",
                    "lon": "-118.2611342"
                },
                {
                    "lat": "36.5713894",
                    "lon": "-118.2610792"
                },
                {
                    "lat": "36.5714712",
                    "lon": "-118.2611127"
                },
                {
                    "lat": "36.5715305",
                    "lon": "-118.2610779"
                },
                {
                    "lat": "36.5716966",
                    "lon": "-118.2608344"
                },
                {
                    "lat": "36.5717809",
                    "lon": "-118.2607580"
                },
                {
                    "lat": "36.5718797",
                    "lon": "-118.2606935"
                },
                {
                    "lat": "36.5719667",
                    "lon": "-118.2606728"
                },
                {
                    "lat": "36.5720517",
                    "lon": "-118.2606862"
                },
                {
                    "lat": "36.5720921",
                    "lon": "-118.2606688"
                },
                {
                    "lat": "36.5721228",
                    "lon": "-118.2606688"
                },
                {
                    "lat": "36.5721244",
                    "lon": "-118.2606594"
                },
                {
                    "lat": "36.5721185",
                    "lon": "-118.2606386"
                },
                {
                    "lat": "36.5720798",
                    "lon": "-118.2606460"
                },
                {
                    "lat": "36.5720404",
                    "lon": "-118.2606407"
                },
                {
                    "lat": "36.5719990",
                    "lon": "-118.2606272"
                },
                {
                    "lat": "36.5718240",
                    "lon": "-118.2606199"
                },
                {
                    "lat": "36.5718162",
                    "lon": "-118.2606104"
                },
                {
                    "lat": "36.5718272",
                    "lon": "-118.2605924"
                },
                {
                    "lat": "36.5718584",
                    "lon": "-118.2605837"
                },
                {
                    "lat": "36.5718767",
                    "lon": "-118.2605723"
                },
                {
                    "lat": "36.5719957",
                    "lon": "-118.2605206"
                },
                {
                    "lat": "36.5721880",
                    "lon": "-118.2604469"
                },
                {
                    "lat": "36.5722262",
                    "lon": "-118.2604194"
                },
                {
                    "lat": "36.5722553",
                    "lon": "-118.2603925"
                },
                {
                    "lat": "36.5723339",
                    "lon": "-118.2602336"
                },
                {
                    "lat": "36.5724346",
                    "lon": "-118.2601283"
                },
                {
                    "lat": "36.5725184",
                    "lon": "-118.2600485"
                },
                {
                    "lat": "36.5725224",
                    "lon": "-118.2600224"
                },
                {
                    "lat": "36.5724880",
                    "lon": "-118.2600157"
                },
                {
                    "lat": "36.5724438",
                    "lon": "-118.2600291"
                },
                {
                    "lat": "36.5722979",
                    "lon": "-118.2601183"
                },
                {
                    "lat": "36.5722332",
                    "lon": "-118.2601693"
                },
                {
                    "lat": "36.5721993",
                    "lon": "-118.2601827"
                },
                {
                    "lat": "36.5721595",
                    "lon": "-118.2602095"
                },
                {
                    "lat": "36.5721428",
                    "lon": "-118.2602336"
                },
                {
                    "lat": "36.5721275",
                    "lon": "-118.2602416"
                },
                {
                    "lat": "36.5721207",
                    "lon": "-118.2602115"
                },
                {
                    "lat": "36.5721514",
                    "lon": "-118.2601579"
                },
                {
                    "lat": "36.5721923",
                    "lon": "-118.2601029"
                },
                {
                    "lat": "36.5722327",
                    "lon": "-118.2600640"
                },
                {
                    "lat": "36.5722752",
                    "lon": "-118.2599895"
                },
                {
                    "lat": "36.5723167",
                    "lon": "-118.2599580"
                },
                {
                    "lat": "36.5723533",
                    "lon": "-118.2599151"
                },
                {
                    "lat": "36.5723571",
                    "lon": "-118.2599030"
                },
                {
                    "lat": "36.5723479",
                    "lon": "-118.2598923"
                },
                {
                    "lat": "36.5723264",
                    "lon": "-118.2598977"
                },
                {
                    "lat": "36.5722402",
                    "lon": "-118.2599473"
                },
                {
                    "lat": "36.5721317",
                    "lon": "-118.2600243"
                },
                {
                    "lat": "36.5720927",
                    "lon": "-118.2600278"
                },
                {
                    "lat": "36.5720690",
                    "lon": "-118.2600184"
                },
                {
                    "lat": "36.5720701",
                    "lon": "-118.2599996"
                },
                {
                    "lat": "36.5721072",
                    "lon": "-118.2599688"
                },
                {
                    "lat": "36.5721735",
                    "lon": "-118.2598802"
                },
                {
                    "lat": "36.5722225",
                    "lon": "-118.2598360"
                },
                {
                    "lat": "36.5722424",
                    "lon": "-118.2598313"
                },
                {
                    "lat": "36.5722728",
                    "lon": "-118.2597937"
                },
                {
                    "lat": "36.5722564",
                    "lon": "-118.2597743"
                },
                {
                    "lat": "36.5722252",
                    "lon": "-118.2597803"
                },
                {
                    "lat": "36.5721702",
                    "lon": "-118.2598045"
                },
                {
                    "lat": "36.5721115",
                    "lon": "-118.2598159"
                },
                {
                    "lat": "36.5720628",
                    "lon": "-118.2598178"
                },
                {
                    "lat": "36.5720426",
                    "lon": "-118.2598239"
                },
                {
                    "lat": "36.5720297",
                    "lon": "-118.2598165"
                },
                {
                    "lat": "36.5720294",
                    "lon": "-118.2598071"
                },
                {
                    "lat": "36.5720421",
                    "lon": "-118.2597911"
                },
                {
                    "lat": "36.5720954",
                    "lon": "-118.2597616"
                },
                {
                    "lat": "36.5721492",
                    "lon": "-118.2597227"
                },
                {
                    "lat": "36.5721770",
                    "lon": "-118.2596958"
                },
                {
                    "lat": "36.5721837",
                    "lon": "-118.2596811"
                },
                {
                    "lat": "36.5721756",
                    "lon": "-118.2596670"
                },
                {
                    "lat": "36.5720561",
                    "lon": "-118.2597059"
                },
                {
                    "lat": "36.5720491",
                    "lon": "-118.2596979"
                },
                {
                    "lat": "36.5720561",
                    "lon": "-118.2596744"
                },
                {
                    "lat": "36.5720862",
                    "lon": "-118.2596637"
                },
                {
                    "lat": "36.5721169",
                    "lon": "-118.2596342"
                },
                {
                    "lat": "36.5721533",
                    "lon": "-118.2596139"
                },
                {
                    "lat": "36.5721993",
                    "lon": "-118.2596100"
                },
                {
                    "lat": "36.5722225",
                    "lon": "-118.2595892"
                },
                {
                    "lat": "36.5722225",
                    "lon": "-118.2595483"
                },
                {
                    "lat": "36.5722090",
                    "lon": "-118.2595409"
                },
                {
                    "lat": "36.5721885",
                    "lon": "-118.2595450"
                },
                {
                    "lat": "36.5720835",
                    "lon": "-118.2595450"
                },
                {
                    "lat": "36.5720447",
                    "lon": "-118.2595584"
                },
                {
                    "lat": "36.5720291",
                    "lon": "-118.2595577"
                },
                {
                    "lat": "36.5720205",
                    "lon": "-118.2595403"
                },
                {
                    "lat": "36.5720254",
                    "lon": "-118.2595181"
                },
                {
                    "lat": "36.5720340",
                    "lon": "-118.2595054"
                },
                {
                    "lat": "36.5720507",
                    "lon": "-118.2594920"
                },
                {
                    "lat": "36.5720970",
                    "lon": "-118.2594699"
                },
                {
                    "lat": "36.5721126",
                    "lon": "-118.2594498"
                },
                {
                    "lat": "36.5721137",
                    "lon": "-118.2594196"
                },
                {
                    "lat": "36.5720749",
                    "lon": "-118.2593814"
                },
                {
                    "lat": "36.5720372",
                    "lon": "-118.2593626"
                },
                {
                    "lat": "36.5720307",
                    "lon": "-118.2593317"
                },
                {
                    "lat": "36.5720372",
                    "lon": "-118.2592835"
                },
                {
                    "lat": "36.5720453",
                    "lon": "-118.2592553"
                },
                {
                    "lat": "36.5720447",
                    "lon": "-118.2592399"
                },
                {
                    "lat": "36.5720200",
                    "lon": "-118.2592312"
                },
                {
                    "lat": "36.5719941",
                    "lon": "-118.2592493"
                },
                {
                    "lat": "36.5719257",
                    "lon": "-118.2592566"
                },
                {
                    "lat": "36.5718837",
                    "lon": "-118.2592379"
                },
                {
                    "lat": "36.5718105",
                    "lon": "-118.2591400"
                },
                {
                    "lat": "36.5718089",
                    "lon": "-118.2591098"
                },
                {
                    "lat": "36.5718013",
                    "lon": "-118.2590930"
                },
                {
                    "lat": "36.5717852",
                    "lon": "-118.2590863"
                },
                {
                    "lat": "36.5717739",
                    "lon": "-118.2590689"
                },
                {
                    "lat": "36.5717669",
                    "lon": "-118.2590434"
                },
                {
                    "lat": "36.5717416",
                    "lon": "-118.2590146"
                },
                {
                    "lat": "36.5717227",
                    "lon": "-118.2589797"
                },
                {
                    "lat": "36.5716850",
                    "lon": "-118.2589401"
                },
                {
                    "lat": "36.5716306",
                    "lon": "-118.2588999"
                },
                {
                    "lat": "36.5714712",
                    "lon": "-118.2587282"
                },
                {
                    "lat": "36.5713991",
                    "lon": "-118.2586994"
                },
                {
                    "lat": "36.5713595",
                    "lon": "-118.2586591"
                },
                {
                    "lat": "36.5713479",
                    "lon": "-118.2586122"
                },
                {
                    "lat": "36.5713229",
                    "lon": "-118.2585729"
                },
                {
                    "lat": "36.5712924",
                    "lon": "-118.2585552"
                },
                {
                    "lat": "36.5711812",
                    "lon": "-118.2585231"
                },
                {
                    "lat": "36.5710922",
                    "lon": "-118.2585186"
                },
                {
                    "lat": "36.5710582",
                    "lon": "-118.2585029"
                },
                {
                    "lat": "36.5710625",
                    "lon": "-118.2584600"
                },
                {
                    "lat": "36.5711267",
                    "lon": "-118.2583060"
                },
                {
                    "lat": "36.5711064",
                    "lon": "-118.2581522"
                },
                {
                    "lat": "36.5710652",
                    "lon": "-118.2580577"
                },
                {
                    "lat": "36.5709954",
                    "lon": "-118.2579671"
                },
                {
                    "lat": "36.5709556",
                    "lon": "-118.2578961"
                },
                {
                    "lat": "36.5709346",
                    "lon": "-118.2576421"
                },
                {
                    "lat": "36.5709421",
                    "lon": "-118.2574811"
                },
                {
                    "lat": "36.5710245",
                    "lon": "-118.2573461"
                },
                {
                    "lat": "36.5710695",
                    "lon": "-118.2572047"
                },
                {
                    "lat": "36.5711341",
                    "lon": "-118.2571390"
                },
                {
                    "lat": "36.5711976",
                    "lon": "-118.2569888"
                },
                {
                    "lat": "36.5712504",
                    "lon": "-118.2569432"
                },
                {
                    "lat": "36.5712752",
                    "lon": "-118.2569017"
                },
                {
                    "lat": "36.5713441",
                    "lon": "-118.2566831"
                },
                {
                    "lat": "36.5714174",
                    "lon": "-118.2566120"
                },
                {
                    "lat": "36.5715035",
                    "lon": "-118.2564953"
                },
                {
                    "lat": "36.5715714",
                    "lon": "-118.2564443"
                },
                {
                    "lat": "36.5717103",
                    "lon": "-118.2564001"
                },
                {
                    "lat": "36.5717728",
                    "lon": "-118.2563746"
                },
                {
                    "lat": "36.5719300",
                    "lon": "-118.2561895"
                },
                {
                    "lat": "36.5719742",
                    "lon": "-118.2561708"
                },
                {
                    "lat": "36.5720419",
                    "lon": "-118.2561017"
                },
                {
                    "lat": "36.5722486",
                    "lon": "-118.2557389"
                },
                {
                    "lat": "36.5725580",
                    "lon": "-118.2556095"
                },
                {
                    "lat": "36.5726414",
                    "lon": "-118.2555465"
                },
                {
                    "lat": "36.5727351",
                    "lon": "-118.2554110"
                },
                {
                    "lat": "36.5728078",
                    "lon": "-118.2552575"
                },
                {
                    "lat": "36.5729382",
                    "lon": "-118.2550845"
                },
                {
                    "lat": "36.5731050",
                    "lon": "-118.2548990"
                },
                {
                    "lat": "36.5731788",
                    "lon": "-118.2547453"
                },
                {
                    "lat": "36.5731840",
                    "lon": "-118.2546958"
                },
                {
                    "lat": "36.5731622",
                    "lon": "-118.2546741"
                },
                {
                    "lat": "36.5731083",
                    "lon": "-118.2546942"
                },
                {
                    "lat": "36.5730899",
                    "lon": "-118.2546746"
                },
                {
                    "lat": "36.5730936",
                    "lon": "-118.2545886"
                },
                {
                    "lat": "36.5731390",
                    "lon": "-118.2543579"
                },
                {
                    "lat": "36.5732353",
                    "lon": "-118.2540933"
                },
                {
                    "lat": "36.5732322",
                    "lon": "-118.2540196"
                },
                {
                    "lat": "36.5732117",
                    "lon": "-118.2539217"
                },
                {
                    "lat": "36.5732139",
                    "lon": "-118.2538439"
                },
                {
                    "lat": "36.5731945",
                    "lon": "-118.2537863"
                },
                {
                    "lat": "36.5731643",
                    "lon": "-118.2537501"
                },
                {
                    "lat": "36.5731439",
                    "lon": "-118.2537353"
                },
                {
                    "lat": "36.5731154",
                    "lon": "-118.2537427"
                },
                {
                    "lat": "36.5730642",
                    "lon": "-118.2537353"
                },
                {
                    "lat": "36.5730200",
                    "lon": "-118.2537125"
                },
                {
                    "lat": "36.5728883",
                    "lon": "-118.2535482"
                },
                {
                    "lat": "36.5728014",
                    "lon": "-118.2534269"
                },
                {
                    "lat": "36.5727271",
                    "lon": "-118.2533035"
                },
                {
                    "lat": "36.5726940",
                    "lon": "-118.2531950"
                },
                {
                    "lat": "36.5726802",
                    "lon": "-118.2531720"
                },
                {
                    "lat": "36.5726969",
                    "lon": "-118.2531600"
                },
                {
                    "lat": "36.5728030",
                    "lon": "-118.2531999"
                },
                {
                    "lat": "36.5730572",
                    "lon": "-118.2533403"
                },
                {
                    "lat": "36.5731239",
                    "lon": "-118.2533611"
                },
                {
                    "lat": "36.5731740",
                    "lon": "-118.2533732"
                },
                {
                    "lat": "36.5732661",
                    "lon": "-118.2533517"
                },
                {
                    "lat": "36.5733582",
                    "lon": "-118.2534014"
                },
                {
                    "lat": "36.5733921",
                    "lon": "-118.2533900"
                },
                {
                    "lat": "36.5734115",
                    "lon": "-118.2533424"
                },
                {
                    "lat": "36.5734234",
                    "lon": "-118.2532867"
                },
                {
                    "lat": "36.5734436",
                    "lon": "-118.2532625"
                },
                {
                    "lat": "36.5734837",
                    "lon": "-118.2531781"
                },
                {
                    "lat": "36.5734799",
                    "lon": "-118.2531593"
                },
                {
                    "lat": "36.5734600",
                    "lon": "-118.2531653"
                },
                {
                    "lat": "36.5734347",
                    "lon": "-118.2531955"
                },
                {
                    "lat": "36.5734169",
                    "lon": "-118.2531955"
                },
                {
                    "lat": "36.5734325",
                    "lon": "-118.2531633"
                },
                {
                    "lat": "36.5734891",
                    "lon": "-118.2531117"
                },
                {
                    "lat": "36.5734912",
                    "lon": "-118.2530956"
                },
                {
                    "lat": "36.5734810",
                    "lon": "-118.2530882"
                },
                {
                    "lat": "36.5734271",
                    "lon": "-118.2530983"
                },
                {
                    "lat": "36.5734153",
                    "lon": "-118.2530822"
                },
                {
                    "lat": "36.5734320",
                    "lon": "-118.2530621"
                },
                {
                    "lat": "36.5735101",
                    "lon": "-118.2530547"
                },
                {
                    "lat": "36.5735047",
                    "lon": "-118.2530420"
                },
                {
                    "lat": "36.5734858",
                    "lon": "-118.2530319"
                },
                {
                    "lat": "36.5734605",
                    "lon": "-118.2530426"
                },
                {
                    "lat": "36.5734481",
                    "lon": "-118.2530299"
                },
                {
                    "lat": "36.5734638",
                    "lon": "-118.2530131"
                },
                {
                    "lat": "36.5735445",
                    "lon": "-118.2529816"
                },
                {
                    "lat": "36.5735634",
                    "lon": "-118.2529655"
                },
                {
                    "lat": "36.5735838",
                    "lon": "-118.2529172"
                },
                {
                    "lat": "36.5736167",
                    "lon": "-118.2529018"
                },
                {
                    "lat": "36.5736468",
                    "lon": "-118.2528549"
                },
                {
                    "lat": "36.5736727",
                    "lon": "-118.2528046"
                },
                {
                    "lat": "36.5736619",
                    "lon": "-118.2527925"
                },
                {
                    "lat": "36.5736485",
                    "lon": "-118.2528026"
                },
                {
                    "lat": "36.5736302",
                    "lon": "-118.2528394"
                },
                {
                    "lat": "36.5735935",
                    "lon": "-118.2528790"
                },
                {
                    "lat": "36.5735553",
                    "lon": "-118.2528998"
                },
                {
                    "lat": "36.5735176",
                    "lon": "-118.2529293"
                },
                {
                    "lat": "36.5734541",
                    "lon": "-118.2529474"
                },
                {
                    "lat": "36.5734383",
                    "lon": "-118.2529723"
                },
                {
                    "lat": "36.5733765",
                    "lon": "-118.2530078"
                },
                {
                    "lat": "36.5733264",
                    "lon": "-118.2530453"
                },
                {
                    "lat": "36.5733130",
                    "lon": "-118.2530480"
                },
                {
                    "lat": "36.5733115",
                    "lon": "-118.2530348"
                },
                {
                    "lat": "36.5733609",
                    "lon": "-118.2529655"
                },
                {
                    "lat": "36.5734018",
                    "lon": "-118.2529340"
                },
                {
                    "lat": "36.5734939",
                    "lon": "-118.2528213"
                },
                {
                    "lat": "36.5735402",
                    "lon": "-118.2527737"
                },
                {
                    "lat": "36.5735556",
                    "lon": "-118.2527421"
                },
                {
                    "lat": "36.5735297",
                    "lon": "-118.2527408"
                },
                {
                    "lat": "36.5734166",
                    "lon": "-118.2528226"
                },
                {
                    "lat": "36.5733894",
                    "lon": "-118.2528361"
                },
                {
                    "lat": "36.5733152",
                    "lon": "-118.2528561"
                },
                {
                    "lat": "36.5731989",
                    "lon": "-118.2528380"
                },
                {
                    "lat": "36.5731519",
                    "lon": "-118.2527811"
                },
                {
                    "lat": "36.5730020",
                    "lon": "-118.2526563"
                },
                {
                    "lat": "36.5729392",
                    "lon": "-118.2525632"
                },
                {
                    "lat": "36.5729198",
                    "lon": "-118.2524787"
                },
                {
                    "lat": "36.5728175",
                    "lon": "-118.2523365"
                },
                {
                    "lat": "36.5727421",
                    "lon": "-118.2521944"
                },
                {
                    "lat": "36.5727443",
                    "lon": "-118.2521622"
                },
                {
                    "lat": "36.5729274",
                    "lon": "-118.2522185"
                },
                {
                    "lat": "36.5730405",
                    "lon": "-118.2522722"
                },
                {
                    "lat": "36.5730760",
                    "lon": "-118.2523030"
                },
                {
                    "lat": "36.5731344",
                    "lon": "-118.2523237"
                },
                {
                    "lat": "36.5732960",
                    "lon": "-118.2523492"
                },
                {
                    "lat": "36.5735295",
                    "lon": "-118.2522817"
                },
                {
                    "lat": "36.5736253",
                    "lon": "-118.2521944"
                },
                {
                    "lat": "36.5736555",
                    "lon": "-118.2521588"
                },
                {
                    "lat": "36.5736878",
                    "lon": "-118.2521300"
                },
                {
                    "lat": "36.5736910",
                    "lon": "-118.2521106"
                },
                {
                    "lat": "36.5736812",
                    "lon": "-118.2521046"
                },
                {
                    "lat": "36.5736646",
                    "lon": "-118.2521085"
                },
                {
                    "lat": "36.5735881",
                    "lon": "-118.2521870"
                },
                {
                    "lat": "36.5735117",
                    "lon": "-118.2522018"
                },
                {
                    "lat": "36.5734454",
                    "lon": "-118.2521863"
                },
                {
                    "lat": "36.5734514",
                    "lon": "-118.2521709"
                },
                {
                    "lat": "36.5734756",
                    "lon": "-118.2521541"
                },
                {
                    "lat": "36.5735483",
                    "lon": "-118.2521347"
                },
                {
                    "lat": "36.5735731",
                    "lon": "-118.2521179"
                },
                {
                    "lat": "36.5736533",
                    "lon": "-118.2519939"
                },
                {
                    "lat": "36.5737042",
                    "lon": "-118.2518731"
                },
                {
                    "lat": "36.5737958",
                    "lon": "-118.2517323"
                },
                {
                    "lat": "36.5738550",
                    "lon": "-118.2516123"
                },
                {
                    "lat": "36.5738854",
                    "lon": "-118.2515305"
                },
                {
                    "lat": "36.5739371",
                    "lon": "-118.2514883"
                },
                {
                    "lat": "36.5739847",
                    "lon": "-118.2514000"
                },
                {
                    "lat": "36.5740338",
                    "lon": "-118.2513438"
                },
                {
                    "lat": "36.5740491",
                    "lon": "-118.2512978"
                },
                {
                    "lat": "36.5740490",
                    "lon": "-118.2510716"
                },
                {
                    "lat": "36.5740922",
                    "lon": "-118.2509016"
                },
                {
                    "lat": "36.5741291",
                    "lon": "-118.2508454"
                },
                {
                    "lat": "36.5742241",
                    "lon": "-118.2507674"
                },
                {
                    "lat": "36.5744704",
                    "lon": "-118.2506351"
                },
                {
                    "lat": "36.5746230",
                    "lon": "-118.2505899"
                },
                {
                    "lat": "36.5748082",
                    "lon": "-118.2505763"
                },
                {
                    "lat": "36.5750207",
                    "lon": "-118.2504655"
                },
                {
                    "lat": "36.5751061",
                    "lon": "-118.2504587"
                },
                {
                    "lat": "36.5751913",
                    "lon": "-118.2506052"
                },
                {
                    "lat": "36.5751848",
                    "lon": "-118.2507272"
                },
                {
                    "lat": "36.5751913",
                    "lon": "-118.2507554"
                },
                {
                    "lat": "36.5752411",
                    "lon": "-118.2507875"
                },
                {
                    "lat": "36.5753682",
                    "lon": "-118.2509591"
                },
                {
                    "lat": "36.5754328",
                    "lon": "-118.2511147"
                },
                {
                    "lat": "36.5754659",
                    "lon": "-118.2513186"
                },
                {
                    "lat": "36.5754315",
                    "lon": "-118.2515064"
                },
                {
                    "lat": "36.5754552",
                    "lon": "-118.2515574"
                },
                {
                    "lat": "36.5755295",
                    "lon": "-118.2515828"
                },
                {
                    "lat": "36.5756073",
                    "lon": "-118.2515653"
                },
                {
                    "lat": "36.5757190",
                    "lon": "-118.2515050"
                },
                {
                    "lat": "36.5758300",
                    "lon": "-118.2515131"
                },
                {
                    "lat": "36.5759333",
                    "lon": "-118.2515473"
                }
            ]
        },
        {
            "name": "837506177",
            "nodes": [
                {
                    "lat": "36.5759333",
                    "lon": "-118.2515473"
                },
                {
                    "lat": "36.5760066",
                    "lon": "-118.2515996"
                },
                {
                    "lat": "36.5761412",
                    "lon": "-118.2516452"
                }
            ]
        },
        {
            "name": "837506176",
            "nodes": [
                {
                    "lat": "36.5761412",
                    "lon": "-118.2516452"
                },
                {
                    "lat": "36.5762737",
                    "lon": "-118.2516660"
                },
                {
                    "lat": "36.5764215",
                    "lon": "-118.2516511"
                },
                {
                    "lat": "36.5765580",
                    "lon": "-118.2516150"
                },
                {
                    "lat": "36.5765989",
                    "lon": "-118.2515761"
                },
                {
                    "lat": "36.5766463",
                    "lon": "-118.2516392"
                },
                {
                    "lat": "36.5766883",
                    "lon": "-118.2516485"
                },
                {
                    "lat": "36.5767465",
                    "lon": "-118.2516807"
                },
                {
                    "lat": "36.5770588",
                    "lon": "-118.2516915"
                },
                {
                    "lat": "36.5771902",
                    "lon": "-118.2517263"
                },
                {
                    "lat": "36.5772914",
                    "lon": "-118.2517424"
                },
                {
                    "lat": "36.5773970",
                    "lon": "-118.2517304"
                },
                {
                    "lat": "36.5775112",
                    "lon": "-118.2516727"
                },
                {
                    "lat": "36.5775747",
                    "lon": "-118.2516848"
                },
                {
                    "lat": "36.5776048",
                    "lon": "-118.2516754"
                },
                {
                    "lat": "36.5777009",
                    "lon": "-118.2515760"
                },
                {
                    "lat": "36.5777427",
                    "lon": "-118.2514957"
                },
                {
                    "lat": "36.5777720",
                    "lon": "-118.2513346"
                },
                {
                    "lat": "36.5777642",
                    "lon": "-118.2511778"
                },
                {
                    "lat": "36.5777535",
                    "lon": "-118.2511403"
                },
                {
                    "lat": "36.5777631",
                    "lon": "-118.2511081"
                },
                {
                    "lat": "36.5778407",
                    "lon": "-118.2510853"
                },
                {
                    "lat": "36.5779495",
                    "lon": "-118.2510759"
                },
                {
                    "lat": "36.5779958",
                    "lon": "-118.2511497"
                },
                {
                    "lat": "36.5780324",
                    "lon": "-118.2511778"
                },
                {
                    "lat": "36.5780787",
                    "lon": "-118.2512261"
                },
                {
                    "lat": "36.5781875",
                    "lon": "-118.2512945"
                },
                {
                    "lat": "36.5783146",
                    "lon": "-118.2514192"
                },
                {
                    "lat": "36.5783921",
                    "lon": "-118.2515614"
                },
                {
                    "lat": "36.5784933",
                    "lon": "-118.2516821"
                },
                {
                    "lat": "36.5785752",
                    "lon": "-118.2517666"
                },
                {
                    "lat": "36.5786646",
                    "lon": "-118.2518041"
                },
                {
                    "lat": "36.5788455",
                    "lon": "-118.2518537"
                },
                {
                    "lat": "36.5789457",
                    "lon": "-118.2518001"
                },
                {
                    "lat": "36.5790609",
                    "lon": "-118.2517143"
                },
                {
                    "lat": "36.5791363",
                    "lon": "-118.2517049"
                },
                {
                    "lat": "36.5792117",
                    "lon": "-118.2517599"
                },
                {
                    "lat": "36.5793183",
                    "lon": "-118.2517585"
                },
                {
                    "lat": "36.5794572",
                    "lon": "-118.2517344"
                },
                {
                    "lat": "36.5797620",
                    "lon": "-118.2518068"
                },
                {
                    "lat": "36.5799343",
                    "lon": "-118.2517625"
                },
                {
                    "lat": "36.5800495",
                    "lon": "-118.2517558"
                },
                {
                    "lat": "36.5802444",
                    "lon": "-118.2517625"
                },
                {
                    "lat": "36.5802854",
                    "lon": "-118.2517692"
                },
                {
                    "lat": "36.5802780",
                    "lon": "-118.2517370"
                },
                {
                    "lat": "36.5800470",
                    "lon": "-118.2516390"
                },
                {
                    "lat": "36.5798449",
                    "lon": "-118.2515828"
                },
                {
                    "lat": "36.5797818",
                    "lon": "-118.2515094"
                },
                {
                    "lat": "36.5797146",
                    "lon": "-118.2514434"
                },
                {
                    "lat": "36.5796295",
                    "lon": "-118.2513924"
                },
                {
                    "lat": "36.5794396",
                    "lon": "-118.2511353"
                },
                {
                    "lat": "36.5793097",
                    "lon": "-118.2510544"
                },
                {
                    "lat": "36.5792547",
                    "lon": "-118.2509270"
                },
                {
                    "lat": "36.5792580",
                    "lon": "-118.2508908"
                },
                {
                    "lat": "36.5793280",
                    "lon": "-118.2509096"
                },
                {
                    "lat": "36.5794594",
                    "lon": "-118.2509834"
                },
                {
                    "lat": "36.5796629",
                    "lon": "-118.2509941"
                },
                {
                    "lat": "36.5798527",
                    "lon": "-118.2510418"
                },
                {
                    "lat": "36.5799634",
                    "lon": "-118.2511202"
                },
                {
                    "lat": "36.5801990",
                    "lon": "-118.2512237"
                },
                {
                    "lat": "36.5803511",
                    "lon": "-118.2511993"
                },
                {
                    "lat": "36.5804297",
                    "lon": "-118.2511993"
                },
                {
                    "lat": "36.5805912",
                    "lon": "-118.2512409"
                },
                {
                    "lat": "36.5807805",
                    "lon": "-118.2512283"
                },
                {
                    "lat": "36.5810618",
                    "lon": "-118.2510383"
                },
                {
                    "lat": "36.5811728",
                    "lon": "-118.2509807"
                },
                {
                    "lat": "36.5812568",
                    "lon": "-118.2509673"
                },
                {
                    "lat": "36.5813268",
                    "lon": "-118.2509699"
                },
                {
                    "lat": "36.5813354",
                    "lon": "-118.2509606"
                },
                {
                    "lat": "36.5813257",
                    "lon": "-118.2509337"
                },
                {
                    "lat": "36.5812191",
                    "lon": "-118.2508989"
                },
                {
                    "lat": "36.5809197",
                    "lon": "-118.2508962"
                },
                {
                    "lat": "36.5808389",
                    "lon": "-118.2508613"
                },
                {
                    "lat": "36.5807485",
                    "lon": "-118.2507326"
                },
                {
                    "lat": "36.5806978",
                    "lon": "-118.2506950"
                },
                {
                    "lat": "36.5806138",
                    "lon": "-118.2506722"
                },
                {
                    "lat": "36.5805772",
                    "lon": "-118.2506293"
                },
                {
                    "lat": "36.5804588",
                    "lon": "-118.2505743"
                },
                {
                    "lat": "36.5802283",
                    "lon": "-118.2504188"
                },
                {
                    "lat": "36.5801368",
                    "lon": "-118.2502645"
                },
                {
                    "lat": "36.5801156",
                    "lon": "-118.2501325"
                },
                {
                    "lat": "36.5801163",
                    "lon": "-118.2501036"
                },
                {
                    "lat": "36.5801486",
                    "lon": "-118.2501090"
                },
                {
                    "lat": "36.5801863",
                    "lon": "-118.2501814"
                },
                {
                    "lat": "36.5803159",
                    "lon": "-118.2502728"
                },
                {
                    "lat": "36.5804286",
                    "lon": "-118.2502954"
                },
                {
                    "lat": "36.5804997",
                    "lon": "-118.2503329"
                },
                {
                    "lat": "36.5805643",
                    "lon": "-118.2503195"
                },
                {
                    "lat": "36.5806831",
                    "lon": "-118.2502364"
                },
                {
                    "lat": "36.5808368",
                    "lon": "-118.2502203"
                },
                {
                    "lat": "36.5808572",
                    "lon": "-118.2502095"
                },
                {
                    "lat": "36.5808540",
                    "lon": "-118.2501854"
                },
                {
                    "lat": "36.5807754",
                    "lon": "-118.2501063"
                },
                {
                    "lat": "36.5807452",
                    "lon": "-118.2500500"
                },
                {
                    "lat": "36.5806741",
                    "lon": "-118.2499869"
                },
                {
                    "lat": "36.5806558",
                    "lon": "-118.2499440"
                },
                {
                    "lat": "36.5806935",
                    "lon": "-118.2499185"
                },
                {
                    "lat": "36.5807711",
                    "lon": "-118.2499185"
                },
                {
                    "lat": "36.5809121",
                    "lon": "-118.2499896"
                },
                {
                    "lat": "36.5810166",
                    "lon": "-118.2499990"
                },
                {
                    "lat": "36.5811178",
                    "lon": "-118.2500204"
                },
                {
                    "lat": "36.5811878",
                    "lon": "-118.2500875"
                },
                {
                    "lat": "36.5812923",
                    "lon": "-118.2501090"
                },
                {
                    "lat": "36.5816222",
                    "lon": "-118.2500643"
                },
                {
                    "lat": "36.5817360",
                    "lon": "-118.2500124"
                },
                {
                    "lat": "36.5817715",
                    "lon": "-118.2499775"
                },
                {
                    "lat": "36.5818103",
                    "lon": "-118.2499695"
                },
                {
                    "lat": "36.5818620",
                    "lon": "-118.2499802"
                },
                {
                    "lat": "36.5820192",
                    "lon": "-118.2499708"
                },
                {
                    "lat": "36.5821013",
                    "lon": "-118.2499533"
                },
                {
                    "lat": "36.5821183",
                    "lon": "-118.2499360"
                },
                {
                    "lat": "36.5820925",
                    "lon": "-118.2499091"
                },
                {
                    "lat": "36.5819812",
                    "lon": "-118.2498854"
                },
                {
                    "lat": "36.5819072",
                    "lon": "-118.2498454"
                },
                {
                    "lat": "36.5817608",
                    "lon": "-118.2498059"
                },
                {
                    "lat": "36.5817107",
                    "lon": "-118.2497650"
                },
                {
                    "lat": "36.5816746",
                    "lon": "-118.2497469"
                },
                {
                    "lat": "36.5815987",
                    "lon": "-118.2497516"
                },
                {
                    "lat": "36.5815467",
                    "lon": "-118.2497361"
                },
                {
                    "lat": "36.5815112",
                    "lon": "-118.2496797"
                },
                {
                    "lat": "36.5815045",
                    "lon": "-118.2496382"
                },
                {
                    "lat": "36.5815313",
                    "lon": "-118.2496304"
                },
                {
                    "lat": "36.5816162",
                    "lon": "-118.2496507"
                },
                {
                    "lat": "36.5816854",
                    "lon": "-118.2496127"
                },
                {
                    "lat": "36.5817299",
                    "lon": "-118.2496023"
                },
                {
                    "lat": "36.5818275",
                    "lon": "-118.2496114"
                },
                {
                    "lat": "36.5818803",
                    "lon": "-118.2495859"
                },
                {
                    "lat": "36.5819191",
                    "lon": "-118.2495725"
                },
                {
                    "lat": "36.5819602",
                    "lon": "-118.2495501"
                },
                {
                    "lat": "36.5819557",
                    "lon": "-118.2495269"
                },
                {
                    "lat": "36.5818512",
                    "lon": "-118.2495189"
                },
                {
                    "lat": "36.5818196",
                    "lon": "-118.2495054"
                },
                {
                    "lat": "36.5816469",
                    "lon": "-118.2493284"
                },
                {
                    "lat": "36.5816078",
                    "lon": "-118.2492507"
                },
                {
                    "lat": "36.5816003",
                    "lon": "-118.2492104"
                },
                {
                    "lat": "36.5815680",
                    "lon": "-118.2491192"
                },
                {
                    "lat": "36.5815712",
                    "lon": "-118.2490709"
                },
                {
                    "lat": "36.5815691",
                    "lon": "-118.2490240"
                },
                {
                    "lat": "36.5815534",
                    "lon": "-118.2489950"
                },
                {
                    "lat": "36.5815152",
                    "lon": "-118.2489583"
                },
                {
                    "lat": "36.5813752",
                    "lon": "-118.2489073"
                },
                {
                    "lat": "36.5813321",
                    "lon": "-118.2488684"
                },
                {
                    "lat": "36.5811157",
                    "lon": "-118.2485546"
                },
                {
                    "lat": "36.5810241",
                    "lon": "-118.2484876"
                },
                {
                    "lat": "36.5810037",
                    "lon": "-118.2484406"
                },
                {
                    "lat": "36.5809574",
                    "lon": "-118.2484111"
                },
                {
                    "lat": "36.5809358",
                    "lon": "-118.2483856"
                },
                {
                    "lat": "36.5809488",
                    "lon": "-118.2483561"
                },
                {
                    "lat": "36.5810048",
                    "lon": "-118.2483642"
                },
                {
                    "lat": "36.5810209",
                    "lon": "-118.2483508"
                },
                {
                    "lat": "36.5810565",
                    "lon": "-118.2483575"
                },
                {
                    "lat": "36.5811351",
                    "lon": "-118.2483561"
                },
                {
                    "lat": "36.5811728",
                    "lon": "-118.2483736"
                },
                {
                    "lat": "36.5812341",
                    "lon": "-118.2483669"
                },
                {
                    "lat": "36.5814668",
                    "lon": "-118.2483937"
                },
                {
                    "lat": "36.5815314",
                    "lon": "-118.2484165"
                },
                {
                    "lat": "36.5815809",
                    "lon": "-118.2483991"
                },
                {
                    "lat": "36.5816641",
                    "lon": "-118.2484251"
                },
                {
                    "lat": "36.5816886",
                    "lon": "-118.2484514"
                },
                {
                    "lat": "36.5817026",
                    "lon": "-118.2484514"
                },
                {
                    "lat": "36.5817112",
                    "lon": "-118.2484125"
                },
                {
                    "lat": "36.5816574",
                    "lon": "-118.2482985"
                },
                {
                    "lat": "36.5816638",
                    "lon": "-118.2482582"
                },
                {
                    "lat": "36.5816983",
                    "lon": "-118.2482556"
                },
                {
                    "lat": "36.5817598",
                    "lon": "-118.2482798"
                },
                {
                    "lat": "36.5818429",
                    "lon": "-118.2483225"
                },
                {
                    "lat": "36.5819568",
                    "lon": "-118.2484044"
                },
                {
                    "lat": "36.5819901",
                    "lon": "-118.2484554"
                },
                {
                    "lat": "36.5820817",
                    "lon": "-118.2485224"
                },
                {
                    "lat": "36.5821420",
                    "lon": "-118.2485546"
                },
                {
                    "lat": "36.5822217",
                    "lon": "-118.2486096"
                },
                {
                    "lat": "36.5822723",
                    "lon": "-118.2486096"
                },
                {
                    "lat": "36.5823046",
                    "lon": "-118.2486029"
                },
                {
                    "lat": "36.5823821",
                    "lon": "-118.2485412"
                },
                {
                    "lat": "36.5826064",
                    "lon": "-118.2483468"
                },
                {
                    "lat": "36.5827634",
                    "lon": "-118.2482207"
                },
                {
                    "lat": "36.5829357",
                    "lon": "-118.2481027"
                },
                {
                    "lat": "36.5829444",
                    "lon": "-118.2480674"
                },
                {
                    "lat": "36.5829152",
                    "lon": "-118.2480691"
                },
                {
                    "lat": "36.5828452",
                    "lon": "-118.2481094"
                },
                {
                    "lat": "36.5827838",
                    "lon": "-118.2481161"
                },
                {
                    "lat": "36.5826692",
                    "lon": "-118.2481494"
                },
                {
                    "lat": "36.5826320",
                    "lon": "-118.2481281"
                },
                {
                    "lat": "36.5826671",
                    "lon": "-118.2480595"
                },
                {
                    "lat": "36.5828054",
                    "lon": "-118.2479592"
                },
                {
                    "lat": "36.5829260",
                    "lon": "-118.2479069"
                },
                {
                    "lat": "36.5829841",
                    "lon": "-118.2478398"
                },
                {
                    "lat": "36.5830951",
                    "lon": "-118.2476749"
                },
                {
                    "lat": "36.5832049",
                    "lon": "-118.2475770"
                },
                {
                    "lat": "36.5832329",
                    "lon": "-118.2474777"
                },
                {
                    "lat": "36.5832501",
                    "lon": "-118.2474348"
                },
                {
                    "lat": "36.5832945",
                    "lon": "-118.2473558"
                },
                {
                    "lat": "36.5834213",
                    "lon": "-118.2471988"
                },
                {
                    "lat": "36.5834978",
                    "lon": "-118.2471250"
                },
                {
                    "lat": "36.5835517",
                    "lon": "-118.2470351"
                },
                {
                    "lat": "36.5835904",
                    "lon": "-118.2469359"
                },
                {
                    "lat": "36.5836141",
                    "lon": "-118.2468313"
                },
                {
                    "lat": "36.5836346",
                    "lon": "-118.2467897"
                },
                {
                    "lat": "36.5836624",
                    "lon": "-118.2467598"
                },
                {
                    "lat": "36.5838543",
                    "lon": "-118.2465094"
                },
                {
                    "lat": "36.5839350",
                    "lon": "-118.2463914"
                },
                {
                    "lat": "36.5839975",
                    "lon": "-118.2463127"
                },
                {
                    "lat": "36.5841710",
                    "lon": "-118.2462047"
                },
                {
                    "lat": "36.5843265",
                    "lon": "-118.2459960"
                },
                {
                    "lat": "36.5846210",
                    "lon": "-118.2457839"
                },
                {
                    "lat": "36.5848235",
                    "lon": "-118.2456712"
                },
                {
                    "lat": "36.5849874",
                    "lon": "-118.2455585"
                },
                {
                    "lat": "36.5849839",
                    "lon": "-118.2455398"
                },
                {
                    "lat": "36.5849290",
                    "lon": "-118.2455666"
                },
                {
                    "lat": "36.5848560",
                    "lon": "-118.2455679"
                },
                {
                    "lat": "36.5846242",
                    "lon": "-118.2455599"
                },
                {
                    "lat": "36.5845553",
                    "lon": "-118.2455519"
                },
                {
                    "lat": "36.5845392",
                    "lon": "-118.2455345"
                },
                {
                    "lat": "36.5845639",
                    "lon": "-118.2455251"
                },
                {
                    "lat": "36.5845973",
                    "lon": "-118.2455210"
                },
                {
                    "lat": "36.5847201",
                    "lon": "-118.2454875"
                },
                {
                    "lat": "36.5849710",
                    "lon": "-118.2454070"
                },
                {
                    "lat": "36.5849882",
                    "lon": "-118.2453829"
                },
                {
                    "lat": "36.5849785",
                    "lon": "-118.2453655"
                },
                {
                    "lat": "36.5849311",
                    "lon": "-118.2453521"
                },
                {
                    "lat": "36.5846156",
                    "lon": "-118.2453226"
                },
                {
                    "lat": "36.5845930",
                    "lon": "-118.2452944"
                },
                {
                    "lat": "36.5846038",
                    "lon": "-118.2452743"
                },
                {
                    "lat": "36.5846393",
                    "lon": "-118.2452703"
                },
                {
                    "lat": "36.5847179",
                    "lon": "-118.2452407"
                },
                {
                    "lat": "36.5847685",
                    "lon": "-118.2452287"
                },
                {
                    "lat": "36.5852154",
                    "lon": "-118.2450704"
                },
                {
                    "lat": "36.5852660",
                    "lon": "-118.2450624"
                },
                {
                    "lat": "36.5852887",
                    "lon": "-118.2450476"
                },
                {
                    "lat": "36.5852865",
                    "lon": "-118.2450315"
                },
                {
                    "lat": "36.5852305",
                    "lon": "-118.2450154"
                },
                {
                    "lat": "36.5849581",
                    "lon": "-118.2449725"
                },
                {
                    "lat": "36.5848267",
                    "lon": "-118.2449739"
                },
                {
                    "lat": "36.5847987",
                    "lon": "-118.2449564"
                },
                {
                    "lat": "36.5850474",
                    "lon": "-118.2448465"
                },
                {
                    "lat": "36.5851164",
                    "lon": "-118.2448344"
                },
                {
                    "lat": "36.5852800",
                    "lon": "-118.2447942"
                },
                {
                    "lat": "36.5853457",
                    "lon": "-118.2447854"
                },
                {
                    "lat": "36.5854168",
                    "lon": "-118.2447982"
                },
                {
                    "lat": "36.5854364",
                    "lon": "-118.2447900"
                },
                {
                    "lat": "36.5854211",
                    "lon": "-118.2447486"
                },
                {
                    "lat": "36.5853942",
                    "lon": "-118.2447546"
                },
                {
                    "lat": "36.5853700",
                    "lon": "-118.2447526"
                },
                {
                    "lat": "36.5852779",
                    "lon": "-118.2447063"
                },
                {
                    "lat": "36.5851761",
                    "lon": "-118.2446822"
                },
                {
                    "lat": "36.5850679",
                    "lon": "-118.2446185"
                },
                {
                    "lat": "36.5849925",
                    "lon": "-118.2445461"
                },
                {
                    "lat": "36.5849974",
                    "lon": "-118.2445313"
                },
                {
                    "lat": "36.5850216",
                    "lon": "-118.2445380"
                },
                {
                    "lat": "36.5851777",
                    "lon": "-118.2445528"
                },
                {
                    "lat": "36.5852779",
                    "lon": "-118.2444857"
                },
                {
                    "lat": "36.5855848",
                    "lon": "-118.2445058"
                },
                {
                    "lat": "36.5856462",
                    "lon": "-118.2445340"
                },
                {
                    "lat": "36.5858206",
                    "lon": "-118.2447164"
                },
                {
                    "lat": "36.5858422",
                    "lon": "-118.2447164"
                },
                {
                    "lat": "36.5858411",
                    "lon": "-118.2446828"
                },
                {
                    "lat": "36.5857485",
                    "lon": "-118.2445380"
                },
                {
                    "lat": "36.5856408",
                    "lon": "-118.2443462"
                },
                {
                    "lat": "36.5856182",
                    "lon": "-118.2443154"
                },
                {
                    "lat": "36.5856193",
                    "lon": "-118.2442912"
                },
                {
                    "lat": "36.5856429",
                    "lon": "-118.2442778"
                },
                {
                    "lat": "36.5856828",
                    "lon": "-118.2443221"
                },
                {
                    "lat": "36.5858357",
                    "lon": "-118.2444119"
                },
                {
                    "lat": "36.5859695",
                    "lon": "-118.2444628"
                },
                {
                    "lat": "36.5860573",
                    "lon": "-118.2445267"
                },
                {
                    "lat": "36.5861222",
                    "lon": "-118.2446037"
                },
                {
                    "lat": "36.5861688",
                    "lon": "-118.2446452"
                },
                {
                    "lat": "36.5863368",
                    "lon": "-118.2447243"
                },
                {
                    "lat": "36.5864721",
                    "lon": "-118.2447727"
                },
                {
                    "lat": "36.5866049",
                    "lon": "-118.2448719"
                },
                {
                    "lat": "36.5866638",
                    "lon": "-118.2451496"
                },
                {
                    "lat": "36.5866983",
                    "lon": "-118.2452461"
                },
                {
                    "lat": "36.5867543",
                    "lon": "-118.2453065"
                },
                {
                    "lat": "36.5868889",
                    "lon": "-118.2453371"
                },
                {
                    "lat": "36.5869194",
                    "lon": "-118.2453082"
                }
            ]
        },
        {
            "name": "539706278",
            "nodes": [
                {
                    "lat": "36.5869194",
                    "lon": "-118.2453082"
                },
                {
                    "lat": "36.5870843",
                    "lon": "-118.2450718"
                },
                {
                    "lat": "36.5871263",
                    "lon": "-118.2449819"
                },
                {
                    "lat": "36.5872114",
                    "lon": "-118.2449410"
                },
                {
                    "lat": "36.5872584",
                    "lon": "-118.2448713"
                },
                {
                    "lat": "36.5874359",
                    "lon": "-118.2445448"
                },
                {
                    "lat": "36.5875776",
                    "lon": "-118.2441671"
                },
                {
                    "lat": "36.5877745",
                    "lon": "-118.2438583"
                },
                {
                    "lat": "36.5879750",
                    "lon": "-118.2433170"
                },
                {
                    "lat": "36.5880338",
                    "lon": "-118.2429654"
                },
                {
                    "lat": "36.5880270",
                    "lon": "-118.2427620"
                },
                {
                    "lat": "36.5881344",
                    "lon": "-118.2425154"
                },
                {
                    "lat": "36.5883357",
                    "lon": "-118.2424307"
                },
                {
                    "lat": "36.5885595",
                    "lon": "-118.2424554"
                },
                {
                    "lat": "36.5888702",
                    "lon": "-118.2424057"
                },
                {
                    "lat": "36.5890979",
                    "lon": "-118.2424096"
                },
                {
                    "lat": "36.5891755",
                    "lon": "-118.2424452"
                },
                {
                    "lat": "36.5891933",
                    "lon": "-118.2424741"
                },
                {
                    "lat": "36.5892186",
                    "lon": "-118.2425029"
                },
                {
                    "lat": "36.5892857",
                    "lon": "-118.2424976"
                },
                {
                    "lat": "36.5892993",
                    "lon": "-118.2424627"
                },
                {
                    "lat": "36.5892945",
                    "lon": "-118.2423741"
                },
                {
                    "lat": "36.5893037",
                    "lon": "-118.2422689"
                },
                {
                    "lat": "36.5893177",
                    "lon": "-118.2421911"
                },
                {
                    "lat": "36.5892977",
                    "lon": "-118.2420818"
                },
                {
                    "lat": "36.5892810",
                    "lon": "-118.2418109"
                },
                {
                    "lat": "36.5892853",
                    "lon": "-118.2417492"
                },
                {
                    "lat": "36.5893015",
                    "lon": "-118.2417063"
                },
                {
                    "lat": "36.5892864",
                    "lon": "-118.2416613"
                },
                {
                    "lat": "36.5892347",
                    "lon": "-118.2415681"
                },
                {
                    "lat": "36.5891852",
                    "lon": "-118.2414655"
                },
                {
                    "lat": "36.5891061",
                    "lon": "-118.2412758"
                },
                {
                    "lat": "36.5888885",
                    "lon": "-118.2408634"
                },
                {
                    "lat": "36.5888827",
                    "lon": "-118.2408282"
                },
                {
                    "lat": "36.5888853",
                    "lon": "-118.2407936"
                },
                {
                    "lat": "36.5889354",
                    "lon": "-118.2406052"
                },
                {
                    "lat": "36.5889505",
                    "lon": "-118.2403690"
                },
                {
                    "lat": "36.5889548",
                    "lon": "-118.2403484"
                },
                {
                    "lat": "36.5889892",
                    "lon": "-118.2402693"
                },
                {
                    "lat": "36.5890318",
                    "lon": "-118.2401908"
                },
                {
                    "lat": "36.5890409",
                    "lon": "-118.2401526"
                },
                {
                    "lat": "36.5890662",
                    "lon": "-118.2401144"
                },
                {
                    "lat": "36.5891351",
                    "lon": "-118.2399320"
                },
                {
                    "lat": "36.5892026",
                    "lon": "-118.2397309"
                },
                {
                    "lat": "36.5892310",
                    "lon": "-118.2395826"
                },
                {
                    "lat": "36.5893785",
                    "lon": "-118.2390663"
                },
                {
                    "lat": "36.5894409",
                    "lon": "-118.2389161"
                },
                {
                    "lat": "36.5894679",
                    "lon": "-118.2388370"
                },
                {
                    "lat": "36.5895056",
                    "lon": "-118.2388115"
                },
                {
                    "lat": "36.5895583",
                    "lon": "-118.2387994"
                },
                {
                    "lat": "36.5896111",
                    "lon": "-118.2387954"
                },
                {
                    "lat": "36.5898006",
                    "lon": "-118.2387243"
                },
                {
                    "lat": "36.5899524",
                    "lon": "-118.2386264"
                },
                {
                    "lat": "36.5899503",
                    "lon": "-118.2385996"
                },
                {
                    "lat": "36.5900375",
                    "lon": "-118.2385741"
                },
                {
                    "lat": "36.5900321",
                    "lon": "-118.2385607"
                },
                {
                    "lat": "36.5900149",
                    "lon": "-118.2385553"
                },
                {
                    "lat": "36.5898577",
                    "lon": "-118.2386237"
                },
                {
                    "lat": "36.5897586",
                    "lon": "-118.2386546"
                },
                {
                    "lat": "36.5896746",
                    "lon": "-118.2386626"
                },
                {
                    "lat": "36.5896089",
                    "lon": "-118.2386506"
                },
                {
                    "lat": "36.5895454",
                    "lon": "-118.2386452"
                },
                {
                    "lat": "36.5894937",
                    "lon": "-118.2386626"
                },
                {
                    "lat": "36.5893925",
                    "lon": "-118.2386492"
                },
                {
                    "lat": "36.5893613",
                    "lon": "-118.2386532"
                },
                {
                    "lat": "36.5893117",
                    "lon": "-118.2387739"
                },
                {
                    "lat": "36.5892794",
                    "lon": "-118.2388356"
                },
                {
                    "lat": "36.5892428",
                    "lon": "-118.2388812"
                },
                {
                    "lat": "36.5892191",
                    "lon": "-118.2389644"
                },
                {
                    "lat": "36.5891674",
                    "lon": "-118.2390650"
                },
                {
                    "lat": "36.5890974",
                    "lon": "-118.2391669"
                },
                {
                    "lat": "36.5890425",
                    "lon": "-118.2392567"
                },
                {
                    "lat": "36.5889585",
                    "lon": "-118.2393828"
                },
                {
                    "lat": "36.5884966",
                    "lon": "-118.2400306"
                },
                {
                    "lat": "36.5883706",
                    "lon": "-118.2401727"
                },
                {
                    "lat": "36.5883308",
                    "lon": "-118.2402411"
                },
                {
                    "lat": "36.5882015",
                    "lon": "-118.2403752"
                },
                {
                    "lat": "36.5881488",
                    "lon": "-118.2404007"
                },
                {
                    "lat": "36.5880992",
                    "lon": "-118.2403980"
                },
                {
                    "lat": "36.5880422",
                    "lon": "-118.2403685"
                },
                {
                    "lat": "36.5879689",
                    "lon": "-118.2402907"
                },
                {
                    "lat": "36.5878236",
                    "lon": "-118.2402357"
                },
                {
                    "lat": "36.5877719",
                    "lon": "-118.2402451"
                },
                {
                    "lat": "36.5876819",
                    "lon": "-118.2402326"
                },
                {
                    "lat": "36.5875727",
                    "lon": "-118.2402867"
                },
                {
                    "lat": "36.5873853",
                    "lon": "-118.2402988"
                },
                {
                    "lat": "36.5873616",
                    "lon": "-118.2402733"
                },
                {
                    "lat": "36.5873465",
                    "lon": "-118.2401982"
                },
                {
                    "lat": "36.5872610",
                    "lon": "-118.2401816"
                },
                {
                    "lat": "36.5872593",
                    "lon": "-118.2401164"
                },
                {
                    "lat": "36.5872480",
                    "lon": "-118.2400642"
                },
                {
                    "lat": "36.5872205",
                    "lon": "-118.2400413"
                },
                {
                    "lat": "36.5871850",
                    "lon": "-118.2400386"
                },
                {
                    "lat": "36.5871247",
                    "lon": "-118.2400681"
                },
                {
                    "lat": "36.5870579",
                    "lon": "-118.2402800"
                },
                {
                    "lat": "36.5869832",
                    "lon": "-118.2403775"
                },
                {
                    "lat": "36.5869549",
                    "lon": "-118.2403425"
                },
                {
                    "lat": "36.5869686",
                    "lon": "-118.2402170"
                },
                {
                    "lat": "36.5869584",
                    "lon": "-118.2401814"
                }
            ]
        },
        {
            "name": "243279207",
            "nodes": [
                {
                    "lat": "36.5605651",
                    "lon": "-118.2931074"
                },
                {
                    "lat": "36.5605657",
                    "lon": "-118.2930827"
                },
                {
                    "lat": "36.5605549",
                    "lon": "-118.2930543"
                },
                {
                    "lat": "36.5605785",
                    "lon": "-118.2930246"
                },
                {
                    "lat": "36.5606186",
                    "lon": "-118.2929993"
                },
                {
                    "lat": "36.5606412",
                    "lon": "-118.2929505"
                },
                {
                    "lat": "36.5606891",
                    "lon": "-118.2929170"
                },
                {
                    "lat": "36.5607515",
                    "lon": "-118.2929186"
                },
                {
                    "lat": "36.5608002",
                    "lon": "-118.2929061"
                },
                {
                    "lat": "36.5608243",
                    "lon": "-118.2929092"
                },
                {
                    "lat": "36.5608755",
                    "lon": "-118.2929411"
                },
                {
                    "lat": "36.5609448",
                    "lon": "-118.2929330"
                },
                {
                    "lat": "36.5609644",
                    "lon": "-118.2929111"
                },
                {
                    "lat": "36.5610603",
                    "lon": "-118.2928017"
                },
                {
                    "lat": "36.5612431",
                    "lon": "-118.2926485"
                },
                {
                    "lat": "36.5613054",
                    "lon": "-118.2926029"
                },
                {
                    "lat": "36.5614907",
                    "lon": "-118.2925172"
                },
                {
                    "lat": "36.5616127",
                    "lon": "-118.2924947"
                },
                {
                    "lat": "36.5617177",
                    "lon": "-118.2925110"
                },
                {
                    "lat": "36.5617970",
                    "lon": "-118.2925053"
                },
                {
                    "lat": "36.5618748",
                    "lon": "-118.2924966"
                },
                {
                    "lat": "36.5619441",
                    "lon": "-118.2924616"
                },
                {
                    "lat": "36.5619883",
                    "lon": "-118.2924635"
                },
                {
                    "lat": "36.5620114",
                    "lon": "-118.2924741"
                },
                {
                    "lat": "36.5620375",
                    "lon": "-118.2924591"
                },
                {
                    "lat": "36.5620690",
                    "lon": "-118.2924860"
                },
                {
                    "lat": "36.5622420",
                    "lon": "-118.2925390"
                },
                {
                    "lat": "36.5623378",
                    "lon": "-118.2926166"
                },
                {
                    "lat": "36.5626530",
                    "lon": "-118.2927774"
                },
                {
                    "lat": "36.5628888",
                    "lon": "-118.2930820"
                },
                {
                    "lat": "36.5630298",
                    "lon": "-118.2931681"
                },
                {
                    "lat": "36.5630870",
                    "lon": "-118.2932312"
                },
                {
                    "lat": "36.5630831",
                    "lon": "-118.2931731"
                },
                {
                    "lat": "36.5629792",
                    "lon": "-118.2930243"
                },
                {
                    "lat": "36.5627729",
                    "lon": "-118.2925355"
                },
                {
                    "lat": "36.5627573",
                    "lon": "-118.2924369"
                },
                {
                    "lat": "36.5627029",
                    "lon": "-118.2923960"
                },
                {
                    "lat": "36.5626878",
                    "lon": "-118.2923350"
                },
                {
                    "lat": "36.5626124",
                    "lon": "-118.2922639"
                },
                {
                    "lat": "36.5625074",
                    "lon": "-118.2920279"
                },
                {
                    "lat": "36.5626033",
                    "lon": "-118.2920949"
                },
                {
                    "lat": "36.5627099",
                    "lon": "-118.2921405"
                },
                {
                    "lat": "36.5627907",
                    "lon": "-118.2922116"
                },
                {
                    "lat": "36.5629512",
                    "lon": "-118.2922854"
                },
                {
                    "lat": "36.5631462",
                    "lon": "-118.2924651"
                },
                {
                    "lat": "36.5632669",
                    "lon": "-118.2924972"
                },
                {
                    "lat": "36.5633466",
                    "lon": "-118.2925911"
                },
                {
                    "lat": "36.5634403",
                    "lon": "-118.2926448"
                },
                {
                    "lat": "36.5635264",
                    "lon": "-118.2926582"
                },
                {
                    "lat": "36.5636428",
                    "lon": "-118.2925723"
                },
                {
                    "lat": "36.5637311",
                    "lon": "-118.2925509"
                },
                {
                    "lat": "36.5638194",
                    "lon": "-118.2926676"
                },
                {
                    "lat": "36.5638496",
                    "lon": "-118.2926676"
                },
                {
                    "lat": "36.5639365",
                    "lon": "-118.2925734"
                },
                {
                    "lat": "36.5640376",
                    "lon": "-118.2925466"
                },
                {
                    "lat": "36.5640822",
                    "lon": "-118.2926032"
                },
                {
                    "lat": "36.5641059",
                    "lon": "-118.2927213"
                },
                {
                    "lat": "36.5641521",
                    "lon": "-118.2927429"
                },
                {
                    "lat": "36.5642804",
                    "lon": "-118.2925737"
                },
                {
                    "lat": "36.5643688",
                    "lon": "-118.2925241"
                },
                {
                    "lat": "36.5644215",
                    "lon": "-118.2925013"
                },
                {
                    "lat": "36.5644969",
                    "lon": "-118.2925522"
                },
                {
                    "lat": "36.5645228",
                    "lon": "-118.2925361"
                },
                {
                    "lat": "36.5645497",
                    "lon": "-118.2924570"
                },
                {
                    "lat": "36.5646467",
                    "lon": "-118.2924342"
                },
                {
                    "lat": "36.5647888",
                    "lon": "-118.2924342"
                },
                {
                    "lat": "36.5648427",
                    "lon": "-118.2924503"
                },
                {
                    "lat": "36.5649063",
                    "lon": "-118.2925335"
                },
                {
                    "lat": "36.5649116",
                    "lon": "-118.2925616"
                },
                {
                    "lat": "36.5649407",
                    "lon": "-118.2925777"
                },
                {
                    "lat": "36.5650140",
                    "lon": "-118.2925040"
                },
                {
                    "lat": "36.5651355",
                    "lon": "-118.2925310"
                },
                {
                    "lat": "36.5651831",
                    "lon": "-118.2925053"
                },
                {
                    "lat": "36.5653026",
                    "lon": "-118.2925737"
                },
                {
                    "lat": "36.5653403",
                    "lon": "-118.2926877"
                },
                {
                    "lat": "36.5653651",
                    "lon": "-118.2927078"
                },
                {
                    "lat": "36.5654147",
                    "lon": "-118.2927078"
                },
                {
                    "lat": "36.5654491",
                    "lon": "-118.2927708"
                },
                {
                    "lat": "36.5654815",
                    "lon": "-118.2927695"
                },
                {
                    "lat": "36.5656389",
                    "lon": "-118.2925957"
                },
                {
                    "lat": "36.5657259",
                    "lon": "-118.2925617"
                },
                {
                    "lat": "36.5658035",
                    "lon": "-118.2924852"
                },
                {
                    "lat": "36.5658951",
                    "lon": "-118.2924222"
                },
                {
                    "lat": "36.5659436",
                    "lon": "-118.2924168"
                },
                {
                    "lat": "36.5659694",
                    "lon": "-118.2923793"
                },
                {
                    "lat": "36.5661514",
                    "lon": "-118.2924731"
                },
                {
                    "lat": "36.5662193",
                    "lon": "-118.2924570"
                },
                {
                    "lat": "36.5662764",
                    "lon": "-118.2924785"
                },
                {
                    "lat": "36.5663268",
                    "lon": "-118.2924537"
                },
                {
                    "lat": "36.5663993",
                    "lon": "-118.2925634"
                },
                {
                    "lat": "36.5664390",
                    "lon": "-118.2925649"
                },
                {
                    "lat": "36.5664724",
                    "lon": "-118.2925194"
                },
                {
                    "lat": "36.5665284",
                    "lon": "-118.2925234"
                },
                {
                    "lat": "36.5666092",
                    "lon": "-118.2926803"
                },
                {
                    "lat": "36.5666523",
                    "lon": "-118.2926984"
                },
                {
                    "lat": "36.5666997",
                    "lon": "-118.2926555"
                },
                {
                    "lat": "36.5667305",
                    "lon": "-118.2926523"
                },
                {
                    "lat": "36.5667910",
                    "lon": "-118.2927182"
                },
                {
                    "lat": "36.5669570",
                    "lon": "-118.2927647"
                },
                {
                    "lat": "36.5670218",
                    "lon": "-118.2928157"
                },
                {
                    "lat": "36.5670347",
                    "lon": "-118.2928822"
                },
                {
                    "lat": "36.5670827",
                    "lon": "-118.2929247"
                },
                {
                    "lat": "36.5672964",
                    "lon": "-118.2929814"
                },
                {
                    "lat": "36.5675948",
                    "lon": "-118.2930243"
                },
                {
                    "lat": "36.5677133",
                    "lon": "-118.2930069"
                },
                {
                    "lat": "36.5681457",
                    "lon": "-118.2928137"
                },
                {
                    "lat": "36.5683649",
                    "lon": "-118.2927373"
                },
                {
                    "lat": "36.5687419",
                    "lon": "-118.2927105"
                },
                {
                    "lat": "36.5688130",
                    "lon": "-118.2926810"
                },
                {
                    "lat": "36.5691706",
                    "lon": "-118.2926273"
                },
                {
                    "lat": "36.5694506",
                    "lon": "-118.2925496"
                },
                {
                    "lat": "36.5696423",
                    "lon": "-118.2925656"
                },
                {
                    "lat": "36.5700710",
                    "lon": "-118.2925281"
                },
                {
                    "lat": "36.5704200",
                    "lon": "-118.2924476"
                },
                {
                    "lat": "36.5709106",
                    "lon": "-118.2924416"
                },
                {
                    "lat": "36.5711300",
                    "lon": "-118.2923285"
                },
                {
                    "lat": "36.5714040",
                    "lon": "-118.2919854"
                },
                {
                    "lat": "36.5715590",
                    "lon": "-118.2918804"
                },
                {
                    "lat": "36.5717204",
                    "lon": "-118.2918076"
                },
                {
                    "lat": "36.5717874",
                    "lon": "-118.2918031"
                },
                {
                    "lat": "36.5721756",
                    "lon": "-118.2915652"
                },
                {
                    "lat": "36.5723545",
                    "lon": "-118.2915369"
                },
                {
                    "lat": "36.5724815",
                    "lon": "-118.2914820"
                },
                {
                    "lat": "36.5726323",
                    "lon": "-118.2914981"
                },
                {
                    "lat": "36.5727680",
                    "lon": "-118.2914794"
                },
                {
                    "lat": "36.5730809",
                    "lon": "-118.2915523"
                },
                {
                    "lat": "36.5732763",
                    "lon": "-118.2916242"
                },
                {
                    "lat": "36.5735456",
                    "lon": "-118.2916564"
                },
                {
                    "lat": "36.5738174",
                    "lon": "-118.2918071"
                },
                {
                    "lat": "36.5740427",
                    "lon": "-118.2920364"
                },
                {
                    "lat": "36.5742737",
                    "lon": "-118.2921606"
                },
                {
                    "lat": "36.5744999",
                    "lon": "-118.2924154"
                },
                {
                    "lat": "36.5745882",
                    "lon": "-118.2924637"
                },
                {
                    "lat": "36.5747023",
                    "lon": "-118.2925898"
                },
                {
                    "lat": "36.5747928",
                    "lon": "-118.2926166"
                },
                {
                    "lat": "36.5748423",
                    "lon": "-118.2926676"
                },
                {
                    "lat": "36.5750340",
                    "lon": "-118.2930216"
                },
                {
                    "lat": "36.5752214",
                    "lon": "-118.2932094"
                },
                {
                    "lat": "36.5753270",
                    "lon": "-118.2933542"
                },
                {
                    "lat": "36.5754239",
                    "lon": "-118.2934374"
                },
                {
                    "lat": "36.5756264",
                    "lon": "-118.2936788"
                },
                {
                    "lat": "36.5758504",
                    "lon": "-118.2939926"
                },
                {
                    "lat": "36.5761262",
                    "lon": "-118.2945767"
                },
                {
                    "lat": "36.5763742",
                    "lon": "-118.2953465"
                },
                {
                    "lat": "36.5764370",
                    "lon": "-118.2956227"
                },
                {
                    "lat": "36.5765064",
                    "lon": "-118.2960968"
                },
                {
                    "lat": "36.5765103",
                    "lon": "-118.2963844"
                },
                {
                    "lat": "36.5765725",
                    "lon": "-118.2966700"
                },
                {
                    "lat": "36.5765507",
                    "lon": "-118.2968075"
                },
                {
                    "lat": "36.5766114",
                    "lon": "-118.2969392"
                },
                {
                    "lat": "36.5768369",
                    "lon": "-118.2970990"
                },
                {
                    "lat": "36.5769045",
                    "lon": "-118.2970835"
                },
                {
                    "lat": "36.5770515",
                    "lon": "-118.2971280"
                },
                {
                    "lat": "36.5771222",
                    "lon": "-118.2971174"
                },
                {
                    "lat": "36.5771634",
                    "lon": "-118.2969402"
                },
                {
                    "lat": "36.5772544",
                    "lon": "-118.2968124"
                },
                {
                    "lat": "36.5773842",
                    "lon": "-118.2967378"
                },
                {
                    "lat": "36.5774939",
                    "lon": "-118.2967184"
                },
                {
                    "lat": "36.5776447",
                    "lon": "-118.2966487"
                },
                {
                    "lat": "36.5776494",
                    "lon": "-118.2965761"
                },
                {
                    "lat": "36.5776307",
                    "lon": "-118.2964677"
                },
                {
                    "lat": "36.5777497",
                    "lon": "-118.2964135"
                },
                {
                    "lat": "36.5778181",
                    "lon": "-118.2963592"
                },
                {
                    "lat": "36.5779456",
                    "lon": "-118.2962535"
                },
                {
                    "lat": "36.5780113",
                    "lon": "-118.2961650"
                },
                {
                    "lat": "36.5781789",
                    "lon": "-118.2960337"
                },
                {
                    "lat": "36.5782036",
                    "lon": "-118.2959946"
                },
                {
                    "lat": "36.5781131",
                    "lon": "-118.2959061"
                },
                {
                    "lat": "36.5779785",
                    "lon": "-118.2957345"
                },
                {
                    "lat": "36.5779096",
                    "lon": "-118.2955313"
                },
                {
                    "lat": "36.5777927",
                    "lon": "-118.2952899"
                },
                {
                    "lat": "36.5777227",
                    "lon": "-118.2949680"
                },
                {
                    "lat": "36.5776660",
                    "lon": "-118.2945219"
                },
                {
                    "lat": "36.5775945",
                    "lon": "-118.2943482"
                },
                {
                    "lat": "36.5775213",
                    "lon": "-118.2941024"
                },
                {
                    "lat": "36.5774804",
                    "lon": "-118.2938692"
                },
                {
                    "lat": "36.5774690",
                    "lon": "-118.2937137"
                },
                {
                    "lat": "36.5773957",
                    "lon": "-118.2935521"
                },
                {
                    "lat": "36.5774179",
                    "lon": "-118.2935022"
                },
                {
                    "lat": "36.5778342",
                    "lon": "-118.2933019"
                },
                {
                    "lat": "36.5779478",
                    "lon": "-118.2932207"
                },
                {
                    "lat": "36.5780248",
                    "lon": "-118.2932188"
                },
                {
                    "lat": "36.5780690",
                    "lon": "-118.2930793"
                },
                {
                    "lat": "36.5783072",
                    "lon": "-118.2926442"
                },
                {
                    "lat": "36.5784761",
                    "lon": "-118.2924708"
                },
                {
                    "lat": "36.5784967",
                    "lon": "-118.2923371"
                }
            ]
        }
    ]
};