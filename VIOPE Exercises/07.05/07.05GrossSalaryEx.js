function calculateSalary(hours, hourlySalary) {
	// calculate salary
	var salary = hours * hourlySalary; 
	// return the gross salary with the return statement
	return salary;		
}

function showGrossSalary() {
		// assign the input field value to the variable hours
		var hours = Number(document.getElementById("hours").value); 
		// assign the second input field value to the variable hourlySalary
		var hourlySalary = Number(document.getElementById("hourlySalary").value); 
		// call the calculateSalary function
		var grossSalary = calculateSalary(hours, hourlySalary); 
		// write the answer on the html page
		document.getElementById("answer").innerHTML = "Gross salary is " + grossSalary.toFixed(2) + " euros."; 
}

