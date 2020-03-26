$(document).ready(function(){
    $(".username").on("click", function() {
        const userOne = $(this).attr("data-user");
        console.log(userOne);
        
        $.get(`/api/showLikes/${userOne}`).then(function(data) {
          const userOneLikes = data
          export {userOneLikes};
          console.log(data);
        });
    });
})
