var life = 100; //Global variable NUMBER (INT)

const Cake = {  //Object variable
    flavor: "Chocolate",
    shape: "Round",
    frosting: "Strawberry"
};

function func(life){
    let blockA = "Foo"; //Block variable STRING
    console.log(blockA);
    life=life+10; //Mathematical Operation
    return life;
}
console.log(func(life));
