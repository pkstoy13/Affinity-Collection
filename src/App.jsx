//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import cubeLogo from "./assets/blue 3d rectangle.svg";
import triLogo from "./assets/triangle logo.svg";
import plogo_1 from "./assets/pain-tings small stroke circle.svg";
//import plogo_2 from "./assets/pain-tings logo.svg";
import { ImageUploader } from "./components/ImageUploader";

export function App() {
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
      <div className="h-screen bg-gray-800">
        <div className="flex flex-col items-center text-cerise-red-50">
          <h1 className="text-3xl mt-12 font-mono">Affinity Collection </h1>
          <p className="mb-4">
            {" "}
            This is a collection of things I create in Affinity Design
          </p>
        </div>
        <div className="w-4/6 mx-auto grid grid-cols-3 justify-center  items-center">
          <img
            src={cubeLogo}
            alt="Cube Logo"
            className="tile hover:bg-cerise-red-50 hover:scale-105"
          />
          <img src={triLogo} alt="Triangle Logo" className="tile" />

          <img src={plogo_1} alt="pain-tings Logo 1" className="tile" />
          <ImageUploader />
        </div>
      </div>
    </>
  );
}
