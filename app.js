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