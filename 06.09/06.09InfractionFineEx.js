function tellInfractionFine() {
	var drivingSpeed = Number(document.getElementById("drivingSpeed").value);
	var speedLimit = Number(document.getElementById("speedLimit").value);
	var excessSpeed = drivingSpeed - speedLimit;  

	var outPutText; 
	if ((speedLimit >= 10 && speedLimit <= 60) && excessSpeed <= 15) {
		outPutText = "Infraction fine is 85 euros."; 
	} else if ((speedLimit >= 10 && speedLimit <= 60) && (excessSpeed > 15 && excessSpeed <= 20)) {
		outPutText = "Infraction fine is 115 euros."; 
	} else if ((speedLimit >= 70 && speedLimit <= 120) && (excessSpeed > 1 && excessSpeed <= 15)) {
		outPutText = "Infraction fine is 70 euros."; 
	} else if ((speedLimit >= 70 && speedLimit <= 120) && (excessSpeed > 15 && excessSpeed <= 20)) {
		outPutText = "Infraction fine is 100 euros."; 
	} else if (excessSpeed > 20) {
		outPutText ="Income-based unit fine."; 
	} else {
		outPutText = "No speeding, no fine.";
	}
	document.getElementById("answer").innerHTML = outPutText; 
}


         
