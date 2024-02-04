//Object with properties
var person = {
    firstName: "David",
    lastName: "A",
    age: 25
};

//Functions
function birthdayParty(age){
    console.log("It's Party Time!");
    return age+1;
}

function shout(greeting){
    //Method
    return greeting.toUpperCase();
}

//Event
person["age"] = birthdayParty(person["age"]);
//Error Checking & Printing
console.log(person["age"]);
console.log(shout("hey"));