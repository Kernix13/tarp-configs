import React, { useContext } from "react";
import TarpContext from "../TarpContext";
import { FaTimes, FaCheck } from "react-icons/fa";

import SWAF25Img from "../assets/images/SWAF25.png";
import SWAF33Img from "../assets/images/SWAF33.png";

function Config_SWAF() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_SWAF {
    constructor(configName, len, width, mult1, mult2, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
      this.mult2 = mult2;
      this.img = img;
    }

    alpha = 37;
    beta = 60;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;
      const configImg = this.img;

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * (w * this.mult1) + w * this.mult1);

        const ridgeHeight = Math.min(ridgeHt, state.height);

        if (ridgeHeight === state.height) {
          cover = Math.round(Math.sqrt(Math.pow(w * this.mult2, 2) - Math.pow(ridgeHeight, 2)));
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * w * this.mult2);
        }

        const sleepDiagClr = Math.floor(Math.sqrt(Math.pow(l, 2) + Math.pow(cover, 2))) - state.height;

        const coverClear = Math.round(cover - state.bodyWidth);
        const sitTarpHtClear = ridgeHeight - sitHeight;
        const chairTarpHtClear = ridgeHeight - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt, sleepDiagClr, configImg });

        if (sitTarpHtClear < 7 || chairTarpHtClear < 7) {
          break;
        }
      }
      finalObj.push(outputObj);
    }
  }

  const SWAF_25 = new Config_SWAF("Side-Wall AF 25", userTarp[0], userTarp[1], 0.25, 0.5, SWAF25Img);
  SWAF_25.calcs();

  const SWAF_33 = new Config_SWAF("Side-Wall AF 33", userTarp[0], userTarp[1], 0.333, 0.667, SWAF33Img);
  SWAF_33.calcs();

  // console.log(finalObj);

  return (
    <div>
      {finalObj.map((type, index) =>
        type[2].sleepClear <= 0 && type[2].sleepDiagClr < 6 ? null : (
          <div key={index} className="flex flex-col justify-center items-center my-8 bg-slate-100 border border-solid border-slate-400 sm:flex-row">
            <img src={type[2].configImg} alt={type[2].configName + ` configuration`} className="w-11/12 border-2 boder-solid border-slate-400 sm:m-4 sm:w-5/12 md:w-1/2" />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-teal-600 mb-4 mt-2 md:text-3xl">{type[2].configName}</h3>
              {type[2].coverClear <= 0 ? (
                <p className="mb-3 text-base lg:text-xl">Tarp width is too small for sleeping based on your body measurements. Try a larger tarp or a different configuration.</p>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Config_SWAF;
