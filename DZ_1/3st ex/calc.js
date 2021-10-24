var calc = function() {
    let prom = prompt("Enter a three-digit number", "123");
    let split = prom.split("");
    let sum = 0;
    
    for(let i=0; i<split.length; i++) {

      sum += Number(split[i]); 
     
    }
    return console.log(sum);
 };

 module.exports = calc;