function reverseString(strings){
    // storage for reversed string
    let reversedString = "";

    // Iterate each characters in reverse order
    for (let i = strings.length - 1; i >= 0; i--) {
        // link the letters in "reversedString"
        reversedString += strings[i]
    }
    return reversedString;
}

// strings
const stri1 = "Hello This is me, Joshua!"
const stri2 = "Morality can only come from God."
const lol = "racecar a si sihT"

// print to console
console.log("First String: " + stri1)
console.log("The reversed string of the first string is: " + reverseString(stri1))

console.log("Second String: " + stri2)
console.log("The reversed string of the second string is: " + reverseString(stri2))

console.log("Third String: " + lol)
console.log("The reversed string of third string is: " + reverseString(lol))