function calculateProfit() {
    // Read value of rounds from the input field
    var round = Number(document.getElementById("rounds").value); 
    var bet = round; 
    var winCounter = 0; 

    
    // Make a loop which is executed as many times as was set through the input field. 
    var i = 1; 
    while(i <= round) {
        winCounter = winCounter; 
        var pips = Math.round((Math.random() * 5) + 1); 
        if (pips === 1 || pips === 3 || pips === 5) {
            winCounter = winCounter + 0; 
        }
        else if (pips === 2 || pips === 4) {
            winCounter = winCounter + 1.25; 
        }
        else {
            winCounter = winCounter + 1.5; 
        } 
        var profit = round - winCounter; 
        document.getElementById("answer").innerHTML = "Bets were altogether " + bet + " euros" + "<br/>" + "Wins were " + winCounter + " euros "+ "<br/>" + "profit was " + profit + " euros ";   
        i++; 
    }
    // Let win counter cumulating during every round of the loop. 
    
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
     

        // If the randomized pips is 1, 3 or 5,  no pay
        
         // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
       

        // Otherwise the pips 6 returns the inserted bet 150%	
        
    

    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
   

    // Write the answer on the page, to the answer div, as content of the div
   

}