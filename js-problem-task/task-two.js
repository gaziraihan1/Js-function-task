let sampleInput = [5,6,11,12,98, 5];

function checkNumRepeated(sampleInput) {
    let count5=0;
    for(const inp of sampleInput){
        if(inp === 5) {
            count5++;
        }
    };
    let count25 = 0;
    for(const inp of sampleInput) {
        if(inp === 25) {
            count25++;
        }
    }
    return `The 5 have ${count5} times, and 25 have ${count25} times.`;
}
const getFunction = checkNumRepeated(sampleInput);
console.log(getFunction);