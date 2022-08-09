import React, { useContext } from "react";
import TarpContext from "../TarpContext";
import { FaTimes, FaCheck } from "react-icons/fa";

import SideWallLTImg from "../assets/images/SideWallLT.png";
import HoldenTentImg from "../assets/images/HoldenTent.png";

function Config_SWLT() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_SWLT {
    constructor(configName, len, width, alpha, beta, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.alpha = alpha;
      this.beta = beta;
      this.img = img;
    }

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = Math.round(w - (0.375 * state.height) / (Math.tan(this.alpha) * 2) - state.height);
      const configImg = this.img;

      const ridgeHt = Math.round(Math.sin(this.beta * deg2Rad) * l);

      const ridgeHeight = Math.min(ridgeHt, state.height);

      if (ridgeHeight === state.height) {
        cover = Math.round(Math.sqrt(Math.pow(l, 2) - Math.pow(ridgeHeight, 2)));
      } else {
        cover = Math.round(Math.cos(this.beta * deg2Rad) * l);
      }

      const sitCover = Math.round(cover - (sitDepth + 3));
      const chairCover = Math.round(cover - state.chairDepth - 3);

      const sitTarpHt = Math.round(Math.tan(this.beta * deg2Rad) * sitCover);
      const chairTarpHt = Math.round(Math.tan(this.beta * deg2Rad) * chairCover);

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = sitTarpHt - sitHeight;
      const chairTarpHtClear = chairTarpHt - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, "Wall angle": this.alpha, "Lean angle": this.beta, configName: this.configName, ridgeHt, configImg });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] === 0.5) {
    const SWLT_1to2 = new Config_SWLT("Side-Wall LT 1:2", userTarp[0], userTarp[1], 60, 33.3, SideWallLTImg);
    SWLT_1to2.calcs();

    const Holden_1to2 = new Config_SWLT("Holden Tent 1:2", userTarp[0], userTarp[1], 50, 45, HoldenTentImg);
    Holden_1to2.calcs();
  }

  if (userTarp[0] / userTarp[1] === 0.6) {
    const SWLT_3to5 = new Config_SWLT("Side-Wall LT 3:5", userTarp[0], userTarp[1], 50, 29, SideWallLTImg);
    SWLT_3to5.calcs();

    const Holden_3to5 = new Config_SWLT("Holden Tent 3:5", userTarp[0], userTarp[1], 45, 40, HoldenTentImg);
    Holden_3to5.calcs();
  }

  if (userTarp[1] / userTarp[0] === 1.5) {
    const SWLT_2to3 = new Config_SWLT("Side-Wall LT 2:3", userTarp[0], userTarp[1], 58, 27, SideWallLTImg);
    SWLT_2to3.calcs();

    const Holden_2to3 = new Config_SWLT("Holden Tent 2:3", userTarp[0], userTarp[1], 56, 38, HoldenTentImg);
    Holden_2to3.calcs();
  }

  if (userTarp[0] / userTarp[1] === 0.75) {
    const Holden_3to4 = new Config_SWLT("Holden Tent 3:4", userTarp[0], userTarp[1], 55, 33, HoldenTentImg);
    Holden_3to4.calcs();
  }

  if (userTarp[0] / userTarp[1] === 0.8) {
    const Holden_4to5 = new Config_SWLT("Holden Tent 4:5", userTarp[0], userTarp[1], 58, 30, HoldenTentImg);
    Holden_4to5.calcs();
  }

  // console.log(finalObj);

  if (finalObj.length === 0) {
    return (
      <div className="border border-solid border-slate-400 mt-4 p-4">
        <h3 className="text-2xl font-bold mb-4 mt-2">Side-Wall Configs</h3>
        <p className="mb-3 text-base lg:text-xl">The Side-Wall Lean-To configuration requires a rectangle tarp with a ratio of 1:2, 3:5, or 2:3. The Holden Tent requires the same but can also be 3:4 or 4:5 ratio tarps.</p>
      </div>
    );
  } else {
    return (
      <div>
        {finalObj.map((type, index) => (
          <div key={index} className="flex flex-col justify-center items-center my-8 bg-slate-100 border border-solid border-slate-400 sm:flex-row">
            <img src={type[2].configImg} alt={type[2].configName + ` configuration`} className="w-11/12 border-2 boder-solid border-slate-400 sm:m-4 sm:w-5/12 md:w-1/2" />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-teal-600 mb-4 mt-2 md:text-3xl">{type[2].configName}</h3>
              <p className="mb-1 text-base lg:text-xl">
                Set your <span className="italic">ridgeline height </span>
                to <span className="font-bold">{type[2].ridgeHeight}</span> inches. The resulting <span className="italic">lean angle</span> is {type[2].angle}&deg;.
              </p>
              <p className="mb-1 text-base lg:text-xl">
                Sit under tarp?{" "}
                <span className="text-lg">
                  {type[2].sitTarpHtClear > 0 ? (
                    <>
                      {" "}
                      <FaCheck className="inline-flex h-5 w-5 mb-1  text-green-600" />
                      {"  Yes "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <FaTimes className="inline-flex h-5 w-5 mb-1  text-red-700" />
                      {"  No "}
                    </>
                  )}
                </span>
              </p>
              <p className="mb-1 text-base lg:text-xl">
                Sit in chair under tarp?{" "}
                <span className="text-lg">
                  {type[2].chairTarpHtClear > 0 ? (
                    <>
                      {" "}
                      <FaCheck className="inline-flex h-5 w-5 mb-1  text-green-600" />
                      {" Yes "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <FaTimes className="inline-flex h-5 w-5 mb-1 text-red-700" />
                      {"  No "}
                    </>
                  )}
                </span>
              </p>
              {type[2].sleepDiagClr <= 0 && type[2].sleepClear <= 0 && <p className="mb-3 text-base lg:text-xl">Tarp length is too small for sleeping based on your height.</p>}
              {/* This one is more accurate */}
              {type[2].sleepClear <= 0 && type[2].sleepDiagClr < 6 && (
                <p className="mb-3">
                  <span className="font-semibold">Note</span>: You have to sleep along the diagonal of the tarp shadow because the length is too small.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Config_SWLT;
