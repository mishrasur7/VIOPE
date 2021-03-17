function processName() {

    // read value of name from the input field
    var name = document.getElementById("name").value; 
   

    // show it with "ALL CAPS" using toUpperCase()
    var nameUpperCaps = name.toUpperCase(); 
   

    // show it with  "all small letters" using toLowerCase()
    var nameSmallCaps = name.toLowerCase(); 
 

    //tell how many characters are there (length, includes also all spaces) 
    var length = name.length; 
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + nameUpperCaps; 
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + nameSmallCaps; 
    document.getElementById("length").innerHTML = "Character count: " + length; 
   
}