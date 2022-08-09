import React, { useContext } from "react";
import TarpContext from "../TarpContext";
import { FaTimes, FaCheck } from "react-icons/fa";

import DiamondImg from "../assets/images/Diamond.png";

function Config_Dia() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_Dia {
    constructor(configName, len, width, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.img = img;
    }

    alpha = 30;
    beta = 60;

    calcs() {
      const l = this.len * 12;
      const diagonal = Math.round(Math.sqrt(Math.pow(l, 2) * 2));
      const sleepClear = diagonal - state.height;
      const tarpSize = [this.len, this.width];
      const configImg = this.img;

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * (diagonal * 0.5));

        const ridgeHeight = Math.min(ridgeHt, state.height);

        if (ridgeHeight === state.height) {
          cover = Math.round(Math.sqrt(Math.pow(diagonal / 2, 2) - Math.pow(ridgeHeight, 2)) * 2);
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * diagonal);
        }

        const coverClear = cover - state.bodyWidth;
        const sitTarpHtClear = ridgeHeight - sitHeight;
        const chairTarpHtClear = ridgeHeight - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt, configImg, diagonal });

        if (sitTarpHtClear < 7 || chairTarpHtClear < 7) {
          break;
        }
      }
      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] === userTarp[1]) {
    const Diamond = new Config_Dia("Diamond", userTarp[0], userTarp[1], DiamondImg);
    Diamond.calcs();
  }

  // console.log(finalObj);

  if (finalObj.length === 0) {
    return (
      <div className="p-0 border border-dotted border-slate-600 bg-slate-100 mt-6 px-4 py-8">
        <p className="text-center mb-3 text-xl lg:text-2xl">Diagonal configurations require a square tarp.</p>
      </div>
    );
  } else {
    return (
      <div>
        {finalObj[0][2].sleepClear <= 0 ? <p className="mt-5 mb-3 text-center">Your tarp is too small for these configurations.</p> : null}
        {finalObj.map((type, index) =>
          // BINGO - CHECK OTHER DIAGONALS
          type[2].sleepClear <= 0 ? null : (
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
                {type[2].sleepClear <= 0 && <p className="mb-3 text-base lg:text-xl">Tarp length is too small for sleeping based on your height.</p>}
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default Config_Dia;
