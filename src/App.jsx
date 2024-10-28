import React, { useState } from "react";
import Square from "./UI/Square/Square";
import cl from './App.module.css'
import Restart from "./UI/Restart/Restart";

function App() {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null));
  let stop = false

  function calculatingWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null;
  }

  const winner = calculatingWinner(squares)
  let status;
  if (winner) {
    status = "Winner: " + winner.toUpperCase();
    stop = true
  } else {
    status = "Next player is: " + (xIsNext ? 'X' : 'O');
  }

  function restart() {
    squares.slice(0)
    setSquares(Array(9).fill(null))
  }

  function handleClick(number) {
    if (squares[number] || calculatingWinner[squares]) {
      return;
    }
    if (squares[number]) {
      return;
    }
    const nextSquares = squares.slice()
    if (!stop) {
      if (xIsNext) {
        nextSquares[number] = 'x'
      } else {
        nextSquares[number] = 'o'
      }
      setXIsNext(!xIsNext)
      setSquares(nextSquares)
    }
    
  }


  return (
    <div className={cl.BoardRow}>
      <div>
        <div className={cl.status}>{status}</div>
        <div>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square> 
        </div>
        <div>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square> 
        </div>
        <div>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square> 
        </div>
        <Restart restart={restart}/>
      </div>
    </div>
  );
}

export default App;
