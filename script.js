console.log("JavaScript Connected Successfully!");
let number = 5;

// 1. Sum of first n numbers
let sum = 0;

for (let i = 1; i <= number; i++) {
    sum = sum + i;
}

console.log("Sum of first", number, "numbers:", sum);


// 2. Multiplication table
console.log("Multiplication Table:");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// 3. Check prime number
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log("Is Prime:", isPrime);


// 4. Print all factors
console.log("Factors:");

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
// 5. Sum of all digits
let temp = number;
let digitSum = 0;

while (temp > 0) {
    digitSum += temp % 10;
    temp = Math.floor(temp / 10);
}

console.log("Sum of digits:", digitSum);


// 6. Check Armstrong number
let temp2 = number;
let digits = number.toString().length;
let armstrongSum = 0;

while (temp2 > 0) {
    let digit = temp2 % 10;
    armstrongSum += digit ** digits;
    temp2 = Math.floor(temp2 / 10);
}

console.log("Is Armstrong:", armstrongSum === number);


// 7. Display all results
console.log("All operations completed successfully!");
