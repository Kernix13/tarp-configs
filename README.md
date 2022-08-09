# Tarp Configurations React App

My 3rd portfolio project using React and Tailwind CSS.

This React app calculates the ridgeline height for 33 different tarp configurations based on 21 types of tarp shelters given user-supplied body dimensions and tarp size.

This application would be of interest to bushcrafters, wilderness survivalists, backpackers and campers.

This is personal project since I practice bushcraft and wilderness survival techniques.

## Features

1. The `Results` page lists the ridgeline height, resulting lean angle for each tarp design that fits your height. It also calculates whether or not you have room to sit on the ground and/or in your chair under the tarp.
1. The `Configs` page has information on each configuration like the number of tie points you need and where you need to fold your tarp.
1. The app alculates the height for user's ridgeline or ridge pole, sleeping clearance, sitting clearance, chair sitting clearance, and diagonal sleeping clearance.
<!-- 1. For the time being I have a `Calcs` page which shows all the calculations for the tarp configurations. I may remove that page if it doesn't make sense to have it. -->

## To-Do Items

IMPORTANT TO-DO's:

1. **MERGE BRANCH TO MASTER LOCALLY**
1. Need US and Metric radio buttons on the form
1. The import of all the tarp designs in Configs.js to get the `src` to work - have to find a better way
   1. Why doesn't my img src work in Configs.js?
1. useEffect **cleanup!!!** - yes, stop the focus when you are on another page? https://dmitripavlutin.com/react-useref-guide/ -
1. A page reload loses state and therefore `/configs` content - `localStorage`?
1. Double check the 2 angles for all Side-Wall LT and Holden Tent configs.
1. Double check Miners tent constants since it has 3D geometry (Geek37).
1. Update portfolio page
1. Contact DD Hammocks about the app and my redesign of their page.

FORM TO-DO's:

1. if user does not enter `bodyWidth`, `chairHeight` and `chairDpeth` fields, then calculate them and make a note to the user maybe - need async/await, see notes in App.js
1. I need additional conditional in the event the user only wants to change the tarp size (Home.js) but keep user dimensions
1. Consider changing Sleep Clearance conditional to negative to be able to push out the side walls for Adirondack, SWLT, Bakers & Holden, maybe `-12`.

LESS IMPORTANT TO DO:

1. button colors change?
1. Consider adding _Half-Pyramid_ and _Forest Tent_ into A-Frame category, and _Trapezoid_ and _Tetra_ into Tents. Which means I need to add 1-2 more in Lean-To (Envelope?) and Diagonal (Octagon? Forrester? Bivi Bag Cornet)
1. no DaisyUI clsses? `npm uninstall daisyui`?
1. added Config.js as a ES6 class - why? Where? Must have deleted it.

## Contributing

I am open to contributions but I have not created a license yet or all the other requirements.

## License

...MIT later
