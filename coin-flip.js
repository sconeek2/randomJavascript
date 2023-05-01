(function(){

    //outputs string to the body of the document
    document.write("hello from coin-flip.js");

    //outputs the string to the browsers console
    console.log("hello from coin-flip.js");

    

    
})();

function coinFlip(){
    
    num = Math.floor(Math.random() * 101);

    if (num % 2 == 0){
        document.getElementById("result").innerHTML = "Even";
    }else{
        document.getElementById("result").innerHTML = "Odd";
    }
    
    document.getElementById("number").innerHTML = num;
}