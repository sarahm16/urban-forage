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
  var email;
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    email = data.email;
  });

  $("#submit-city").on("click", function() {
    submitted();
  });

  $(".input-group").keypress(function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      submitted();
      window.location.replace("/api/restaurants");
    }
  });

  function submitted(){
    var searchCity = $("#city-search").val();
    localStorage.setItem("searchCity", searchCity);
    // remove user data from database
    removeUser(email);
  }

  function removeUser(email) {
    $.ajax({
      url: "/api/users",
      type: "DELETE",
      data: { email: email }
    }).then();
  }
});
