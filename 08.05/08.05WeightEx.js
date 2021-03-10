function showWeightGoals() {
	var originalWeight = Number(document.getElementById("weight").value); 
	var eachWeekWeightLoss = originalWeight * 0.1/7; 
	var outPutText = " "; 

	for(i = 1; i <= 7; i++) {
		originalWeight = originalWeight - eachWeekWeightLoss; 
		outPutText = outPutText + " After " + i + ". week " + originalWeight.toFixed(1) + " kg" + "<br />"; 
		document.getElementById("answer").innerHTML = outPutText; 
	}
		
}