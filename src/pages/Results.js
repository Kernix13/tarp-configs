import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import TarpContext from "../TarpContext";
import ScrollToTop from "../components/ScrollToTop";

import ConfigLT from "../components/ConfigLT";
import ConfigFR from "../components/ConfigFR";
import ConfigBWFR from "../components/ConfigBWFR";
import ConfigAF from "../components/ConfigAF";
import ConfigSWAF from "../components/ConfigSWAF";
import ConfigOS from "../components/ConfigOS";
import ConfigTT from "../components/ConfigTT";
import ConfigFRCFly from "../components/ConfigFRCFly";
import ConfigAFCFly from "../components/ConfigAFCFly";
import ConfigDia from "../components/ConfigDia";
import ConfigHexDia from "../components/ConfigHexDia";
import ConfigArrowhead from "../components/ConfigArrowhead";
import ConfigPP from "../components/ConfigPP";
import ConfigAdir from "../components/ConfigAdir";
import ConfigSWLT from "../components/ConfigSWLT";
import ConfigLavvu from "../components/ConfigLavvu";
import ConfigMiners from "../components/ConfigMiners";
import ConfigBakers from "../components/ConfigBakers";

function Results() {
  const state = useContext(TarpContext);
  const sitHeight = state.height / 2;
  const sitDepth = Math.round((state.height * 7) / 32);
  // console.log(state);

  if (state.height === "") {
    return (
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Lean-To Configurations</h2>
        <p className="mb-3 text-center">Please submit the form to see the configurations.</p>
        <div className="mt-6 text-center">
          <button id="user-submit" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-cyan-700 hover:border-transparent rounded">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Back to Home Page Form
            </Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <section>
          <h1 className="text-5xl mb-6 text-gray-500 text-center">Tarp Configuration Results</h1>
          <p className="mb-3 text-slate-500 italic text-center">If your tarp is too small you may not see any configurations under a category type.</p>
          <h3 className="mb-3 text-3xl">Your Dimensions</h3>
          <p className="mb-3">
            <span>Height: {state.height}" | </span>
            <span>Body width: {state.bodyWidth}" | </span>
            <span>Chair height: {state.chairHeight}" | </span>
            <span>Chair depth: {state.chairDepth}" | </span>
            <span>Sitting height: {sitHeight}" | </span>
            <span>Sitting depth: {sitDepth}" | </span>
            <span>
              Tarp size: {state.tarpLength} x {state.tarpWidth}
            </span>
          </p>
          <div className="bg-img lt-bg-img">
            <h2 className="config-heading text-3xl m-6 text-teal-700 font-semibold text-center sm:text-4xl">Lean-To Configurations</h2>
          </div>
          <ConfigLT />
          <ConfigFR />
          <ConfigFRCFly />
          <ConfigBWFR />
          <p className="mt-1 text-center">
            Go to{" "}
            <Link to="/configs#lean-to-configuration" className="font-bold text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Configs page
            </Link>{" "}
            for more details on Lean-To set-ups.
          </p>
        </section>
        <section>
          <div className="bg-img af-bg-img">
            <h2 className="config-heading text-3xl m-6 text-teal-700 font-semibold text-center sm:text-4xl">A-Frame Configurations</h2>
          </div>
          <ConfigAF />
          <ConfigAFCFly />
          <ConfigSWAF />
          <ConfigOS />
          <ConfigTT />
          <p className="mt-2 text-center">
            Go to{" "}
            <Link to="/configs#aframe-configuration" className="font-bold text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Configs page
            </Link>{" "}
            for more details on A-Frame set-ups.
          </p>
        </section>
        <section>
          <div className="bg-img diag-bg-img">
            <h2 className="config-heading text-3xl m-6 text-teal-700 font-semibold text-center sm:text-4xl">Diagonal Configurations</h2>
          </div>
          <ConfigDia />
          <ConfigHexDia />
          <ConfigPP />
          <ConfigArrowhead />
          <ConfigAdir />
          <p className="mt-6 text-center">
            Go to{" "}
            <Link to="/configs#diagonal-configuration" className="font-bold text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Configs page
            </Link>{" "}
            for more details on Diagonal set-ups.
          </p>
        </section>
        <section>
          <div className="bg-img tent-bg-img">
            <h2 className="config-heading text-3xl m-6 text-teal-700 font-semibold text-center sm:text-4xl">Tent Configurations</h2>
          </div>
          <ConfigSWLT />
          <ConfigLavvu />
          <ConfigMiners />
          <ConfigBakers />
          <p className="mt-3 text-center">
            Go to{" "}
            <Link to="/configs#tent-configuration" className="font-bold text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Configs page
            </Link>{" "}
            for more details on Tent set-ups.
          </p>
        </section>
        <div className="text-left mt-6">
          <button id="user-submit" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 my-2 border border-cyan-700 hover:border-transparent rounded">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Back to Home Page Form
            </Link>
          </button>
        </div>
        <ScrollToTop />
      </div>
    );
  }
}

export default Results;
