import "./App.css";
import Clock from "./components/Clock";
import DrumMachine from "./components/DrumMachine";
import JavaScriptCalculator from "./components/JavaScriptCalculator";
import MarkdownPreviewer from "./components/MarkdownPreviewer";
import RandomQuote from "./components/RandomQuote";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/randomquote" className="nav-item nav-item-1">
            {" "}
            randomquote{" "}
          </Link>
          <Link to="/markdownpreviewer" className="nav-item nav-item-2">
            {" "}
            markdownpreviewer{" "}
          </Link>
          <Link to="/drummachine" className="nav-item nav-item-3">
            {" "}
            DrumMachine{" "}
          </Link>
          <Link to="/javascriptCalculator" className="nav-item nav-item-4">
            {" "}
            javascriptcalculator{" "}
          </Link>
          <Link to="/clock" className="nav-item nav-item-5">
            {" "}
            clock{" "}
          </Link>
        </nav>

        <Routes>
          <Route path="/randomquote" element={<RandomQuote />} />
          <Route path="/markdownpreviewer" element={<MarkdownPreviewer />} />
          <Route path="/drummachine" element={<DrumMachine />} />
          <Route
            path="/javascriptcalculator"
            element={<JavaScriptCalculator />}
          />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
