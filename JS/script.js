$(document).ready(function() {

  var date = new Date();
  var dateHM = date.toLocaleTimeString();

  $("#inp").keyup(function(event){
    var input = $("#inp").val();
    console.log(input);
    if (event.keyCode == 13 && input != "") {
      // $(".main").append("<div class='u_sender'> <p class = 'txt'></p> <p class = 'sendDate'></p>  </div>");
      var copyDiv = $(".u_sender").last().clone();
      $(".main").append(copyDiv);
      $(".u_sender").last().removeClass("hide");
      // Inserisco il testo solo all'ultimo div creato lasciando stare quelli precedenti
      $(".u_sender p.txt").last().text(input);
      $(".u_sender p.sendDate").last().text(dateHM);
      // Cancello i valori di input
      $("#inp").val("");
      // Dopo 1 sec eseguo questa funzione
      setTimeout(function(){
        reply();
      }, 1000);
    // end IF
    }

  // end keyup
  })


  search();
  
  // Per ricercare elementi nel dom anche dopo averli generati dinamicamente
      $(document).on("click", ".deleteOption i", dropDown);
      // al click su i.red cancello l'intero div
      $(document).on("click", "li.red", function(){
        $(this).parents(".u_sender, .receive").remove();
      })
      $(document).mouseup(function (e){
      var container = $(".dropCont, .dropContR");
      // console.log(e.target);
      // console.log(container.has(e.target));
      // console.log(container.has(e.target).length == 0); Restituisce true se la condizione è falsa
          // se il target del click non è il container stesso && un discendente del cotainer >> se è VERO che la condizione è falsa esegue il fadeOut
      if (!container.is(e.target) && container.has(e.target).length == 0){
        container.fadeOut();
      }
      });



// ---Functions Sec---
  function reply(){
    var copyDiv = $(".receive").last().clone();
    $(".main").append(copyDiv);
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
  function dropDown(){
      $(this).next(".dropCont").toggle();
      // console.log("clicked");
      $(this).next(".dropContR").toggle();
  }


})
