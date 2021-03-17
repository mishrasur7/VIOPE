function processName() {

    // read value of name from the input field
    var name = document.getElementById("name").value; 
   

    // show it with "ALL CAPS" using toUpperCase()
    var nameUpper = name.toUpperCase(); 
   

    // show it with  "all small letters" using toLowerCase()
    var nameLower = name.toLowerCase(); 
 

    //tell how many characters are there (length, includes also all spaces) 
    var length = name.length; 
   

    // tell, whether the input string contains the word 'muumi'
    var muumi = name.indexOf("muumi"); 
    if(muumi === -1){
        outPut = "Doesn't contain the text muumi."; 
    }

    
    // tell the first character using charAt()
    var firstCharacter = name.charAt(); 
    

    // tell which ones are the first three characters using subStr().
    var firstThreeCharacters = name.substr(0,3); 

    document.getElementById("upperCase").innerHTML = "With upper case letters: " + nameUpper; 
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + nameLower; 
    document.getElementById("length").innerHTML = "Character count: " + length; 
    document.getElementById("contains").innerHTML = outPut; 
    document.getElementById("firstCharacter").innerHTML = "First character: " + firstCharacter; 
    document.getElementById("manyCharacters").innerHTML = "First three characters: " + firstThreeCharacters; 
   
}