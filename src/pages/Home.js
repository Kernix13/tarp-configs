import React, { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TarpContext from "../TarpContext";

function Home() {
  const state = useContext(TarpContext);
  const heightRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    heightRef.current.focus();
  }, [state.height]);

  const handleSubmit = e => {
    e.preventDefault();

    if (state.height === "" || state.bodyWidth === "" || state.chairHeight === "" || state.chairDepth === "" || state.tarpLength === "" || state.tarpWidth === "") {
      // need to use toastify or custom CSS
      alert("Please fill out ALL the fields");
    } else {
      console.log(state.height, state.bodyWidth, state.chairHeight, state.chairDepth, state.tarpLength, state.tarpWidth);
    }

    if (state.buttonText === "Submit") {
      navigate("/results");
      // I need additional conditional in the event the user only wants to change the tarp size
      state.setButtonText("Clear");
    } else if (state.buttonText === "Clear") {
      state.setHeight("");
      state.setBodyWidth("");
      state.setChairHeight("");
      state.setChairDepth("");
      state.setTarpLength("");
      state.setTarpWidth("");
      state.setButtonText("Submit");
    }
  };

  return (
    <div className="none">
      <h1 className="text-3xl mb-6 text-gray-500 text-center sm:text-5xl">
        Tarp Configuration <span className="italic">Calculator</span>
      </h1>
      <div className="flex flex-col sm:flex-row">
        <form onSubmit={handleSubmit} id="user-form" className="shadow-lg shadow-slate-400 basis-5/12 bg-gradient-to-br from-slate-50 to-slate-200 mb-4 p-4 xl:basis-5/12">
          <div className="flex flex-col justify-center lg:flex-row md:justify-between">
            <div className="user-dims flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <label className="text-black text-xl lg:text-base pt-4 sm:pt-0" htmlFor="height">
                Height:
              </label>
              <input name="userdimensions" id="height" type="number" className="border-solid border border-slate-400 pl-2 w-48 sm:w-40 lg:w-36 mb-4 mt-1 placeholder:text-slate-500" placeholder="Inches only" value={state.height} onChange={e => state.setHeight(e.target.value)} ref={heightRef} />
            </div>
            <div className="user-dims flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <label className="text-black text-xl lg:text-base" htmlFor="body-width">
                Body width:{" "}
              </label>
              <input name="userdimensions" id="body-width" type="number" className="border-solid border border-slate-400 pl-2 w-48 sm:w-40 lg:w-36 mb-4 mt-1 placeholder:text-slate-500" placeholder="Inches only" value={state.bodyWidth} onChange={e => state.setBodyWidth(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:flex-row md:justify-between">
            <div className="user-dims flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <label className="text-black text-xl lg:text-base" htmlFor="chair-height">
                Chair sit height:
              </label>
              <input name="userdimensions" id="chair-height" type="number" className="border-solid border border-slate-400 pl-2 w-48 sm:w-40 lg:w-36 mb-4 mt-1 placeholder:text-slate-500" placeholder="Inches only" value={state.chairHeight} onChange={e => state.setChairHeight(e.target.value)} />
            </div>
            <div className="user-dims flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <label className="text-black text-xl lg:text-base" htmlFor="chair-depth">
                Chair sit depth:{" "}
              </label>
              <input name="userdimensions" id="chair-depth" type="number" className="border-solid border border-slate-400 pl-2 w-48 sm:w-40 lg:w-36 mb-4 mt-1 placeholder:text-slate-500" placeholder="Inches only" value={state.chairDepth} onChange={e => state.setChairDepth(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:flex-row md:justify-between">
            <div className="user-dims flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <label className="text-black text-xl lg:text-base" htmlFor="tarp-length">
                Tarp Length:
              </label>
              <input name="userdimensions" id="tarp-length" type="number" className="border-solid border border-slate-400 pl-2 w-48 sm:w-40 lg:w-36 mb-4 mt-1 placeholder:text-slate-500" placeholder="Feet only" value={state.tarpLength} onChange={e => state.setTarpLength(e.target.value)} />
            </div>
            <div className="user-dims flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <label className="text-left text-black text-xl lg:text-base" htmlFor="tarp-width">
                Tarp Width:
              </label>
              <input name="userdimensions" id="tarp-width" type="number" className="border-solid border border-slate-400 pl-2 w-48 sm:w-40 lg:w-36 mb-4 mt-1 placeholder:text-slate-500" placeholder="Feet only" value={state.tarpWidth} onChange={e => state.setTarpWidth(e.target.value)} />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <button id="user-submit" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 my-2 border border-cyan-700 hover:border-transparent rounded">
              {state.buttonText}
            </button>
          </div>
        </form>

        <div className="basis-8/12 px-2 ml-4 xl:basis-7/12">
          <p className="mb-3">Enter your dimensions in inches and tarp size in feet to get the ridgeline height in inches for 33 different tarp configurations.</p>
          <ul className="list-disc mt-4 ml-4">
            <li><span className="italic">Body width</span> is the widest part of your body (shoulders or hips).</li>
            <li><span className="italic">Chair sitting height</span> is from head to the ground while in your chair.</li>
            <li><span className="italic">Chair sitting depth</span> is from your head to your knees or feet while in your chair.</li>
            <li>Your tarp dimensions should be as advertised not actual since some designs need exact length-to-width ratios (1:1, 1:2, 2:3, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
