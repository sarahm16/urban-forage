
$(document).ready(function(){
    
    var userOne = localStorage.getItem('userOne');

    var index = 0;

    $.get(`/api/showLikes/${userOne}`).then(function(data) {
        localStorage.clear()

        //setting initial restaurant to the first restaurant in the array
        localStorage.setItem('data', JSON.stringify(data));
        
    });

    let data = JSON.parse(localStorage.getItem("data"));

    nextRestaurant();

    //displaying next restaurant when user clicks thumbs up
    $("#thumbs-up").on("click", function() {
        console.log("like");
    });

    $("#thumbs-down").on("click", function() {
        nextRestaurant();
        console.log("not-like");
    });

    function nextRestaurant() {
        
        if(index < data.length) {
            $("#restaurant-name").text(data[index].restaurantId);
            $("#restaurant-image").attr("src", data[index].imageURL);
            index += 1;
        }
        else {
            //$("#see-matches").show();
        };
    };
});