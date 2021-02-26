function showComparisonScores() {
		
	var tolalVote = Number(document.getElementById("votes").value); 
	var noOfCandidates = Number(document.getElementById("candidates").value); 
	var outPutText = " "; 

	
	var i = 1; 
	while (i <= noOfCandidates) {
		var voteScore = tolalVote/i; 
		outPutText = outPutText + i + ". candidate : " + voteScore.toFixed(0) + "<br />"; 
		document.getElementById("answer").innerHTML = outPutText; 
		i++; 

	}
		
}