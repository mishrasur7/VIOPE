function comparePackages() {
	
		// assign input field values into a variables
		var textMessages = Number(document.getElementById("textMessages").value); 
		var callTime = Number(document.getElementById("callTime").value); 
		
		// calculate the costs of the Special Package
		var specialPakageCost = 19.90 + textMessages * 0.069 + callTime * 0.069; 

		// If the Special package is cheaper than the All-inclusive package 
		var outPutText; 
		if (specialPakageCost < 29.90) {
			outPutText = "The special package " + "(" + specialPakageCost.toFixed(2) + ")" + "is cheaper than the All-inclusive package (29.90)"; 
		}
		else {
			outPutText = "The All-inclusive package (29.90) is cheaper than the special package " + "(" + specialPakageCost.toFixed(2) + ")"; 
		}
		document.getElementById("answer").innerHTML = outPutText; 
			// assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
			// to a variable
					
		// otherwise
			// assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
			// to a variable
		
		// write the answer to the web page DOM, in the answer div, as the content
		
}