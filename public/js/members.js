$(document).ready(function() {
  $("#hide").hide();

  $("#find-restaurant").on("click", function() {
    $("#hide").show();
  });

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});
