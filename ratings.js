function collect_ratings(){
    let ratings = {
        count: 0,
        sum: 0,
        average: 0,
    };

    let rating = 0;

    //this is an array called 'elements' that stores all input elements
    const elements = document.querySelectorAll(".rating");
    
    //console.log(elements);

    //this will cycle through the elements array
    elements.forEach(function (element){
        //replacing the word 'star' with a blank and then turning the remaining string into a number
        rating = parseInt(element.id.replace("star", ""));
        console.log('rating is: ' + rating);

        //setting ratings.count
        ratings.count += parseInt(element.value);
        //console.log(ratings);

        ratings.sum += parseInt(element.value) * rating;

   });

   //check to make sure count is not zero
   if(ratings.count !== 0){
        ratings.average = ratings.sum / ratings.count;
        return ratings;
   }
};

document.addEventListener("change", () => {
    const ratings = collect_ratings();
    document.querySelector("#average").value = ratings.average.toFixed(2);
})

