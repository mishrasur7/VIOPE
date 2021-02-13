function calculateCosts() {
var kilometers = Number(document.getElementById("kilometers").value); 
var consumptionPer100km = Number(document.getElementById("consumption").value); 
var consumptionTotalKilometer = Number(consumptionPer100km*kilometers)/100; 
var price = Number(document.getElementById("price").value); 
var participants = Number(document.getElementById("participants").value); 
var totalCost = consumptionTotalKilometer*price; 
var costPerParticipants = totalCost/participants; 
document.getElementById("answerId").innerHTML = "Fuel costs per participant is " + costPerParticipants.toFixed(2) + " euros."; 
}