function showStudyGrant() {
    
		// Read values from the input fields
		var age = Number(document.getElementById("age").value); 
		var withParents = document.getElementById("withParents").value; 

		
		// if student is living with parents and his/her age is greater than 20 or equal
		var outPutText; 
		if (age >= 20 && withParents === "y") {
			outPutText = "The study grant is 136.70 euros."; 
		} else if (age >=20 && withParents === "n") {
			outPutText = "The study grant is 335.20 euros."; 
		} else {
			outPutText = "Ask Kela."; 
		}
		document.getElementById("answer").innerHTML = outPutText; 

		
		      //assign text "The study grant is 335.20 euros." to a variable
			
		//otherwise if ....
		
		
		// Write the answer on the page, to the answer div, as content of the div
}
	