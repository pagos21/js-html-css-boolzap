$(document).ready(function() {



  var date = new Date();
  var dateHM = date.toLocaleTimeString();

  $("#inp").keyup(function(event){
    var input = $("#inp").val();
    console.log(input);
    if (event.keyCode == 13 && input != "") {
      $(".main").append("<div class='u_sender'> <p class = 'txt'></p> <p class = 'sendDate'></p>  </div>");
      $(".u_sender p.txt").last().text(input);
      $(".u_sender p.sendDate").last().text(dateHM);
      $("#inp").val("");
      setTimeout(function(){
        reply();
      }, 1000);
    }
  })

  search();





  function reply(){
    $(".main").append("<div class='receive'> <p class = 'txt'></p> <p class = 'sendDate'></p>  </div>");
    $(".receive p.txt").last().text("Follow the white rabbit!");
    $(".receive p.sendDate").last().text(dateHM);
  }
  function search(){
    $("#searchContacts").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".list .contacts_list").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }
})
