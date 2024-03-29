/********************/
/*** Assignment 3 ***/
/********************/
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

/********************/
/*** Assignment 4 ***/
/********************/

//Object with properties
const age = 25;

const name = "Davidos";

console.log("Hello my name is "+name+" and my age is "+age);

//If Else
if(age > 18){
    console.log("Your age is "+age+". You are older than 18.");
}else if(age < 15){
    console.log("Your age is "+age+". You are really young.");
}else {
    console.log("Your age is "+age+". You are not older than 18");
}

//Switch Case and String Method
switch(name.length){
    case 1:
    case 2:
        console.log("Your name is really short");
        break;
    case 3:
    case 4:
        console.log("Your name is short");
        break;
    case 5:
    case 6:
        console.log("You have a normal length name");
        break;
    default:
        //Number Method    
        console.log("Your name is long. It is "+name.length.toString()+" characters.");
        break;
}

/********************/
/*** Assignment 5 ***/
/********************/
//Declare and Set Data
const text = document.querySelector(".title");
const users = document.querySelectorAll(".name-list li");
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");
const hideName = document.querySelector(".hide-name");
const hideNamesBtn = document.querySelector(".hideNamesBtn");
const revealAllBtn = document.querySelector(".revealAllBtn");

//Add New Names
addListBtn.addEventListener('click', function(){
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);

    newLi.appendChild(liContent);

    userList.appendChild(newLi);
});

//Hide Names Handler
hideNamesBtn.addEventListener('click', function(){
    //For Loop
    for(let i=0; i<users.length; i++){
        if(users[i].innerText.split("")[0] == hideName.value){
            users[i].classList.toggle("hide");
        }
    }
});

//Reveal Names Handler
revealAllBtn.addEventListener('click',function(){
    //While Loop
    let i = 0;
    while(i<users.length){
        if(users[i].classList.contains("hide")){
            users[i].classList.toggle("hide");
        }
        i++;
    }
});

//Change CSS with JS
text.style.color = "red";

/********************/
/*** Assignment 6 ***/
/********************/

//Object
const user = {
    name: 'Edwin',
    age: 24,
    married: false,
    //Array
    purchases: ["phone", "car", "laptop"],

    //Object Method
    sayName: function(){
        console.log("My nanme is "+this.name);
    },

    //Array Method
    numPurch: function(){
        console.log("I have purchased "+this.purchases.length+" items.");
    }
};

//Call of functions
user.sayName();
user.numPurch();
