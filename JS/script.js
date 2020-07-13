


$(document).ready(function() {

  $("#inp").keyup(function(event){
    var input = $("#inp").val();
    console.log(input);
    if (event.keyCode == 13) {
      $(".main").append("<div class='u_sender'> <p></p> </div>");
      $(".u_sender p").last().text(input);
      $("#inp").val("");
    }
  })

})
