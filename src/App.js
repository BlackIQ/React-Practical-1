import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";

function App() {
  return (
      <React.Fragment>
          <Navbar />
          <div className="container-fluid">
              <Counters />
          </div>
      </React.Fragment>
  );
}

export default App;
