import { React, useState, useEffect } from "react";
import adamantiumSkeleton from "../images/adamantium_skeleton.webp"
import commando from "../images/commando.webp"
import comprehension from "../images/comprehension.webp"
import computerWhiz from "../images/computer_whiz.webp"
import entomologist from "../images/entomologist.webp"
import fastMetabolism from "../images/fast_metabolism.webp"
import lightTouch from "../images/light_touch.webp"
import mysteriousStranger from "../images/mysterious_stranger.webp"
import ninja from "../images/ninja.webp"
import paralyzingPalm from "../images/paralyzing_palm.webp"
import retention from "../images/retention.webp"
import solarPowered from "../images/solar_powered.webp"
import swiftLearner from "../images/swift_learner.webp"
import travelLight from "../images/travel_light.webp"
import weaponHandling from "../images/weapon_handling.webp"

const images = {
    1 : adamantiumSkeleton,
    2 : commando,
    3 : comprehension,
    4 : computerWhiz,
    5 : entomologist,
    6 : fastMetabolism,
    7 : lightTouch,
    8 : mysteriousStranger,
    9 : ninja,
    10 : paralyzingPalm,
    11 : retention,
    12 : solarPowered,
    13 : swiftLearner,
    14 : travelLight,
    15 : weaponHandling

}

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
        memoryCardList.push(<div key={card.uid} className="memory-card" onClick={ e => selectMemoryCard(e, card.uid)}>
            <img className="memory-image" src = {images[card.imageNumber]} ></img>
        </div>)})
        shuffle(memoryCardList);
    return(
            <div class="screen-border">
                <div class="screen">
                        {memoryCardList}
                </div>
            </div>
    )
}

export{MemoryBoard}