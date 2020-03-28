$(document).ready(function(){
    let userOne = localStorage.getItem("userOne");

    $.get(`/api/userTwoRestaurants/${userOne}`).then(function(data) {
        const userOneLikes = data 
      
        console.log(data);

        var index = 0;
    
        //setting initial restaurant to the first restaurant in the array
        var restaurants = data[0];
        console.log(restaurants);
    
        function nextRestaurant() {
            index += 1;

        }
        let matches = []
        //displaying next restaurant when user clicks thumbs up
        $("#thumbs-up").on("click", function() {
            
            var newLike = {
                restaurantId: restaurants[index].name,
                url: restaurants[index].url,
                imageURL: restaurants[index].imageURL,
                latitude: restaurants[index].latitude,
                longitude: restaurants[index].longitude
            }
        //console.log(newLike);
            matches.push(newLike);
            console.log(newLike);
            nextRestaurant();
        //function that puts restaurant in likes table
        });
    
        $("#thumbs-down").on("click", function() {
        nextRestaurant();
        })
    });
    
});

