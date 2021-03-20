

function calculate() {

    // Read date text from the input field
    var dateText = document.getElementById("date").value; 
    var day = isSunday(dateText); 
 
   if(day === false) {
        outPutText = "<p>" + "Date " + dateText + " (work day)." + "<br />" + "The price of this repair work is 48 euros per hour."; 
    }
    else {
        outPutText = "<p>" + "Date " + dateText + " (Sunday)" + "<br />" + "The price of this repair work is 72 euros per hour."; 
    }
    document.getElementById("answer").innerHTML = outPutText; 
   

    // If it is not Sunday  (Call isSunday() function with a date text as a parameter)
        //Show price of the repair work per hour during the workdays
    //otherwise			
        //Show price of the repair work per hour on Sundays

}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
    // Split the given dateText into day, month and year parts using the substr() method
    dateText = dateText.substr(0,10); 
    var asDate = new Date(); 
    // Create a new Date object to a variable 
    asDate.setDate(dateText.substr(0,2));
    asDate.setMonth(dateText.substr(3,2) - 1);
    asDate.setFullYear(dateText.substr(6,4)); 
    var day = asDate.getDay(); 
    // Get the day of the week with its getDay() method. Sunday is number 0 .
    // If day of the week is Sunday 
	
		// return Boolean value true
		
	// otherwise	
	
       // return Boolean value false		
    if(day === 0) {  
        return true; 
    }
    else {
        return false; 
    }
    
}


