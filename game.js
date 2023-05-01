//keep counting score until reset button is clicked

//starting at zero, whenever the shoot button is clicked I need to add a random number to the score and then display the score.
var oneGoals = 0;
var oneShots = 0;
var twoShots = 0;
var twoGoals = 0;
var resetCounter = 0;

/*function did1Score() {
    oneShots += 1;
    oneGoals += Math.floor(Math.random() * 3);
    //alert('your score is '+ a+' your shots are '+b);
    document.getElementById("teamone-numgoals").innerHTML = oneGoals;
    document.getElementById("teamone-numshots").innerHTML = oneShots;
}

function did2Score() {
    twoShots += 1;
    twoGoals += Math.floor(Math.random() * 3);
    //alert('your score is '+ a+' your shots are '+b);
    document.getElementById("teamtwo-numgoals").innerHTML = twoGoals;
    document.getElementById("teamtwo-numshots").innerHTML = twoShots;
}*/

//this is my rewrite of the above two sepearate functions...my solution to get them into one shared function.
function score(elem) {
    var x = elem.id;
    if (x == "teamone-shoot-button") {
        oneShots += 1;
        oneGoals += Math.floor(Math.random() * 4);
        document.getElementById("teamone-numgoals").innerHTML = oneGoals;
        document.getElementById("teamone-numshots").innerHTML = oneShots;
    } else {
        twoShots += 1;
        twoGoals += Math.floor(Math.random() * 3);
        document.getElementById("teamtwo-numgoals").innerHTML = twoGoals;
        document.getElementById("teamtwo-numshots").innerHTML = twoShots;
    }
}

function gameReset() {
    var reset = false;
    if (oneGoals > twoGoals){
        alert('Team1 Wins!!');
    } else {
        alert('Team2 Wins!!');
    }
    resetCounter += 1;
   // alert(reset);
    document.getElementById("num-resets").innerHTML = resetCounter;
    oneGoals = 0;
    oneShots = 0;
    twoShots = 0;
    twoGoals = 0;
    document.getElementById("teamone-numgoals").innerHTML = oneGoals;
    document.getElementById("teamone-numshots").innerHTML = oneShots;
    document.getElementById("teamtwo-numgoals").innerHTML = twoGoals;
    document.getElementById("teamtwo-numshots").innerHTML = twoShots;
}



