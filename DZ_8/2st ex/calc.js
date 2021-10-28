let calc = function() {
    let date = new Date();
    let newDate = new Date().setHours(0, 0, 0, 0);
    let diff = date - newDate;
    let diffInMin= diff/1000/60;
    let diffInMinRound = diffInMin.toFixed(0);
    console.log(diffInMinRound);   
 };
 module.exports = calc;