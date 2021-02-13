function calculateBMI() {
  var weight = Number(document.getElementById("weight").value); 
  var height = Number(document.getElementById("height").value); 
  var heightMeter = height/100; 
  var bMI = weight/(heightMeter * heightMeter); 
  var outPutText; 
  if (bMI <= 18.4) {
    outPutText = "Body Mass Index (BMI) is " + bMI.toFixed(2) + " (Weight less than normal weight)"; 

  } else if(bMI > 18.5 && bMI < 24.9) {
    outPutText = "Body Mass Index (BMI) is " + bMI.toFixed(2) + " (Normal weight)"; 

  } else {
    outPutText = "Body Mass Index (BMI) is " + bMI.toFixed(2) + " (Overweight)"; 

  }
  document.getElementById("answer").innerHTML = outPutText; 
  //TODO
		
}
