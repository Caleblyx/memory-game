import { React, useState, useEffect } from "react";

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;   
}

const MemoryBoard = ({
    memoryCards,
    selectMemoryCard
}) => {
    const memoryCardList = []
    memoryCards.forEach(card => {
        memoryCardList.push(<div key={card.uid} className="memory-card" onClick={ e => selectMemoryCard(e, card.uid)}>{card.imageNumber}</div>)})
        shuffle(memoryCardList);
    return(
        <div className="memory-board">
            {memoryCardList}
        </div>
    )
}

export{MemoryBoard}