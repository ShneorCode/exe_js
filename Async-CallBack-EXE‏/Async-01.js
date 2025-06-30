import fs, { stat } from "fs";
import path from "path";
import os from 'os';

// תרגיל 1

fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File Content:", data);

    fs.stat("./test.txt", (err, stats) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Size:", stats.size, "bytes");
        console.log("Created At:", stats.birthtime);

    })


})


// תרגיל 2

fs.readdir("./", (err, files) => {

    if (err) {
        console.log(err);
        return;
    }

    files.forEach(file => {
        const fullPath = path.join("./", file)


        fs.stat(fullPath, (err, stats) => {
            if (err) {
                console.log(err);
                return;
            }
            if (stats.isFile()) {
                console.log("file: ", file);
            }

        })

    })
})


// תרגיל 3

function timer(n) {

    if (n === 0) {
        console.log("Time's up!");
        return;
    }
    console.log(n);

    setTimeout(() => {
        timer(n - 1);
    }, 1000);
}

timer(5);


// תרגיל 4


fs.readFile("./quotes.txt","utf-8", (err, data) => {
    if (err){
        console.log(err);
        return;
    }

    const lines = data.split('\n');

    const line = lines[Math.floor(Math.random() * lines.length)];

    console.log(line);

})


// תרגיל 5

let count = 0;

function print_free_memory() {
    
    if (count < 5) {
        count++;
        const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
        const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
        const freeMemoryPercentage = (freeMemGB / totalMemGB * 100).toFixed(2);
        console.log(`Free Memory: ${freeMemoryPercentage}%`);
    }
    else {
        clearInterval(intervalId);
        console.log('Memory logging complete.');
    }
}

const intervalId = setInterval(print_free_memory, 2000)

