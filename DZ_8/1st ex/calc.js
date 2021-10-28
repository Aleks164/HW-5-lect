let calc = function() {
    let date = window.prompt("Pelease input date format with dd.mm.yyyy in the input field");
    let [day, month, year] = date.split(".");
    let newDate = new Date(day, month-1, year);
    var dayOfWeek = newDate.toLocaleString('default', { weekday: 'long' });
    console.log(dayOfWeek);   
 };
 
 module.exports = calc;