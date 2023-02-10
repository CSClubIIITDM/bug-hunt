import { useEffect, useState } from "react";
import "./App.css";

const generateColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const colorsWithOutHash = new Array(6)
    .fill(" ")
    .map(() => digits[Math.floor(Math.random() * digits.length)]);
  return "#" + colorsWithOutHash.reduce((prev, curr) => prev + curr, "");
};

export default function App() {
  const [options, setOptions] = useState(["#0000FF", "#FF0000", "#00FF00"]);
  const [answer, setAnswer] = useState("#FF0000");
  const [result, setResult] = useState();
  useEffect(() => {
    startGame();
  }, []);
  function startGame() {
    setResult(undefined);
    const generatedColors = generateColors();
    setOptions(generatedColors);
  }
  function generateColors() {
    const opt = [];
    setAnswer(generateColor());
    opt.push(answer);
    opt.push(generateColor());
    opt.push(generateColor());
    return opt.sort(() => Math.random() - 0.5);
  }
  const handleClick = (option) => {
    if (option === answer) {
      setResult(true);
    } else {
      setResult(false);
    }
  };
  console.log(result, answer, options);

  return (
    <main className="App">
      <div className="color-box" style={{ backgroundColor: answer }}></div>
      <div className="options">
        {options.map((option) => {
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleClick(option)}
            >
              {option}{" "}
            </button>
          );
        })}
      </div>
      <div className={"result " + (result === undefined ? "no-result" : "")}>
        {result !== undefined && (
          <>
            {result === false && (
              <span className="output-dialouge failure">Wrong answer!!</span>
            )}
            {result === true && (
              <span className="output-dialouge success">Correct!!</span>
            )}
          </>
        )}
        <button className="play-again" onClick={startGame}>
          Play again ?
        </button>
      </div>
    </main>
  );
}
