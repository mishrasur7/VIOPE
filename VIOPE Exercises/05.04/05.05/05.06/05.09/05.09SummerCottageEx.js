function calculateRent() {
var rent = Number(document.getElementById("rent").value); 
var participants = Number(document.getElementById("participants").value); 
var perParticipants = rent/participants; 
document.getElementById("answerDiv").innerHTML = "Rent per participants is " + perParticipants.toFixed(2) + " euros."; 
		
}