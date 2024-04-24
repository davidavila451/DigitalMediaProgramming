/*** Get element with Wisteria ID, if element exist add eventlistener to element ***/
elem=document.getElementById('wisteria');
if(elem){
    document.getElementById('wisteria').addEventListener('click',glitchFunc);//Wait for mouse over text with ID: wisteria
}
	
//Declaration of Glitch Function
function glitchFunc(){
  	/*** Declare all possible random characters that can appear in glitch ***/
	var char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","-","=","<",">","/"];
	const elem = document.getElementById("wisteria")//Get text through unique ID
	var str = elem.innerHTML.split("");//Turn text into array
  	var randStr = [];//Prep Random String Variable
  	var buff = str.slice(0);//Copy text to buffer array

  	/*** Get List of Random Characters equal to word length ***/
  	for(let i=0;i<str.length;i++){
  		randStr[i] = char[Math.floor(Math.random() * char.length)];
  	}
    
    let id = null; //Animation ID
    let pos = 0; //Position in text
    let result=""; //Concatenated Result of step in animation
    let count = str.length; // Text Length
    clearInterval(id); //Reset Animation
    id = setInterval(change, 35); //Run animation at 35 milliseconds speed
  	
    /*** Animation Function ***/
  	function change(){
      	if(pos < count){
  			buff[pos]=randStr[pos];//Change current character in text to random char
			if(buff[pos-1] != null){
          		buff[pos-1] = str[pos-1]; //If previous char isnt null change back to original character
        	}
			result="";//Prep new string
      		for(let j=0;j<buff.length;j++){
        		result += buff[j]; //Convert from array to string
      		}
      		elem.innerHTML = result; //Update frontend text to display current frame in animation
      		pos++;//Move to next character
    	}else{
        	result=""
        	for(let x=0;x<count;x++){
      			result += str[x]; //Convert last character back to original character
    		}
        	elem.innerHTML = result; //Update frontend
      		clearInterval(id); //End animation
      	}
  	}/*** End of Frame Function ***/
}

//File Fetching
function storeFile(){
    const nameObj = document.getElementById("name").value;
    window.localStorage.setItem("name", nameObj);
    nameObj.value = "";
}

function getFile(){
    document.getElementById("displayFile").innerText = "File Content: "+window.localStorage.getItem("name");
}