import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="flex flex-col">
      <h3 className="text-center text-cyan-950 text-xl my-10">
        Background Color Changer
      </h3>
      <div
        className="h-44 w-40 mx-auto mt-5 border-slate-800"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="bg-cyan-900 w-fit flex mx-auto
      p-4 mt-5 rounded-full"
      >
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 px-7 py-3 rounded-lg mx-2"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 px-7 py-3 rounded-lg mx-2"
        >
          Green
        </button>
        <button
          onClick={() => setColor("springgreen")}
          className="bg-green-400 px-7 py-3 rounded-lg mx-2"
        >
          SpringGreen
        </button>
        <button
          onClick={() => setColor("black")}
          className="bg-black px-7 py-3 rounded-lg mx-2 text-white"
        >
          Black
        </button>
        <button
          onClick={() => setColor("orange")}
          className="bg-orange-500 px-7 py-3 rounded-lg mx-2"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-700 px-7 py-3 rounded-lg mx-2"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("pink")}
          className="bg-pink-500 px-7 py-3 rounded-lg mx-2"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 px-7 py-3 rounded-lg mx-2"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 px-7 py-3 rounded-lg mx-2"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("aqua")}
          className="bg-blue-500 px-7 py-3 rounded-lg mx-2"
        >
          Aqua
        </button>
      </div>
    </div>
  );
}

export default App;
