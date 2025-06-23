// תרגילים


// 1 - סכום כל הספרות של מספר בן 5 ספרות
console.log(5);

// דרך 1

let number = 58423;

let num = 0;

let sum_numbers = 0;

while (number > 0) {
    num = number % 10;
    number = Math.floor(number / 10);
    sum_numbers += num;
}

console.log(sum_numbers);

// דרך 2

let number1 = 12345;

let sum_numbers1 = 0;

let string_number1 = number1.toString();

for (let ch in string_number1) {
    sum_numbers1 += Number(ch);

}
console.log(sum_numbers1);

// 2 - יצירת משולש מכוכבים

let number_user = 5;

for (let i = 1; i <= number_user; i++) {
    let star = "* ";
    console.log(star.repeat(i))


};


// 3 - מצא את המספר הגדול מבין 5 מספרים
let nun01 = 40;
let nun02 = 20;
let nun03 = 30;
let nun04 = 50;
let nun05 = 10;

let arr01 = [];

arr01.push(nun01, nun02, nun03, nun04, nun05);

let max_number = arr01[0];

for (let i = 0; i < arr01.length; i++) {
    if (arr01[i] > max_number) {
        max_number = arr01[i];
    }
}

console.log(max_number);


// 4 - ספירת מספר ספרות במספר

// דרך 1

let number_01 = 1235678;


let sum_digits_numbers = 1;

while (number_01 > 10) {
    number_01 = Math.floor(number_01 / 10);
    sum_digits_numbers += 1;
}

console.log(sum_digits_numbers);

// דרך 2

let number_02 = 15678;

let sum_digits_numbers2 = 0;

let string_number2 = number_02.toString();

for (let ch in string_number2) {
    sum_digits_numbers2 += 1;

}
console.log(sum_digits_numbers2);


// 5 - הדפסת כל המספרים הזוגיים בין שני ערכים

let number_start = 8;
let number_end = 23;

for (let i = number_start; i <= number_end; i++) {
    if (i % 2 == 0) {
        console.log(i);

    }

}


