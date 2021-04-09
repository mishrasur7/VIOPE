// Create an object array about courses
var courses = [
    { "name": "Orientation to software engineering",
    "code"  : "SWD1TF001",
    "extent" : 5,
    "timing" : "1.semester"
      }, 
    { "name": "Programming",
    "code"   : "SWD1TF002",
    "extent" : 5,
    "timing" : "2.semester"
      }, 
    { "name": "Data management and databases",
    "code"   : "SWD1TF003",
    "extent" : 5,
    "timing" : "2.semester"
      }, 
    {"name": "Mobile development project",
    "code"   : "SWD1TF004",
    "extent" : 10,
    "timing" : "3.semester"
      }
    // INSERT CODE HERE
];

function listCourses() {
    var outPutText = ""; 
    // List courses from an object array , i is an index of array
    for (var i = 0; i < courses.length; i++) {
        outPutText += 
        "<br />" + "<br />" + "Code: " + courses[i].code + "<br />" + 
        "Name: " + courses[i].name + "<br />" + 
        "Extent: " + courses[i].extent + "<br />" + 
        "Timing: " + courses[i].timing; 
    }
    document.getElementById("answer").innerHTML = outPutText; 
    
    // Write the answer on the page, to the answer div, as content of the div
    
}
