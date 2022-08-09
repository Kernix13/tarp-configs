import React, { useContext } from "react";
import TarpContext from "../TarpContext";
import { FaTimes, FaCheck } from "react-icons/fa";

import LEANTOImg from "../assets/images/LeanTo.png";
import ltfold0 from "../assets/images/FoldLT.png";
import BWLT25Img from "../assets/images/BWLT25.png";
import ltfold5 from "../assets/images/FoldBWLT25.png";
import BWLT33Img from "../assets/images/BWLT33.png";
import ltfold6 from "../assets/images/FoldBWLT33.png";

function ConfigLT() {
  const state = useContext(TarpContext);

  // const uom = state.unitOfMeasure;
  // const uomMult = [12, 100];
  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;

  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_LT {
    constructor(configName, len, width, mult1, mult2, img, foldImg) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
      this.mult2 = mult2;
      this.img = img;
      this.foldImg = foldImg;
    }

    alpha = 30;
    beta = 50;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;
      const configImg = this.img;
      const configFoldImg = this.foldImg;

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * (w * this.mult1) + w * this.mult2);

        const ridgeHeight = Math.min(ridgeHt, state.height);

        if (ridgeHeight === state.height) {
          cover = Math.round(Math.sqrt(Math.pow(w * this.mult1, 2) - Math.pow(ridgeHeight - w * this.mult2, 2)));
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * w * this.mult1);
        }

        const sleepDiagClr = Math.floor(Math.sqrt(Math.pow(l, 2) + Math.pow(cover, 2))) - state.height;
        const sitCover = Math.round(cover - (sitDepth + 3));
        const chairCover = Math.round(cover - state.chairDepth - 3);

        const sitTarpHt = Math.round(Math.tan(i * deg2Rad) * sitCover);
        const chairTarpHt = Math.round(Math.tan(i * deg2Rad) * chairCover);

        const coverClear = Math.round(cover - state.bodyWidth);
        const sitTarpHtClear = sitTarpHt - sitHeight;
        const chairTarpHtClear = chairTarpHt - state.chairHeight;
        const chairCheck = ridgeHeight - chairTarpHtClear;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt, sleepDiagClr, configImg, chairCheck, chairTarpHt, configFoldImg });

        if (sitTarpHtClear < 4 || chairTarpHtClear < 1) {
          break;
        }
      }
      finalObj.push(outputObj);
    }
  }

  const Lean_To = new Config_LT("Lean-To", userTarp[0], userTarp[1], 1, 0, LEANTOImg, ltfold0);
  Lean_To.calcs();

  const BWLT_25 = new Config_LT("Back-Wall LT 25", userTarp[0], userTarp[1], 0.75, 0.25, BWLT25Img, ltfold5);
  BWLT_25.calcs();

  const BWLT_33 = new Config_LT("Back-Wall LT 33", userTarp[0], userTarp[1], 0.667, 0.333, BWLT33Img, ltfold6);
  BWLT_33.calcs();

  console.log(finalObj);

  // Old jsx at bottom of NOTES.md but this is good
  return (
    <div>
      {finalObj[0][2].sleepDiagClr <= 0 && <p className="mt-5 mb-3 text-center">Your tarp is too small for these configurations.</p>}
      {finalObj.map((type, index) =>
        type[2].sleepClear <= 0 && type[2].sleepDiagClr < 6 ? null : (
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
              {type[2].sleepClear <= 0 && finalObj[0][2].sleepDiagClr > 6 ? (
                <p className="mb-3">
                  <span className="font-semibold">Note</span>: You have to sleep along the diagonal of the tarp shadow because the length is too small.
                </p>
              ) : null}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ConfigLT;
