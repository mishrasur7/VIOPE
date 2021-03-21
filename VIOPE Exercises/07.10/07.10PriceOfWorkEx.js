function modifyTitle() {

	// Read value of title from the input field
	var title = document.getElementById("title").value; 
	// Call allCapsTitleTrimmed() function 
	title = allCapsTitleTrimmed(title); 


}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
	var a = text.trim(); 
	var b = a.toUpperCase(); 
	return b; 
    
	// Changes the text given to it to be ALL CAPS

    
	// Return the changed text
	
}

function calculate() {
	// Calculate length of the work as minutes.
	var startTime = document.getElementById("startTime").value; 
	var endTime = document.getElementById("endTime").value; 
	var totalHour = endTime.substr(0,2) - startTime.substr(0,2); 
	var totalMinute = endTime.substr(3,2) - startTime.substr(3,2); 
	var totalTimeInHour = totalHour + totalMinute/60; 
	var totalTimeInMinutes = totalHour * 60 + totalMinute; 
	var date = document.getElementById("date").value; 
	var day = isSunday(date); 
	if(day === true) {
		workPrice1 = (72 * totalTimeInHour).toFixed(2); 
		outPutText = 
		"The hourly price is during the Sundays 72.00 euros. " + "<br />" + "The price of this repair work is " + workPrice1 + " euros."; 
	}
	else {
		workPrice2 = (48 * totalTimeInHour).toFixed(2); 
		outPutText = 
		"The hourly price is during the workdays 48.00 euros. " + "<br />" + "The price of this repair work is " + workPrice2 + " euros."; 
	}
	document.getElementById("answer").innerHTML = "Length of the work was " + totalTimeInMinutes + " minutes. " + "<br />" + outPutText; 
    // If it is not Sunday  (Call isSunday() function)
        //Calculate and show price of the repair work during the workdays
    //otherwise			
        //Calculate and showprice of the repair work on Sundays

}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
	// Split the given date text into day, month and year parts using the subStr() method
	dateText = dateText.substr(0,10); 
	

	// Create a new Date object to a variable asDate
	var asDate = new Date(); 
	asDate.setDate(dateText.substr(0,2)); 
	asDate.setMonth(dateText.substr(3,2) - 1); 
	asDate.setFullYear(dateText.substr(6,4)); 
	

	// Get the day of the week with its getDay() method. Sunday is number 0 .
	var day = asDate.getDay(); 
	if(day === 0) {
		return true; 
	}
	else {
		return false; 
	}
	

	// If day of the week is Sunday 
	
		// return Boolean value true
		
	// otherwise	
	
       // return Boolean value false		
	
}


