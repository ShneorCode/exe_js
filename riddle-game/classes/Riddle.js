import { question } from "readline-sync";

class Riddle {
    constructor({ id, type, difficulty, name, taskDescription, correctAnswer }) {
        this.id = id;
        this.difficulty = difficulty;
        this.type = type;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;

    }

    ask() {
        console.log(`\nRiddle ${this.id} - ${this.name}:\n`);
        while (true) {
            const answer = question(`${this.taskDescription}`);
            if (answer === this.correctAnswer) {

                console.log("Correct!");
                break;

            } else {

                console.log("Wrong. Try again.");
            }

        }


    }
}


class MultipleChoiceRiddle extends Riddle {
    constructor({ id, type, difficulty, name, taskDescription, correctAnswer, choices }) {
        super({ id, type, difficulty, name, taskDescription, correctAnswer });
        this.choices = choices;

    }

    ask() {
        console.log(`\nRiddle ${this.id} - ${this.name}:\n`);

        while (true) {
            console.log(`${this.taskDescription}\n`);
            for (let i = 0; i < this.choices.length; i++) {
                console.log(`${i + 1}. ${this.choices[i]}`);
            }
            const answer = question();

            const index = Number(answer) - 1;

            if (isNaN(index) || index < 0 || index >= this.choices.length) {
                console.log("Invalid choice. Please enter a number between 1 and " + this.choices.length);
                continue;
            }

            if (this.choices[index] === this.correctAnswer) {

                console.log("Correct!");
                break;

            } else {

                console.log("Wrong. Try again.\n");
            }

        }


    }

}

export { Riddle, MultipleChoiceRiddle };