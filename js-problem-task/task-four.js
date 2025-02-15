let text = "I am learning Programming to become a programmer";

function findLongestString(text){
    let words = text.split(' ');
    let longestWord = '';
    for(const word of words){
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};
const functionDeclared = findLongestString(text);
console.log(functionDeclared);