
$(document).ready(function(){
    
    var userOne = localStorage.getItem('userOne');

    var index = -1;

    $.get(`/api/showLikes/${userOne}`).then(function(data) {
        
        //setting initial restaurant to the first restaurant in the array
        localStorage.setItem('data', JSON.stringify(data));
        
    });

    let data = JSON.parse(localStorage.getItem("data"));
    console.log("index:",index);
    console.log("data",data);

    nextRestaurant();

    //displaying next restaurant when user clicks thumbs up
    $("#thumbs-up").on("click", function() {
        //console.log("like");
        var match = {
            name: data[index].restaurantId,
            image: data[index].imageURL
        };
        localStorage.setItem('match', JSON.stringify(match));
        console.log(match);
    });

    $("#thumbs-down").on("click", function() {
        nextRestaurant();
        //console.log("not-like");
    });

    function nextRestaurant() {
        
        if(index < data.length) {
            index += 1;
            $("#restaurant-name").text(data[index].restaurantId);
            $("#restaurant-image").attr("src", data[index].imageURL);
        }
        else {
            //$("#see-matches").show();
            
        };
        index += 1;
    };

    let match = JSON.parse(localStorage.getItem('match'));
    console.log(match)
        $("#match-name").text(match.name);
        $("#match-image").attr("src", match.image);

});