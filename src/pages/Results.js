import React, { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import TarpContext from "../TarpContext";
import ScrollToTop from "../components/ScrollToTop";

import Config_LT from "../components/ConfigLT";
import Config_FR from "../components/ConfigFR";
import Config_BWFR from "../components/ConfigBWFR";
import Config_AF from "../components/ConfigAF";
import Config_SWAF from "../components/ConfigSWAF";
import Config_OS from "../components/ConfigOS";
import Config_TT from "../components/ConfigTT";
import Config_FR_CFly from "../components/ConfigFRCFly";
import Config_AF_CFly from "../components/ConfigAFCFly";
import Config_Dia from "../components/ConfigDia";
import Config_HexDia from "../components/ConfigHexDia";
import Config_Arrowhead from "../components/ConfigArrowhead";
import Config_PP from "../components/ConfigPP";
import Config_Adir from "../components/ConfigAdir";
import Config_SWLT from "../components/ConfigSWLT";
import Config_Lavvu from "../components/ConfigLavvu";
import Config_Miners from "../components/ConfigMiners";
import Config_Bakers from "../components/ConfigBakers";

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
          <Config_LT />
          <Config_FR />
          <Config_FR_CFly />
          <Config_BWFR />
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
          <Config_AF />
          <Config_AF_CFly />
          <Config_SWAF />
          <Config_OS />
          <Config_TT />
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
          <Config_Dia />
          <Config_HexDia />
          <Config_Arrowhead />
          <Config_PP />
          <Config_Adir />
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
          <Config_SWLT />
          <Config_Lavvu />
          <Config_Miners />
          <Config_Bakers />
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
