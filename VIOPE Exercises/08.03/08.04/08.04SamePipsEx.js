// Randomize the pips once
var pip1 = Math.floor(Math.random() * 5) + 1; 
var pip2 = Math.floor(Math.random() * 5) + 1; 
var i = 1; 
while(i <= pip1) {
    if (pip1 === pip2) {
    document.getElementById("answer").innerHTML = "Same dice pips: " + pip1 + " and " + pip2; 
}
    i++
}
document.write("There were " + i + " rounds until we got the same pips."); 

// Set the count to be one (now you have randomized once)


// Repeat as long as (pips are not equal) 


    // Randomize again
    
    // Increment counter by one


// Write the answer (including the count) to the html page (answer div)
