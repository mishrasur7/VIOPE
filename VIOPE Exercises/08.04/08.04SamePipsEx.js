
var pip1 = Math.floor(Math.random() * 5) + 1; 
var pip2 = Math.floor(Math.random() * 5) + 1; 
var count = 0; 
while(pip1 != pip2) {
    pip1 = Math.floor(Math.random() * 5) + 1; 
    pip2 = Math.floor(Math.random() * 5) + 1; 
    document.getElementById("answer").innerHTML = "Same dice pips: " + pip1 + " and " + pip2 + "<br /> " 
    + " There were " + count + " randomization rounds until we got the same pips."; 

    count++; 
}

