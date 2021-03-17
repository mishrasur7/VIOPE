function tellAge() {
    // Read value of yearOfBirth from the input field 
    var yearOfBirth = Number(document.getElementById("yearOfBirth").value); 
   

    // Figure out the current date into today variable 
    var dateToday = new Date();  
        dateToday = dateToday.getFullYear(); 
  

    // Use getFullYear() method to get the current year out from the today variable
   

    // Calculate the (rough estimate of the) age
    var age = dateToday - yearOfBirth; 
       

    // If age is less than zero
 
        //  Show an error message
        
    // otherwise tell the age

    if(age < 0) {
        outPut = "This is error"; 
    } 
    else {
        outPut = "You are now " + age + " years old."; 
    }
 
    document.getElementById("answer").innerHTML = 
    "You are now " + age + " Years old. " + "<br />" + "(Current year is " + dateToday + ".)"; 

   
}