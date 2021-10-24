var calc = function() {
    let prompt = prompt("Enter a three-digit number", "123");
    let split = prompt.split();
    let sum = split[0]+split[1]+split[2];
    return console.log(sum);
 };

 module.exports = calc;