


$(document).ready(function() {

  $("#inp").keyup(function(event){
    var input = $("#inp").val();
    var date = new Date();
    var dateHM = date.toLocaleTimeString();
    console.log(input);
    if (event.keyCode == 13 && input != "") {
      $(".main").append("<div class='u_sender'> <p class = 'txt'></p> <p class = 'sendDate'></p>  </div>");
      $(".u_sender p.txt").last().text(input);
      $(".u_sender p.sendDate").last().text(dateHM);

      $("#inp").val("");
    }
  })

})
