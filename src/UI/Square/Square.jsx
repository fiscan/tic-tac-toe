import React from "react";
import { useState } from "react";
import cl from './Board.module.css'

function Square({value, onSquareClick }) {
  return (
    <button className={cl.cell} onClick={onSquareClick}>{value}</button>
  );
}

export default Square;
