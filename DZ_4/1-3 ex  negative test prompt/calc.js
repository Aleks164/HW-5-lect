let user = {
    name: "Jonn"
};
function assignObj() {
    let input = prompt("Enter a digit", "15");
    user["age"] = input;
    let admin = Object.assign({}, user, {role: 'admin'});
    let {name, age, role} = admin;
    return console.log(name, age, role);
};

 module.exports = calc;