import { useState } from "react";
import Image from "./components/Image";
import Box from "./components/Box";
import calculateWinner from "./calculateWinner";

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(boxes);

  function handleClick(i) {
    if (boxes[i] || calculateWinner(boxes)) return;
    boxes[i] = isX ? "cross" : "circle";
    setBoxes(boxes);
    setIsX(!isX);
  }

  function handleReset() {
    setBoxes((boxes) => boxes.map((box) => null));
    setIsX(true);
  }

  return (
    <div className="app">
      <h1 className="title">
        Tic Tac Toe Game in <span>React</span>
      </h1>
      <div className="board">
        {boxes.map((box, i) => (
          <Box
            box={box}
            i={i}
            boxes={boxes}
            handleClick={handleClick}
            key={i}
          />
        ))}
      </div>
      {winner ? (
        <p>
          Winner: <Image player={winner} className="icon-player" />
        </p>
      ) : (
        <p>
          Next Player:
          {isX ? (
            <Image player={"cross"} className="icon-player" />
          ) : (
            <Image player={"circle"} className="icon-player" />
          )}
        </p>
      )}
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
