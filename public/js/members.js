$(document).ready(function() {
  $("#hide").hide();

  $("#find-restaurant").on("click", function() {
    $("#hide").show();
    $("#find-restaurant").hide();
    $("#users").hide();
    $(".welcome").hide();
  });

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  $("#submit-city").on('click', function() {
    let searchCity = $("#city-search").val();
    $.post('api/restaurants/' + searchCity);
  });
});
