// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function reimbursement(length) {
	length = parseInt(length); 
	var reimbursement; 
	if(length <= 10) {
		reimbursement = 8.00; 
	} else if(length > 10 && length <= 20) {
		reimbursement = 11.00;
	} else if(length > 20 && length <= 30) {
		reimbursement = 13.50; 
	} else if(length > 30 && length <= 45) {
		reimbursement = 16.50; 
	}else {
		reimbursement = 21.00; 
	}
	return reimbursement; 
}


// Define a function  
function calculate() {
		// Read values from the input fields
		var length = Number(document.getElementById("length").value); 
		var doctorsFee = Number(document.getElementById("doctorsFee").value); 
		// Call the function (1.) which calculates and returns Kela reimbursement 
		var output = reimbursement(length); 
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = 
		"Length of visit is " + length + " minutes." + "<br />" + "Kela reimbursement is " + output.toFixed(2) + " euros."; 
}

