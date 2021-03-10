//Process one 
while(confirm("Do you want to continue?")===true) {
    alert("Hello"); 
}
confirm("Do you really want to exit?"); 


//Process two - solving the problem by creating variable ans 
var ans = confirm("Do you want to continue"); 
while(ans===true) {
    alert("Hello"); 
    ans = confirm("Do you want to continue?"); 
}
confirm("Do you want to continue?");