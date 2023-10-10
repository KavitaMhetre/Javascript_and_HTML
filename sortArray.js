const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to input numbers separated by commas
rl.question("Enter numbers separated by commas: ", function(input) {
    // Split the input string into an array of numbers
    let numbers = input.split(',').map(Number);

    // Sorting the array in descending order using compare function
    numbers.sort(function(a, b) {
        // Compare function to sort in descending order
        return b - a;
    });

    // Output the sorted array
    console.log("Sorted Array in Descending Order: " + numbers);
    
    rl.close();
});
