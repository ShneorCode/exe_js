import { question } from "readline-sync";
import riddlesData from './riddles/allRiddles.js';
import { Riddle, MultipleChoiceRiddle } from './classes/Riddle.js';
import Player from './classes/Player.js';



console.log("welcome to the Riddle Game: ")

const playerName = question("what is your name? ");

const difficulty_level = Number(question("Choose a difficulty level: \n1. Easy \n2. Medium \n3. Hard \n4. Skip"));


const player = new Player(playerName);

if (difficulty_level === 1) {
    riddles = riddles.filter(riddle => riddle.difficulty == "easy")
}
else if (difficulty_level === 2) {
    riddles = riddles.filter(riddle => riddle.difficulty == "medium")

}

else if (difficulty_level === 3) {
    riddles = riddles.filter(riddle => riddle.difficulty == "hard")
}

const riddles = riddlesData.map(data => {
    if (data.type === "multiple") {
        return new MultipleChoiceRiddle(data);
    } else {
        return new Riddle(data);
    }
});

for (const riddle of riddles) {
    const start = Date.now();
    riddle.ask();
    const end = Date.now();
    player.recordTime(start, end);
}

player.showStats();



