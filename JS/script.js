$(document).ready(function() {



  var date = new Date();
  var dateHM = date.toLocaleTimeString();

  $("#inp").keyup(function(event){
    var input = $("#inp").val();
    console.log(input);
    if (event.keyCode == 13 && input != "") {
      $(".main").append("<div class='u_sender'> <p class = 'txt'></p> <p class = 'sendDate'></p>  </div>");
      // Inserisco il testo solo all'ultimo div creato lasciando stare quelli precedenti
      $(".u_sender p.txt").last().text(input);
      $(".u_sender p.sendDate").last().text(dateHM);
      $("#inp").val("");
      // Dopo 1 sec eseguo questa funzione
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
        // Restituisce -\ (false) se la il valore non è presente altrimenti stampa la posizione
        // Con toggle vengono nascosti solo gli elementi -1 (che non soddisfano il criterio)
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        console.log($(this).text().toLowerCase().indexOf(value));
        console.log($(this).text().toLowerCase().indexOf(value) > -1);

      });
    });
  }
})
