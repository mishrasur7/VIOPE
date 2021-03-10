var array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];

function sortArray() {
    array = array.sort(); 
    array = array.reverse(); 
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}