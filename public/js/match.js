$(document).ready(function(){
    let match = JSON.parse(localStorage.getItem('match'));
    console.log(match)
        $("#match-name").text(match.name);
        $("#match-image").attr("src", match.image);
})