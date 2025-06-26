import { question } from "readline-sync";
import riddlesData from './riddles/allRiddles.js';
import Riddle from './classes/Riddle.js';
import Player from './classes/Player.js';



console.log("welcome to the Riddle Game: ")

const playerName = question("what is your name? ");


const player = new Player(playerName);

const riddles = riddlesData.map(data => new Riddle(data));

for (const riddle of riddles) {
    const start = Date.now();
    riddle.ask();
    const end = Date.now();
    player.recordTime(start, end);
}

player.showStats();



