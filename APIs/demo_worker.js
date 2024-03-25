const alpha = ["A", "B", "C", "D", "E", "F"];

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor(){
    let rndArray = [];
    for(let i=0; i<6; i++){
        let buff = randomIntFromInterval(0,15).toString();
        if(buff == "10"){
            rndArray[i] = "A"
        }else if(buff == "11"){
            rndArray[i] = "B"
        }else if(buff == "12"){
            rndArray[i] = "C"
        }else if(buff == "13"){
            rndArray[i] = "D"
        }else if(buff == "14"){
            rndArray[i] = "E"
        }else if(buff == "15"){
            rndArray[i] = "F"
        }else{
            rndArray[i] = buff;
        }
    }

    let hexColor = "#"+rndArray[0]+rndArray[1]+rndArray[2]+rndArray[3]+rndArray[4]+rndArray[5];
    postMessage(hexColor);
    setTimeout("getRandomColor()",250);
}

getRandomColor();