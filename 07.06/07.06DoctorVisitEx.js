// Defne a function (1.) 
function maxReimbursement(length) {
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

// Defne a function (2.) 
function costumerPay(doctorsFeeBeforeReimbursement, maxKelaReimbursement) {
	doctorsFeeBeforeReimbursement = parseInt(doctorsFeeBeforeReimbursement); 
	var length = Number(document.getElementById("length").value); 
	maxKelaReimbursement = maxReimbursement(length); 
	var officeFee = 15.90; 
	var costumerPay = doctorsFeeBeforeReimbursement - maxKelaReimbursement + officeFee; 
	return costumerPay; 
}

// Define a function (3.) 
function calculate() {
	// Read values from the input fields
	var length = Number(document.getElementById("length").value); 
	var doctorsFee = Number(document.getElementById("doctorsFee").value); 
	var maxKelaReimbursement = maxReimbursement(length); 
		// Call the function (1.) which calculates Kela reimbursement 
	var outPut1 = maxReimbursement(length); 

		
		// Call the function (2.) which calculates amount left for the customer to pay
	var outPut2 = costumerPay(doctorsFee, maxKelaReimbursement); 
	
		
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = 
		"Doctor's Fee is " + doctorsFee.toFixed(2) + " euros." + "<br />" + "Kela reimbursement is " + outPut1.toFixed(2) + " euroa." + 
		"<br />" + "Office fee is 15.90 euros" + "<br />" + "Customer needs to pay " + outPut2.toFixed(2) + " euros." ;  
}