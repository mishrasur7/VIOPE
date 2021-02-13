function calculateUnitFine() {
var netIncome = Number(document.getElementById("txtNetIncome").value); 
var oneUnitFine = (netIncome-255)/60; 
document.getElementById("answerDiv").innerHTML = "Unit " + "fine " + "is " + oneUnitFine.toFixed(2) + " euros."; 

}