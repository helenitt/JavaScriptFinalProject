// Star JavaScript Document  Helen O'Brien T00183586 

//Image Changer
var curImage = "kilkenny";
function homes() {
  if(curImage == "kilkenny") {
    document.images[1].src = "images/cott.jpg";
    curImage = "cottages";
    }
  else if(curImage == "cottages") {
    document.images[1].src = "images/slogan1.jpg";
    curImage = "slogan1";
    }
  else if(curImage == "slogan1") {
    document.images[1].src = "images/home1.png";
    curImage = "home1";
    }
  else if(curImage == "home1") {
    document.images[1].src = "images/home-fire.png";
    curImage = "home-fire";
    }
  else if(curImage == "home-fire") {
    document.images[1].src = "images/home2.png";
    curImage = "home2";
    }
    else if(curImage == "home2") {
    document.images[1].src = "images/home-flood.png";
    curImage = "home-flood";
    }
    else if(curImage == "home-flood") {
    document.images[1].src = "images/home3.png";
    curImage = "home3";
    }
    else if(curImage == "home3") {
    document.images[1].src = "images/home-roof.png";
    curImage = "home-roof";
    }
    else if(curImage == "home-roof") {
    document.images[1].src = "images/home4.png";
    curImage = "home4";
    }
    else if(curImage == "home4") {
    document.images[1].src = "images/slogan2.jpg";
    curImage = "slogan2";
    }
  else {
    document.images[1].src = "images/kilkenny.jpg";
    curImage = "kilkenny";
    }
} 
//Help 
function helpQ1(){
     document.getElementById("q1").style.display = "block";
}
function hideQ1() {
     document.getElementById("q1").style.display = "none";
}
function helpQ2(){
     document.getElementById("q2").style.display = "block";
}
function hideQ2(){
     document.getElementById("q2").style.display = "none";
} 
function helpQ3(){
     document.getElementById("q3").style.display = "block";
}
function hideQ3(){
     document.getElementById("q3").style.display = "none";
}
function helpQ4(){
     document.getElementById("q4").style.display = "block";
}
function hideQ4(){
     document.getElementById("q4").style.display = "none";
}
function helpQ5(){
     document.getElementById("q5").style.display = "block";
}
function hideQ5(){
     document.getElementById("q5").style.display = "none";
}
function helpQ6(){
     document.getElementById("q6").style.display = "block";
}
function hideQ6(){
     document.getElementById("q6").style.display = "none";
}
function helpQ7(){
     document.getElementById("q7").style.display = "block";
}
function hideQ7(){
     document.getElementById("q7").style.display = "none";
}
function helpQ8(){
     document.getElementById("q8").style.display = "block";
}
function hideQ8(){
     document.getElementById("q8").style.display = "none";
}
function helpQ9(){
     document.getElementById("q9").style.display = "block";
}
function hideQ9(){
     document.getElementById("q9").style.display = "none";
}
function helpQ10(){
     document.getElementById("q10").style.display = "block";
}
function hideQ10(){
     document.getElementById("q10").style.display = "none";
}

// Record Answers
var info = new Array("Own or Rent", "Location of House", "Type of House", 
                     "Age of House", "House Alarm", "Smoke Detectors", 
                     "Buildings Cover", "Contents Cover", "Claims Free Period", 
                     "Claim Excess");
var values = new Array(10);

//Setting values to empty string
for(var g=0; g<values.length; g++) {
    values[g] = "";
}
//Radio Buttons
function recordValues(question,fig) {
    values[question - 1] = fig;
  }
  
//Selection Lists
function getLocation() {
    values[1] = parseInt(document.quote.houselocation.value);
  }
function getType() {
    values[2] = parseInt(document.quote.housetype.value);
  }
function getAge() {
    values[3] = parseInt(document.quote.houseage.value);
  }
function getContents() {
    values[7] = parseInt(document.quote.contentscover.value);
  }
function getClaimFree() {
    values[8] = parseInt(document.quote.claimfree.value);
  }

//Text Box
function getBuildingCover() {
     values[6] = parseInt(document.quote.buildingcover.value);
     if(isNaN(values[6])) {
        alert("Value must be numeric");
        setTimeout(function() { document.getElementById("b").focus(); }, 1);
        }
     if(values[6]<100000) {  
        alert("The value must be greater than €100,000 please re-enter a value");
        setTimeout(function() { document.getElementById("b").focus(); }, 1);
       } 
  }

  
//Calculator
function calcPremium() {
  var premium=0;
  var text="";
  var missing="Please fill in the following details:-\n\n";
  var message = new Array(10);
      message[0] = "Property Ownership";
      message[1] = "Property Location";
      message[2] = "Property Type";
      message[3] = "Property Age";
      message[4] = "Alarm System";
      message[5] = "Smoke Detectors";
      message[6] = "Buildings Cover";
      message[7] = "Contents Cover";
      message[8] = "Claim Free Period";
      message[9] = "Claim Excess";
      
  /* Validation */
  for(var k=0; k<values.length; k++) {
    if(values[k] == "") 
      missing += message[k] + "\n";    
  }
  if(missing != "Please fill in the following details:-\n\n") {
    alert(missing);
    setTimeout(function() { document.getElementById("a").focus(); }, 1); 
    return false; 
  }

//Simple Validation
/*  if(values[0] == "" || values[1] == "" || values[2] == "" || values[3] == "" || values[4] == "" ||
     values[5] == "" || values[6] == "" || values[7] == "" || values[8] == "" || values[9] == "" ) {
         alert("Please fill in all the information");
         return false;  
     } 
*/
  
  for(var i=0; i<info.length; i++) {
    premium += values[i]; 
  }
  for(var j=0; j<info.length; j++) {
    text += info[j] + ":  €" + values[j] + "\n";  
  }
  text += "\nYour Premium would be:- €" + premium;
  document.quote.txtarea.value = text;
} 