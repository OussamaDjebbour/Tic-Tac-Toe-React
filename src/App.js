import { useState } from "react";
import Image from "./components/Image";
import Box from "./components/Box";

function calculateWinner(boxes) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c])
      return boxes[a];
  }
  return null;
}

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

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

  const winner = calculateWinner(boxes);

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
