import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  let inputColor;
  function handleChange(e) {
    inputColor = e.target.value;
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-col flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <div className="flex justify-center ">
            <button
              onClick={() =>
                setColor(
                  prompt(
                    "Write your favourite color (hexcode or hard value only)"
                  )
                )
              }
              className="outline-none shadow-lg py-1 rounded-lg text-white px-24"
              style={{ backgroundColor: "#4CAF50" }}
            >
              Pass your favourite color
            </button>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-lg text-white shadown-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 rounded-lg text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 rounded-lg text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 rounded-lg text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 rounded-lg text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
          <div className="flex justify-center gap-10">
            <input
              type="text"
              placeholder="Color"
              className="border-2 border-black rounded-lg text-center cursor-pointer"
              onChange={handleChange}
            />
            <button
              onClick={() => setColor(inputColor)}
              className="outline-none px-5 py-1 text-white rounded-lg shadow-lg"
              style={{ backgroundColor: "#4CAF50" }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
