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
    w = new Worker("./demo_worker.js");
  }
  w.onmessage = function(event) {
     document.getElementById("colorBlock").style.backgroundColor = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

function fetcher(){
  let file = "./hotdog_water.txt"

  fetch (file)
  .then(x => x.text())
  .then(y => document.getElementById("hotdogWater").innerHTML = y);
}

const mapDisplay = document.getElementById("map");

function getLocation() {
  mapDisplay.innerHTML = "Loading..."
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    mapDisplay.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  mapDisplay.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      mapDisplay.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      mapDisplay.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      mapDisplay.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      mapDisplay.innerHTML = "An unknown error occurred."
      break;
  }
}