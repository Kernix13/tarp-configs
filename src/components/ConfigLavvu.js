import React, { useContext } from "react";
import TarpContext from "../TarpContext";
import { FaTimes, FaCheck } from "react-icons/fa";

import LavvuImg from "../assets/images/Lavvu2.png";

function Config_Lavvu() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_Lavvu {
    constructor(configName, len, width, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.img = img;
    }

    alpha = 60;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const sleepClear = w / 3 - state.height;
      const tarpSize = [this.len, this.width];
      const configImg = this.img;

      const ridgeHeight = Math.round(Math.sin(this.alpha * deg2Rad) * l);

      const cover = Math.round(Math.sin(this.alpha * deg2Rad) * w * 0.333);

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = ridgeHeight - sitHeight;
      const chairTarpHtClear = ridgeHeight - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, height: state.height, configImg });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] === 0.5) {
    const Lavvu = new Config_Lavvu("Lavvu", userTarp[0], userTarp[1], LavvuImg);
    Lavvu.calcs();
  }

  // console.log(finalObj);

  if (finalObj.length === 0) {
    return (
      <div className="border border-solid border-slate-400 mt-4 p-4">
        <h3 className="text-2xl font-bold mb-4 mt-2">Lavvu</h3>
        <p className="mb-3 text-base lg:text-xl">The Lavvu configuration requires a rectangle tarp with a ratio of 1:2.</p>
      </div>
    );
  } else {
    return (
      <div>
        {finalObj.map((type, index) => (
          <div key={index} className="flex flex-col justify-center items-center my-8 bg-slate-100 border border-solid border-slate-400 sm:flex-row">
            <img src={type[2].configImg} alt={type[2].configName + ` configuration`} className="w-9/12 border-2 boder-solid border-slate-400 sm:m-4 sm:w-1/3 md:w-5/12" />
            <div className="p-4">
              {type[2].sleepClear <= 0 ? (
                <>
                  <h3 className="text-2xl font-bold text-teal-600 mb-4 mt-2 md:text-3xl">{type[2].configName}</h3>
                  <p className="mb-3 text-base lg:text-xl">Tarp length is too small for sleeping based on your height.</p>
                </>
              ) : (
                <>
                  {" "}
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
                </>
              )}
              {type[2].sleepDiagClr <= 0 && type[2].sleepClear <= 0 && <p className="mb-3 text-base lg:text-xl">Tarp length is too small for sleeping based on your height.</p>}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Config_Lavvu;
