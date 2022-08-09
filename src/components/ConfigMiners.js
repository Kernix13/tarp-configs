import React, { useContext } from "react";
import TarpContext from "../TarpContext";
import { FaTimes, FaCheck } from "react-icons/fa";

import MinersTentImg from "../assets/images/Miners_Tent2.png";

function Config_Miners() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_Miners {
    constructor(configName, len, width, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.img = img;
    }

    alpha = 67.5;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      // I did have 0.75 * w for sleepClear, double-check
      const sleepClear = Math.round(0.5 * w - state.height);
      const tarpSize = [this.len, this.width];
      const configImg = this.img;

      // These values give the same results as DD Hamocks has for a 10 x 20
      // was 0.857
      const ridgeHeight = Math.round(0.91 * l);
      // was 0.678
      const cover = Math.round(0.8125 * l);

      const sitCover = Math.round(cover - (sitDepth + 3));
      const chairCover = Math.round(cover - state.chairDepth - 3);

      const sitTarpHt = Math.round(Math.tan(this.alpha * deg2Rad) * sitCover);
      const chairTarpHt = Math.round(Math.tan(this.alpha * deg2Rad) * chairCover);

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = sitTarpHt - sitHeight;
      const chairTarpHtClear = chairTarpHt - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, configImg });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] === 0.5) {
    const Miners_tent = new Config_Miners("Miners Tent", userTarp[0], userTarp[1], MinersTentImg);
    Miners_tent.calcs();
  }

  console.log(finalObj);

  if (finalObj.length === 0) {
    return (
      <div className="border border-solid border-slate-400 mt-4 p-4">
        <h3 className="text-2xl font-bold mb-4 mt-2">Miner's Tent</h3>
        <p className="mb-3 text-base lg:text-xl">The Miner's Tent configuration requires a rectangle tarp with a ratio of 1:2.</p>
      </div>
    );
  } else {
    return (
      <div>
        {finalObj.map((type, index) => (
          <div key={index} className="flex flex-col justify-center items-center my-8 bg-slate-100 border border-solid border-slate-400 sm:flex-row">
            <img src={type[2].configImg} alt={type[2].configName + ` configuration`} className="w-11/12 border-2 boder-solid border-slate-400 sm:m-4 sm:w-1/3 md:w-1/2" />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-teal-600 mb-4 mt-2 md:text-3xl">{type[2].configName}</h3>
              <p className="mb-1 text-base lg:text-xl">
                Attach your tarp to a <span className="italic">ridge pole </span>
                <span className="font-bold">{type[2].ridgeHeight}</span> inches above the ground. The resulting <span className="italic">lean angle</span> is {type[2].angle}&deg;.
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

export default Config_Miners;
