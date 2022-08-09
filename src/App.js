import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Configs from "./pages/Configs";
import Calcs from "./pages/Calcs";
import NotFound from "./pages/NotFound";
import Results from "./pages/Results";

// Context
import TarpContext from "./TarpContext";

// Files
// import TarpsArray from "./data/TarpsArray";

function App() {
  const [height, setHeight] = useState("");
  const [bodyWidth, setBodyWidth] = useState("");
  const [chairHeight, setChairHeight] = useState("");
  const [chairDepth, setChairDepth] = useState("");
  const [tarpLength, setTarpLength] = useState("");
  const [tarpWidth, setTarpWidth] = useState("");
  const [unitOfMeasure, setUnitOfMeasure] = useState("US");
  const [buttonText, setButtonText] = useState("Submit");

  return (
    <TarpContext.Provider value={{ height, setHeight, bodyWidth, setBodyWidth, chairHeight, setChairHeight, chairDepth, setChairDepth, tarpLength, setTarpLength, tarpWidth, setTarpWidth, unitOfMeasure, setUnitOfMeasure, buttonText, setButtonText }}>
      <Router>
        {/* need a larger font-size */}
        <div className="text-lg flex flex-col justify-between h-screen">
          <NavBar />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
              <Route path="/configs" element={<Configs />} />
              <Route path="/calcs" element={<Calcs />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TarpContext.Provider>
  );
}

export default App;
