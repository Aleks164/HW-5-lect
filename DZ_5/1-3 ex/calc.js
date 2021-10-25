let arrTen = [1,3,5,6,7,32,12,23,13,9];
let calc = function() {
    let sum = arrTen.reduce(sumArr);

    function sumArr(total, value) {
        return total+value;
    } 
    let newArrTen = arrTen.map(multX2);
    function multX2(value){
        return value*2
    }
    let minMax = arrTen.sort(function(a, b){return a - b});
    
    console.log(minMax[0]);
    console.log(minMax[minMax.length-1]);

 };
 module.exports = calc;