var calc = function() {
    let prom = prompt("Enter a digit from 1 to 12", "1");
    if (prom < 13 && prom >0) {
    let prom_1 = prom-1;
    var date = new Date(2011, prom_1, 1);
    var month1 = date.toLocaleString('default', { month: 'short' })
    return console.log(month1);
    }
    else return alert("You entered incorrect data")
    }

 module.exports = calc;