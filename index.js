//write your code here
function findLongestWord(wordArray) {
    // Initialize highest word and highest counter to the first element of array and its length respectively
    // Loop through array
    // If current length is greater than highest counter 
    // Assign highest word and counter to current element and its length
    let highestCounter = wordArray[0].length;
    let highestWord = wordArray[0]
    for (let i = 1; i < wordArray.length; i++) {
        if (wordArray[i].length > highestCounter) {
            highestCounter = wordArray[i].length;
            highestWord = wordArray[i];
        }
    }
    return highestWord;
}

console.log(findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]));                  //returns "jumped"
console.log(findLongestWord(["jazzy", "jumpy", "quaky"])) //returns "jazzy"findLongestWord(["jazzy", "jumpy", "quaky") //returns "jazzy"