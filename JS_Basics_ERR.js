// תרגיל 1


function is_array_numbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("This is not an array.")
    }

    return arr.filter(item => typeof item === "number" && !isNaN(item));

}


console.log(is_array_numbers([10]));


// תרגיל 2

function sumNumbers(arr) {
    try {
        const nums = is_array_numbers(arr);
        return nums.reduce((sum, val) => sum + val, 0);
    } catch (error) {
        console.log("Invalid input");
        return 0;
    }
}


console.log(sumNumbers(10));


// תרגיל 3


function filterLargeSums(arrList, minTotal) {
    if (!Array.isArray(arrList)) {
        throw new Error("arrList must be an array");
    }

    return arrList.filter(subArr => {
        const sum = sumNumbers(subArr);
        return sum >= minTotal;
    });
}


// תרגיל 4

function summaryStats(arrList) {
    const validLists = filterLargeSums(arrList, 10);

    return validLists.map(subArr => {
        const sum = sumNumbers(subArr);
        const count = extractNumbers(subArr).length;
        const average = count > 0 ? sum / count : 0;
        return { sum, average };
    });
}


// תרגיל 5

function safeCalculator(a, b, operation) {
    if (typeof a !== typeof b) {
        throw new Error("Inputs must be of the same type");
    }

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers");
    }

    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) throw new Error("Cannot divide by zero");
            return a / b;
        default:
            throw new Error("Unknown operation");
    }
}
