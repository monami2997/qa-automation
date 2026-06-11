// anagram.js

// Function program to check whether two strings are anagrams
function areAnagrams(str1, str2) {
    const normalize = str =>
        str
            .replace(/[^a-z0-9]/gi, "") // remove non-alphanumeric characters
            .toLowerCase()
            .split("")
            .sort()
            .join("");

    return normalize(str1) === normalize(str2);
}

// Example usage
const word1 = "listen";
const word2 = "silent";
const result1 = areAnagrams(word1, word2);
console.log(`${word1} and ${word2} are anagrams:`, result1);

const phrase1 = "Dormitory";
const phrase2 = "Dirty room";
const result2 = areAnagrams(phrase1, phrase2);
console.log(`${phrase1} and ${phrase2} are anagrams:`, result2);

const word3 = "hello";
const word4 = "world";
const result3 = areAnagrams(word3, word4);
console.log(`${word3} and ${word4} are anagrams:`, result3);
