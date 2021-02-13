function checkAge() {
	var inputAge = Number(document.getElementById("age").value); 
	var outPutText; 
	if (inputAge < 18) {
		outPutText = "Adolescents are not allowed to play."; 
	} 
	else {
		outPutText = "Old enough to play."; 
	}
	
	document.getElementById("answer").innerHTML = outPutText; 
}