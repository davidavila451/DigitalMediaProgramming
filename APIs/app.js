function myFunction() {
    const inpObj = document.getElementById("id1");
    inpObj.setCustomValidity("You must enter a valid zip code")
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    } 
  }

function goBack(){
    document.getElementById("history").innerText = "You have visited "+window.history.length+" pages before visiting this one.";
}

function storeName(){
    const nameObj = document.getElementById("name").value;
    window.localStorage.setItem("name", nameObj);
}

function getName(){
    document.getElementById("displayName").innerText = "Last saved name was: "+window.localStorage.getItem("name");
}

let w;

function startWorker() {
  if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}