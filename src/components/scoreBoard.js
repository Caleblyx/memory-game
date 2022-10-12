import { React, useState, useEffect } from "react";

const ScoreBoard = ({
    currentScore,
    personalRecord
}) => {
    return (
        <div className="score-board">
            <div className="score-card">Current Score: 
                <div>{currentScore}</div>
            </div>
            <div className="score-card">Personal Record: 
                <div>{personalRecord}</div>
            </div>
        </div>
    )

}

export{ScoreBoard}