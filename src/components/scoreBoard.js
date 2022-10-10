import { React, useState, useEffect } from "react";

const ScoreBoard = ({
    currentScore,
    personalRecord
}) => {
    return (
        <div className="score-board">
            <div className="score-card">Current Score: {currentScore}</div>
            <div className="score-card">Personal Record: {personalRecord}</div>
        </div>
    )

}

export{ScoreBoard}