import React from "react";
import cl from "./Restart.module.css"

function Restart({restart}) {
  return (
    <div>
      <button onClick={restart} className={cl.restartBtn}>Restart the Game</button>
    </div>
  );
}

export default Restart;
