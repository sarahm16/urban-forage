$(document).ready(function(){
    
    $(".username").on("click", function() {
        const userOne = $(this).attr("data-user");
        console.log(userOne);
        var index = 0;

        //setting initial restaurant to the first restaurant in the array
        $("#restaurant-name").text(response[0].name);
        $("#restaurant-image").attr("src", response[0]["image_url"]);
        $("#price").text(response[0].price)

        function nextRestaurant() {
        index += 1;
        if(index < response.length) {
            $("#restaurant-name").text(response[index].name);
            $("#restaurant-image").attr("src", response[index]["image_url"]);
            $("#price").text(response[i].price);
        }
        else {
            $("#see-matches").show();
        }
        }

        //displaying next restaurant when user clicks thumbs up
        $("#thumbs-up").on("click", function() {
        $.get("/api/user_data").then(function(data) {
            console.log(data.email);
            var newLike = {
            user: data.email,
            restaurantId: response[index].name,
            imageURL: response[index]["image_url"],
            latitude: response[index].coordinates.latitude,
            longitude: response[index].coordinates.longitude
            };
            $.post("/api/likes/add", newLike);
        });
        nextRestaurant();
        });

        $("#thumbs-down").on("click", function() {
        nextRestaurant();
        });
    

    });
});

