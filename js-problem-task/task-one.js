function celcToFahrenheit (celcius){
    const celciusToFahrenheit = (celcius * 9/5) + 32;
    return celciusToFahrenheit;
};
const giveValueInCel = celcToFahrenheit(4);
console.log(giveValueInCel);