// Looping a triangle
let output = "#";
for (i = 1; i < 8; i++) {
    console.log(output);
    output += "#";
}

// FizzBuzz
for (let count = 1; count <= 100; count++) {
    if (count % 5 == 0 && count % 3 == 0) {
        console.log("FizzBuzz");
    } else if (count % 5 == 0 && count % 3 != 0) {
        console.log("Buzz");
    } else if (count % 3 == 0) {
        console.log("Fizz");
    } else console.log(count);
    }
/*
The solution code looks like this:
    for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
    }

But I don't really understand how the || is operating
*/

// Chess Board

let size = 8;
let board = "";

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);

/* 
That was hard. 
Also, once I had it, I changed size to 40 million and ran it to see what would happen and crashed my browser :)
*/