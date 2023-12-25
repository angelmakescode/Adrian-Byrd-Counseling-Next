module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "beige": "#edebddff",
          "grey": "#72888cff",
          "Black": "#000000",
          "green": "#74927fff",
          "yellow": "#f7d58bff"
        },
        "scheme": {
          "black": "#000000ff",
          "cream": "#cec3bcff"
        },
        "foreground": "#000000",
        "background": "#edebddff"
      },
      "spacing": {
        "FourUnits": "64px",
        "HalfUnit": "8px",
        "Unit": "16px",
        "TwoUnits": "32px",
        "FiveUnits": "80px",
        "SixUnits": "96px",
        "ThreeUnits": "48px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius4": "4px",
        "Radius8": "8px",
        "radius1": "25px",
        "Radius2": "2px"
      },
      "scale": {
        "Large": "144px",
        "XSmall": "16px",
        "MaxWidth": "1400px",
        "Medium": "96px",
        "XXLarge": "288px",
        "Small": "48px",
        "XLarge": "192px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}