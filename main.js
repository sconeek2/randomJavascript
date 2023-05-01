


function rollDice() {
    //console.log("you rolled the dice");

    //define the rollCounter selection from the user and the roll button
    let rollNumber = document.getElementById("rollCount");
    let rollCounter = rollNumber.value;
    let diceArray = [];
    let displayTotal = document.getElementById("total");
    let resetTheDice = document.getElementById("reset");
    
    //console.log(rollCounter);

    //make sure that the user has entered a number
    if (isNaN(rollCounter)) {
        alert('please enter a number');
    } else {
        //console.log("number is greater than zero");

        //create an array for the number of dice indicated
     
        for (i = 0; i < rollCounter; i++) {
            diceArray[i] = Math.floor(Math.random() * 6) + 1;
        }

        //console.log(diceArray);

        //add the dice total together
        let diceMath = 0;
        for (i = 0; i < diceArray.length; i++) {
            diceMath += diceArray[i];
        }
        //console.log(diceMath);
        //let displayTotal = document.getElementById("total");
        displayTotal.innerHTML = diceMath;
    }

    //listen for the 'show all dice' button to be clicked and then do something
    let showTheDice = document.getElementById('theDice');

    //grabbing the OL
    let diceList = document.getElementById('individualDie');

    //listen for the button click and display the individual dice values
    showTheDice.addEventListener('click', function () {
        //console.log("it worked");

        diceArray.forEach(function(element){
            //create the list items for each element
            let diceListItem = document.createElement('li');
            
           \
            
            //assign the element value to a list item
            diceListItem.innerText = element;

            // add the list item to the orderd list
            diceList.appendChild(diceListItem);;
        });

        //send the ordered list back to the html
        document.body.appendChild(diceList); 

    })

    
    resetTheDice.addEventListener('click', function(){
        
        displayTotal.innerHTML = '';
        diceList.innerHTML = '';
        diceArray = [];
        rollNumber.value = '';
        });

}






