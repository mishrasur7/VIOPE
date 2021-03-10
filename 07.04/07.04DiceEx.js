function randomInteger(from, to) {
    var num = Math.floor(Math.random()*to+from); 
    return num; 
    // Return randomizedNumber between 'from' and 'to'.
    
}

function rollTheDice() {
    var diceValue = randomInteger(1,6); 
    document.getElementById("dice").innerHTML = diceValue; 
    // Call the function randomInteger(from, to) with parameter values 1 and 6.
    // Assign the return value of the function to the variable.
   
    //Insert the value of the variable diceValue into the HTML div element whose id is 'dice'.
    
}