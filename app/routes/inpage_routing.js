$(document).ready(function(){
  $("#login").on("click", function(){
    $.get("/signin")
  })

});