import { React, useState, useEffect } from "react";
import { ScoreBoard } from "./scoreBoard";
import { MemoryBoard } from "./memoryBoard";
const GameBoard = () => {
    
    return (
        <div className="game-board">
            <ScoreBoard/>
            <MemoryBoard/>
        </div>
    )
}

export{GameBoard}
