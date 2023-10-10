const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Reverse each word in the array
    let reversedWords = words.map(word => {
        // Reverse the characters of the word
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Ask user for input
rl.question("Enter a sentence: ", function(inputSentence) {
    if (inputSentence.trim() !== "") {
        let reversedSentence = reverseWords(inputSentence);
        console.log("Reversed Sentence: " + reversedSentence);
    } else {
        console.log("No input provided.");
    }
    
    rl.close();
});
