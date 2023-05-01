(function(){

    document.write("hello from tallest-mountain.js");

})();

//this is defining my array 
let mountains = new Array(20);

console.log(mountains.length)

//using a for loop to populate my array with random numbers between 50 and 100
for (var i = 0; i < mountains.length; i++){
    mountains[i] = Math.floor(Math.random() * 51 + 50);
    }
console.log(mountains);

//create a reference to UL where list of mountain heights will display
let list = document.getElementById('mtnList');


//I want to dislay the array elements in the browser h2 element
mountains.forEach(mount => {
    //creating list items that will hold the mountain heights
    let listItem = document.createElement("li");
    listItem.innerText = mount;
    list.appendChild(listItem);
})

//search through array to find the largest number
console.log('The largest number is: ' + Math.max(...mountains));
let tallestMountain = document.getElementById('tallestMtn');
tallestMountain.innerText = "The tallest mountain is " + Math.max(...mountains) + " feet tall";