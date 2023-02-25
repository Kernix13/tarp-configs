import AllCalcs from "../data/AllCalcs";
import ScrollToTop from "../components/ScrollToTop";

function Calcs() {
  return (
    <div className="mb-16">
      <h1 className="text-4xl md:text-5xl text-gray-500 text-center mb-12">Calculations used in the JavaScript Files</h1>
      <p className="mb-2 text-sm italic text-slate-600">FYI for developers: My JavaScript variable names do not match the names in the equations on this page.</p>
      <h2 className="text-3xl mt-12 mb-1">Equations common to nearly all configurations</h2>
      <p className="mb-4">
        Some configurations (A-Frame, Flat Roofs, ...) do not use <span className="italic">Sit Cover</span>, <span className="italic">Sit Cover Tarp Height</span>, <span className="italic">Chair Cover</span>, and <span className="italic">Chair Cover Tarp Height</span>.
      </p>
      <div className="flex flex-col lg:flex-row">
        <ul className="text-base basis-1/2">
          <li>
            1. <span className="font-semibold">Sit Height</span> = height / 2
          </li>
          <li>
            2. <span className="font-semibold">Sit Depth</span> = (height * 7 ) / 32
          </li>
          <li>
            3. <span className="font-semibold">Sit Cover</span> = Overhead Cover - (Sit Depth + 3)
          </li>
          <li>
            4. <span className="font-semibold">Sit Cover Tarp Height</span> = tan(angle) * Sit Cover
          </li>
        </ul>
        <ul className="text-base basis-1/2">
          <li>
            5. <span className="font-semibold">Sitting Clearance</span> = Sit Cover Tarp Height - Sit Height
          </li>
          <li>
            6. <span className="font-semibold">Chair Cover</span> = Overhead Cover - (Chair Depth + 3)
          </li>
          <li>
            7. <span className="font-semibold">Chair Cover Tarp Height</span> = tan(angle) * Chair Cover
          </li>
          <li>
            8. <span className="font-semibold">Chair Sit Clearance</span> = Chair Cover Tarp Height - Sit Height
          </li>
        </ul>
      </div>
      <h2 className="text-3xl mt-12 mb-1">Lean-To calculations</h2>
      <p className="mt-4">
        1. <span className="italic">i (angle)</span> ranges from 30 to 50-degrees for all Lean-To configurations.
      </p>
      <p>2. Sleep Clearance = (tarp length - height) for all Lean-To and A-Frame configs.</p>
      <div className="flex flex-col flex-wrap mt-6 md:flex-row">
        {AllCalcs[0].map((item, i) => (
          <div key={i} className="basis-6/12 flex-1 px-2">
            <h3 className="text-2xl mt-4 mb-2">{item.name}</h3>
            <p className="text-base">Ridge Height = {item["Ridge Height"]}</p>
            <p className="text-base">Overhead Cover = {item["Overhead Cover"]}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl mt-12 mb-1">A-Frame calculations</h2>
      <p className="mt-4">
        1. <span className="italic">i (angle)</span> is 60-degrees for Tube Tent and Flat-Roof C-Fly, 70 &amp; 30-degrees for A-Frame C-Fly, and ranges from 37 to 75-degrees for A-Frame and Side-Wall AF.
      </p>
      <div className="flex flex-col flex-wrap mt-6 mx-2 md:flex-row">
        {AllCalcs[1].map((item, i) => (
          <div key={i} className="basis-6/12 px-2">
            <h3 className="text-2xl mt-4 mb-2">{item.name}</h3>
            <p className="text-base">Ridge Height = {item["Ridge Height"]}</p>
            <p className="text-base">Overhead Cover = {item["Overhead Cover"]}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl mt-8 mb-1">Diagonal calculations</h2>
      <p className="mt-4">
        1. <span className="italic">i (angle)</span> is 22.5 for ArrowHead Wedge, 33 for Plow Point, and 45 for Adirondack. The angle for Diamond ranges from 45 to 75-degrees, and 45 to 60-degrees for Hex Diamond.
      </p>
      <div className="flex flex-col flex-wrap mt-6 mx-2 md:flex-row">
        {AllCalcs[2].map((item, i) => (
          <div key={i} className="basis-6/12 px-2">
            <h3 className="text-2xl mt-4 mb-2">{item.name}</h3>
            <p className="text-base">Ridge Height = {item["Ridge Height"]}</p>
            <p className="text-base">Overhead Cover = {item["Overhead Cover"]}</p>
            <p className="text-base">Sleep Clearance = {item["Sleep Clearance"]}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl mt-12 mb-1">Tent calculations</h2>
      <p className="mt-4">
        1a. <span className="italic">i (angle)</span> is all over the place for these configs: Bakers Wind Shed 27.5, Lavvu 60, and Miners Tent 67.5. The Side-Wall LT and Holden configs for each rectangle ratio have 2 angles: 1. for the side walls, 2. for the main lean.
      </p>
      <p className="mt-2">
        1b. <span className="italic">Side-Wall LT and Holden Tent angles: </span> Side-Wall LT 1:2 60, 33.3 | Side-Wall LT 3:5 55, 29 | Side-Wall LT 2:3 58, 27 | Holden Tent 1:2 50, 45 | Holden Tent 3:5 45, 40 | Holden Tent 2:3 56, 38 | Holden Tent 3:4 55, 33 | Holden Tent 4:5 58, 300 |
      </p>
      <div className="flex flex-col flex-wrap mt-6 mx-2 md:flex-row">
        {AllCalcs[3].map((item, i) => (
          <div key={i} className="basis-6/12 px-2">
            <h3 className="text-2xl mt-4 mb-2">{item.name}</h3>
            <p className="text-base">Ridge Height = {item["Ridge Height"]}</p>
            <p className="text-base">Overhead Cover = {item["Overhead Cover"]}</p>
            <p className="text-base">Sleep Clearance = {item["Sleep Clearance"]}</p>
          </div>
        ))}
      </div>
      <p className="m-8">
        Feel free to{" "}
        <a href="https://kernixwebdesign.com/contact/" className="text-blue-600 hover:underline hover:underline-offset-2 hover:text-blue-700">
          contact me
        </a>{" "}
        if you feel any of these calculations are inaccurate.
      </p>
      <ScrollToTop />
    </div>
  );
}

export default Calcs;
