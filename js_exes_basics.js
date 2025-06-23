// תרגול יסודות ג'אווה סקריפט


// תרגיל 1 - החלפת משתנים ללא שימוש במשתנה זמני

let str1 = "some string";
let str2 = "other string";


str1 = str1 + str2;
console.log(str1)

str2 = str1.slice(0, str1.length - str2.length);
console.log(str2);


str1 = str1.slice(str1.length - str2.length - 1);
console.log(str1);


// תרגיל 2 - מציאת איקסים במערך דו מימדי

const d2 = [
    ['O', 'X', 'O', 'X', 'O'],
    ['x', 'O', 'O', 'x', 'O'],
    ['x', 'O', 'X', 'X', 'x'],
    ['X', 'O', 'x', 'O', 'O'],
    ['O', 'x', 'O', 'X', 'O']
];

let num_of_x = 0;

let index_of_x = [];

for (let i = 0; i < d2.length; i++) {
    for (let j = 0; j < d2[i].length; j++) {
        if (d2[i][j] == "X") {
            num_of_x += 1;
            index_of_x.push([i, j]);
        }
    }
}

console.log(num_of_x);
console.log(index_of_x);


// תרגיל 3 - גישה לערך באובייקט

let family = { parents: {}, children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }] };

console.log(family.children[2].name);

let children = family.children.map(child => child.name).join(",")

console.log(children);


// תרגיל 4 - הפיכת מערך

const arrNumbrs = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < Math.floor(arrNumbrs.length / 2); i++) {
    let temp = arrNumbrs[i];
    arrNumbrs[i] = arrNumbrs[arrNumbrs.length - 1 - i];
    arrNumbrs[arrNumbrs.length - 1 - i] = temp;
}
console.log(arrNumbrs);


// תרגיל 5 - ספירת סוגים במערך

const arr_all = [null, 5, 2, 3, null,
    "sos", { name: "avi" }, "sss", "abs",
    true, true, false, true, true]

    
let numCount = 0;
let strCount = 0;
let boolCount = 0;
let objCount = 0;
let nullCount = 0;

for (let item of arr_all) {
  if (item === null) {
    nullCount++;
  } else {
    let type = typeof item;
    if (type === "number") {
      numCount++;
    } else if (type === "string") {
      strCount++;
    } else if (type === "boolean") {
      boolCount++;
    } else if (type === "object") {
      objCount++;
    }
  }
}

console.log("Numbers:", numCount);
console.log("Strings:", strCount);
console.log("Booleans:", boolCount);
console.log("Objects:", objCount);
console.log("Nulls:", nullCount);


