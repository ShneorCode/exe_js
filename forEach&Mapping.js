// תרגיל 1

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function doubleValues(numbers) {
    return numbers.map(num => num * 2)

}


console.log(doubleValues(numbers));


// תרגיל 2

function onlyEvenValues(numbers) {
    return numbers.filter(num => num % 2 == 0)
}


console.log(onlyEvenValues(numbers));


// תרגיל 3

const arr = ["sos", 5, true, "mosh"]
function showFirstAndLast(arr) {
    return arr.filter((item, index, arr) => index == 0 || index == arr.length - 1 && typeof item === "string")

}

console.log(showFirstAndLast(arr));


// תרגיל 4 



function vowelCount(str){
    let obj = {};
    const vowels = 'aeiou';
    str = str.toLowerCase();
    arr_str = str.split("");
    arr_str_filter = arr_str.filter(ch => vowels.includes(ch))
    arr_str_filter.forEach(item => {
        if (obj[item]){
            obj[item] += 1;

        }
        else{
            obj[item] = 1;
        }
    });
    
    return obj

}

console.log(vowelCount("abcdoueveeeelaauiioen"));



// תרגיל 5

function capitalize(str){
    let arr_str1 = str.split("");
    arr_str1_map = arr_str1.map(ch => ch.toUpperCase())
    return arr_str1_map.join("");
}


console.log(capitalize("abcdegfHevgn"));
