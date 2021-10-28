var calc = function() {
    let prom = window.prompt("Enter a three-digit number", "123");
    let split = prom.split("");
    let sum = Number(split[0])+Number(split[1])+Number(split[2]);
    if(split.length===3&&((typeof sum)==="number")) return console.log(sum);
    else return console.log("Wrong value");
    
 };

 module.exports = calc;