// Create an array with minigolf results of eight players 
var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
    // Sort the array
    minigolf = minigolf.sort(); 
    var min; 
    for (i = 0; i < minigolf.length; i++) {
        min = minigolf[0]; 
    }
    var max; 
    for (i = 0; i < minigolf.length; i++) {
        max = minigolf[minigolf.length - 1]; 
    }
    document.getElementById("answer").innerHTML = "The smallest result is " + min + " (winner)." + "<br />" + "The biggest result is " + max + "."; 


   
    // Assign the smallest result of to a variable
   
    // Assign the index of last array item to an variable
    

    // Assign the biggest result to a variable
    

    // Write the answer on the page, to the answer div, as content of the div
    
}