let haveVowels = 'Hello i am raihan gazi, and i am a good man, and what about you';
function checkVowels(vowels) {
    let count = 0;
    let vowelList = 'aeiou';
    for (let char of vowels) { 
        if (vowelList.includes(char)) {
            count++;
        }
    }
    return count;
}
const vowelDeclared = checkVowels(haveVowels);
console.log(vowelDeclared);