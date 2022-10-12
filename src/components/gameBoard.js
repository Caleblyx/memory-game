import { React, useState, useEffect } from "react";
import { ScoreBoard } from "./scoreBoard";
import { MemoryBoard } from "./memoryBoard";
import uniqid from "uniqid";
const GameBoard = () => {
    const [memoryCards, setMemoryCards] = useState([
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 1},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 2},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 3},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 4},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 5},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 6},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 7},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 8},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 9},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 10},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 11},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 12},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 13},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 14},
        {uid: uniqid(), isSelectedBefore: false, imageNumber: 15}
    ]
    )

    const [currentScore, setCurrentScore] = useState(0);

    const [personalRecord, setPersonalRecord] = useState(0);

    const selectMemoryCard = (e, uid) => {
        const selectedCard = memoryCards.find(card => card.uid == uid);
        if (selectedCard.isSelectedBefore) {
            const updatedMemoryCards = memoryCards.map(card => {
                return {...card, isSelectedBefore: false};
            })
            setMemoryCards(updatedMemoryCards);

        } else {
            const updatedMemoryCards = memoryCards.map(card => {
                console.log("Card Selected!");
                if (card.uid == uid) {
                    if (card.isSelectedBefore) {
                        
                    }
                    return {...card, isSelectedBefore: true}
                }
                return card;
            })
            setMemoryCards(updatedMemoryCards);  
        }
    }

    useEffect(() => {
        let count = 0
        for (let card of memoryCards) {
            if (card.isSelectedBefore) {
                count++;
            }
        }
        setCurrentScore(count);
        setPersonalRecord(Math.max(currentScore, personalRecord));
    })
    
    return (
        <div class="pip">
            <div class="pipfront">
                <div class="screen-panel">
                    <div class="top">
                        <div class="top-panel"></div>
                    </div>
                    <MemoryBoard memoryCards={memoryCards} selectMemoryCard={selectMemoryCard}/>
                </div>
                <ScoreBoard currentScore={currentScore} personalRecord={personalRecord}/>
            </div>
                
        </div>
    )
}

export{GameBoard}
