//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import cubeLogo from "./assets/blue 3d rectangle.svg";
import triLogo from "./assets/triangle logo.svg";
import plogo_1 from "./assets/pain-tings small stroke circle.svg";
//import plogo_2 from "./assets/pain-tings logo.svg";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      {/*<div>
        
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>*/}
      <h1>The Collection</h1>
      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>*/}
      <p className="read-the-docs">
        This is a collection of things I create in Affinity Design <br></br>{" "}
        This is my first project using Vite instead of Create-React-App
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={cubeLogo} alt="Cube Logo" />
        <img src={triLogo} alt="Triangle Logo" width="275px" />
        <img src={plogo_1} alt="pain-tings Logo 1" />
      </div>
    </>
  );
}

export default App;
