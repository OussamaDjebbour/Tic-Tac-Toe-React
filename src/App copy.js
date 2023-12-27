import { useState } from "react";

// console.log(Array(9).fill(null));

// winningPatterns.map((winningArr, i) => {
//   const [a, b, c] = winningPatterns[i];

//   if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c])
//     return boxes[a];
// });
// return null;

function App() {
  const [box, setBox] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function handleClick() {
    // const condition1 = [...boxes].splice(0, 3).every((el) => el === boxes[i]);
    // const condition2 = [...boxes].splice(3, 3).every((el) => el === boxes[i]);
    // const condition3 = [...boxes].splice(6, 3).every((el) => el === boxes[i]);
  }

  return (
    <div className="app">
      <h1 className="title">
        Tic Tac Toe Game in <span>React</span>
      </h1>
      <div className="board">
        <Row />
        <Row />
        <Row />
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}

function Row() {
  return (
    <div className="row">
      <Box />
      <Box />
      <Box />
    </div>
  );
}

function Box() {
  return <div className="box"></div>;
}

export default App;
