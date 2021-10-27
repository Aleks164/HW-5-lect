var calc = function() {
    let prom = prompt("Enter a three-digit number", "123");
    let split = prom.split("");
    let sum = split[0]+split[1]+split[2];
    return console.log(sum);
 };

 module.exports = calc;