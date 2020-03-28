$(document).ready(function(){
    $(".username").on("click", function() {
        const userOne = $(this).attr("data-user");
        console.log(userOne);
        localStorage.setItem("userOne", userOne);
    });
})
