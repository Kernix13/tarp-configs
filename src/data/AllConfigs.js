const configObjects = [
  [
    {
      id: 1,
      name: "Lean-To",
      notes: "Stake C & D to the ground, tie A & B on the ridgeline.",
      imgUrl: "../assets/images/Fold_LT.png",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 2,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "N/A"
    },
    {
      id: 2,
      name: "Flat Roof LT 50",
      notes: "Stake C & D, tie poles to E & F, tie A & B to the ridgeline.",
      imgUrl: "abc",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "Centerline"
    },
    {
      id: 3,
      name: "Flat Roof LT 33",
      notes: "Stake C & D, tie poles to E & F, tie A & B to the ridgeline.",
      imgUrl: "../assets/images/Fold_LT.png",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "Two-thirds point"
    },
    {
      id: 4,
      name: "Flat Roof LT 25",
      notes: "Stake C & D, tie poles to E & F, tie A & B to the ridgeline.",
      imgUrl: "../assets/images/Fold_LT.png",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "Three-quarters point"
    },
    {
      id: 5,
      name: "Flat-Roof C-Fly",
      notes: "Stake C, D, G & H, tie poles to A & B, tie E & F to the ridgeline.",
      imgUrl: "../assets/images/Fold_LT.png",
      tarps: "Rectangle",
      angles: 60,
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 0
      },
      foldPoints: "Thirds (or quarters)"
    },
    {
      id: 6,
      name: "Back-Wall LT 25",
      notes: "Stake C & D, tie poles to E & F, tie A & B to the ridgeline.",
      imgUrl: "../assets/images/Fold_LT.png",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "First-quarter point"
    },
    {
      id: 7,
      name: "Back-Wall LT 33",
      notes: "Stake C & D, tie poles to E & F, tie A & B to the ridgeline.",
      imgUrl: "../assets/images/Fold_LT.png",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "First-third point"
    },
    {
      id: 8,
      name: "Back Wall Flat Roof LT 25",
      notes: "Stake C & D, tie poles to G & H for back wall and E & F for flat roof, tie A & B to the ridgeline.",
      imgUrl: "../assets/images/Fold_LT.png",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 6,
        ridgeline: 2,
        poles: 4,
        guylines: 4
      },
      foldPoints: "Quarter and three-quarters"
    },
    {
      id: 9,
      name: "Back Wall Flat Roof LT 33",
      notes: "Stake C & D, tie poles to G & H for back wall and E & F for flat roof, tie A & B to the ridgeline.",
      imgUrl: "../assets/images/Fold_LT.png",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 6,
        ridgeline: 2,
        poles: 4,
        guylines: 4
      },
      foldPoints: "Third and two-thirds"
    }
  ],
  [
    {
      id: 10,
      name: "A-Frame",
      notes: "Stake A, B, C & D to the ground, tie E & F on the ridgeline.",
      imgUrl: "",
      tarps: "All",
      angles: [37, 75],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Middle"
    },
    {
      id: 11,
      name: "A-Frame LT 33",
      notes: "Stake C & D to the ground, tie E & F on the ridgeline, tie guylines at A & B.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 2
      },
      foldPoints: "Two-thirds point"
    },
    {
      id: 12,
      name: "A-Frame LT 25",
      notes: "Stake C & D to the ground, tie E & F on the ridgeline, tie guylines at A & B.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 2
      },
      foldPoints: "Three-quarters point"
    },
    {
      id: 13,
      name: "Side-Wall AF 25",
      notes: "Stake A, B, C & D, tie G & H to center ridgeline, use poles and guylines for E, F, I & J.",
      imgUrl: "",
      tarps: "All",
      angles: [37, 75],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 8,
        ridgeline: 2,
        poles: 4,
        guylines: 4
      },
      foldPoints: "Quarter, half, three-quarters"
    },
    {
      id: 14,
      name: "Side-Wall AF 33",
      notes: "Stake A, B, C & D, tie G & H to center ridgeline, use poles and guylines for E, F, I & J.",
      imgUrl: "",
      tarps: "Rectangle",
      angles: [37, 75],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 8,
        ridgeline: 2,
        poles: 4,
        guylines: 4
      },
      foldPoints: "Third, half, two-thirds"
    },
    {
      id: 15,
      name: "Tube tent",
      notes: "Stake G & H, tie E & F to the ridgeline, stake A & C together as well as and B & D to the ground.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: 60,
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Thirds"
    },
    {
      id: 16,
      name: "AF C-Fly",
      notes: "Stake C, D, G & H, tie E & F to ridgeline, use guylines at A & B. ",
      imgUrl: "",
      tarps: "Rectangle",
      angles: [75, 30],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 6,
        ridgeline: 2,
        poles: 0,
        guylines: 2
      },
      foldPoints: "Third and two-thirds"
    },
    {
      id: 17,
      name: "Open Stall",
      notes: "Stake C & D, use poles and guylines for G, H, A & B, tie E & F to ridgeline.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 6,
        ridgeline: 2,
        poles: 2,
        guylines: 4
      },
      foldPoints: "Third and two-thirds"
    }
  ],
  [
    {
      id: 18,
      name: "Diamond",
      notes: "Stake B & C to the ground, tie A & D to the ridgeline.",
      imgUrl: "",
      tarps: "Square",
      angles: [45, 75],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 2,
        ridgeline: 2,
        poles: 0,
        guylines: 2
      },
      foldPoints: "Along diagonal"
    },
    {
      id: 19,
      name: "Plow Point",
      notes: "Stake A, B and C, tie D to a pole guyline or along A-D ridgeline.",
      imgUrl: "",
      tarps: "Square",
      angles: 33,
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 3,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Along diagonal"
    },
    {
      id: 20,
      name: "Adirondack",
      notes: "Stake G & F then side wall points B & C, tie E & H to ridgeline, attach A to guyline or pole.",
      imgUrl: "",
      tarps: "Square",
      angles: 45,
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 5,
        ridgeline: 2,
        poles: 0,
        guylines: 1
      },
      foldPoints: "F-G, E-F, G-H, E-H"
    },
    {
      id: 21,
      name: "Hex Diamond",
      notes: "Stake G & H and E & F, tie A & D to the ridgeline.",
      imgUrl: "",
      tarps: "Square",
      angles: [45, 60],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Main & mid-pt diagonals"
    },
    {
      id: 22,
      name: "Arrowhead Wedge",
      notes: "Stake B, D & C, tie E & F to ridgeline, tie A to guyline or pole.",
      imgUrl: "",
      tarps: "Square",
      angles: 30,
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 5,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "Side midpoints back to opposite corner"
    }
  ],
  [
    {
      id: 23,
      name: "Side Wall LT 1:2",
      notes: "Stake A & B and C & D on each side, tie E & F to ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: [60, 33.3],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "1/3 and 2/3 to opposite corner"
    },
    {
      id: 24,
      name: "Side Wall LT 3:5",
      notes: "Stake A & B and C & D on each side, tie E & F to ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 3:5",
      angles: [55, 29],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "1/3 and 2/3 to opposite corner"
    },
    {
      id: 25,
      name: "Side Wall LT 2:3",
      notes: "Stake A & B and C & D on each side, tie E & F to ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 2:3",
      angles: [58, 27],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "1/3 and 2/3 to opposite corner"
    },
    {
      id: 26,
      name: "Holden Tent 1:2",
      notes: "Stake A & B and C & D on each side, tie E to pole.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: [50, 45],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corners to opposite center"
    },
    {
      id: 27,
      name: "Holden Tent 3:5",
      notes: "Stake A & B and C & D on each side, tie E & F to ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 3:5",
      angles: [45, 40],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 28,
      name: "Holden Tent 2:3",
      notes: "Stake A & B and C & D on each side, tie E & F to ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 2:3",
      angles: [56, 38],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 29,
      name: "Holden Tent 3:4",
      notes: "Stake A & B and C & D on each side, tie E & F to ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 3:4",
      angles: [55, 33],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 30,
      name: "Holden Tent 4:5",
      notes: "Stake A & B and C & D on each side, tie E & F to ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 4:5",
      angles: [58, 30],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 31,
      name: "Miners Tent",
      notes: "Stake B, C, E, I, H and G, attach E to pole.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: 67.5,
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 6,
        ridgeline: 0,
        poles: 3,
        guylines: 0
      },
      foldPoints: "Various... good luck!"
    },
    {
      id: 32,
      name: "Bakers Wind Shed",
      notes: "Stake B, D, G & H, tie E and F to ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: 27.5,
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "At the thirds or quarters"
    },
    {
      id: 33,
      name: "Lavvu",
      notes: "Stake A, E, G and C, tie D to ridgepole, alow B, F & H to hang.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: 60,
      ridgelines: 0,
      poles: 3,
      tiePoints: {
        stakes: 3,
        ridgeline: 0,
        poles: 2,
        guylines: 0
      },
      foldPoints: "Thirds"
    }
  ]
];

export default configObjects;
