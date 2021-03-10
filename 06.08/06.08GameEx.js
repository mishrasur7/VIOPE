
function play() {
		// Read value from the input field
		var bet = Number(document.getElementById("bet").value); 
		
		// Randomize dice pips between 1-6
		var pips = Math.round((Math.random() * 5) + 1); 

		


		// Calculate win base on pips
		var returnedPay2_4 = bet * 1.25 
		var returnedPay6 = bet * 1.5
		var outPuttext; 
		if (pips === 2) {
			outPuttext = "Pips was 2 - Paid back: " + returnedPay2_4 + " euros"; 
		} else if (pips === 4) {
			outPuttext = "Pips was 4 - Paid back: " + returnedPay2_4 + " euros";
		} else  if (pips === 6) {
			outPuttext = "Pips was 6 - Paid back: " + returnedPay6 + " euros"; 
		} else {
			outPuttext = "No pay"; 
		}
		
		document.getElementById("answer").innerHTML = outPuttext; 


		
		// Write the answer on the page, to the answer div, as content of the div

}
