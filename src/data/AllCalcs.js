const AllCalcs = [
  [
    {
      id: 1,
      name: "Lean-To",
      "Ridge Height": "sin(i) * tarp width",
      "Overhead Cover": "cos(i) * tarp width"
    },
    {
      id: 2,
      name: "Flat Roof LT 50",
      "Ridge Height": "sin(i) * tarp width * 0.5",
      "Overhead Cover": "cos(i) * tarp width * 0.5 + tarp width * 0.5"
    },
    {
      id: 3,
      name: "Flat Roof LT 33",
      "Ridge Height": "sin(i) * tarp width * 0.667",
      "Overhead Cover": "cos(i) * tarp width * 0.667 + tarp width * 0.333"
    },
    {
      id: 4,
      name: "Flat Roof LT 25",
      "Ridge Height": "sin(i) * tarp width * 0.75",
      "Overhead Cover": "cos(i) * tarp width * 0.75 + tarp width * 0.25"
    },
    {
      id: 5,
      name: "Back Wall LT 25",
      "Ridge Height": "sin(i) * tarp width * 0.75 + tarp width * 0.25",
      "Overhead Cover": "cos(i) * tarp width * 0.75"
    },
    {
      id: 6,
      name: "Back Wall LT 33",
      "Ridge Height": "sin(i) * tarp width * 0.667 + tarp width * 0.333",
      "Overhead Cover": "cos(i) * tarp width * 0.667"
    },
    {
      id: 7,
      name: "A-Frame LT 66",
      "Ridge Height": "sin(i) * tarp width * 0.667",
      "Overhead Cover": "cos(i) * tarp width"
    },
    {
      id: 8,
      name: "A-Frame LT 66",
      "Ridge Height": "sin(i) * tarp width * 0.75",
      "Overhead Cover": "cos(i) * tarp width"
    },
    {
      id: 9,
      name: "Back Wall Flat Roof LT 25",
      "Ridge Height": "sin(i) * tarp width * 0.5 + tarp width * 0.25",
      "Overhead Cover": "cos(i) * tarp width * 0.5 + tarp width * 0.25"
    },
    {
      id: 10,
      name: "Back Wall Flat Roof LT 33",
      "Ridge Height": "sin(i) * tarp width * 0.333 + tarp width * 0.333",
      "Overhead Cover": "cos(i) * tarp width * 0.333 + tarp width * 0.333"
    },
    {
      id: 11,
      name: "Open Stall",
      "Ridge Height": "sin(i) * tarp width * 0.333 + tarp width * 0.333",
      "Overhead Cover": "cos(i) * tarp width * 0.667"
    }
  ],
  [
    {
      name: "A-Frame",
      "Ridge Height": "sin(i) * tarp width * 0.5",
      "Overhead Cover": "cos(i) * tarp width"
    },
    {
      name: "Side-Wall AF 25",
      "Ridge Height": "sin(i) * tarp width * 0.25 + tarp width * 0.25",
      "Overhead Cover": "cos(i) * tarp width * 0.5"
    },
    {
      name: "Side-Wall AF 33",
      "Ridge Height": "sin(i) * tarp width * 0.333 + tarp width * 0.333",
      "Overhead Cover": "cos(i) * tarp width * 0.667"
    },
    {
      name: "Tube Tent",
      "Ridge Height": "sin(i) * tarp width * 0.333",
      "Overhead Cover": "cos(i) * tarp width * 0.667"
    },
    {
      name: "Flat-Roof C-Fly",
      "Ridge Height": "sin(i) * tarp width * 0.333",
      "Overhead Cover": "cos(i) * tarp width * 0.333 + tarp width * 0.333"
    },
    {
      name: "A-Frame C-Fly",
      "Ridge Height": "sin(i) * tarp width * 0.333",
      "Overhead Cover": "cos(i1) * tarp width * 0.333 + cos(i2) * tarp width * 0.333"
    }
  ],
  [
    {
      name: "Diamond",
      "Ridge Height": "height + 6",
      "Overhead Cover": "cos(i) * diagonal",
      "Sleep Clearance": "diagonal - height"
    },
    {
      name: "Hex Diamond",
      "Ridge Height": "sin(i) * tarp length",
      "Overhead Cover": "cos(i) * tarp length",
      "Sleep Clearance": "diagonal - height"
    },
    {
      name: "Arrowhead Wedge",
      "Ridge Height": "sin(i) * diagonal",
      "Overhead Cover": "tarp length / 2",
      "Sleep Clearance": "cos(i) * diagonal - height"
    },
    {
      name: "Plow Point",
      "Ridge Height": "sin(i) * diagonal",
      "Overhead Cover": "cos(i) * diagonal",
      "Sleep Clearance": "cos(i) * diagonal - height"
    },
    {
      name: "Adirondack",
      "Ridge Height": "(tarp length * 0.5) / sin(i)",
      "Overhead Cover": "cos(i) * sqrt( 2 * length * length)",
      "Sleep Clearance": "diagonal / 2 - height"
    }
  ],
  [
    {
      name: "Lavvu",
      "Ridge Height": "sin(i) * tarp length",
      "Overhead Cover": "sin(i) * tarp width / 3",
      "Sleep Clearance": "tarp width / 3 - height"
    },
    {
      name: "Miners Tent",
      "Ridge Height": "0.91 * tarp length",
      "Overhead Cover": "0.8125 * tarp length",
      "Sleep Clearance": "0.5 * tarp width - height"
    },
    {
      name: "Bakers Wind Shed",
      "Ridge Height": "sin(i) * tarp length",
      "Overhead Cover": "cos(i) * tarp length",
      "Sleep Clearance": "sqrt((tarp length * 0.5) * (tarp length * 0.5) * 2) - height",
      "Sleep Clear2": "tarp width / 2 - height"
    },
    {
      name: "All Side Wall & Holden tents:",
      "Ridge Height": "sin(i2) * tarp length",
      "Overhead Cover": "cos(i2) * tarp length",
      "Sleep Clearance": "(tarp width - (0.375 * height) / (tan(i1) * 2)) - height",
      "Sleep Clear2": "tarp width - height"
    }
  ]
];

export default AllCalcs;
