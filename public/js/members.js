$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  // $("#users").click(function() {
  //   $(".options").hide();
  //   $(".welcome").hide();
  //   console.log("hello");
  //   // $.get("/api/users", function(data) {
  //   //   //console.log(data);
  //   // });
  // });

  // $(".city").hide();

  // $("#find-restaurant").click(function() {
  //   $(".options").hide();
  //   $(".welcome").hide();
  //   $(".city").show();
  // });
});
