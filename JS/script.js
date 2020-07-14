$(document).ready(function() {

// <div class='deleteOption'> <i class='fas fa-chevron-down'></i> <div class='dropCont'> <ul> <li>Info</li>

  var date = new Date();
  var dateHM = date.toLocaleTimeString();

  $("#inp").keyup(function(event){
    var input = $("#inp").val();
    console.log(input);
    if (event.keyCode == 13 && input != "") {
      // $(".main").append("<div class='u_sender'> <p class = 'txt'></p> <p class = 'sendDate'></p>  </div>");
      var copyDiv = $(".u_sender").last().clone();
      $(".main").last().append(copyDiv);
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
    }

    // Al click sulla i nel messaggio apro la dropdown
    $(".main .deleteOption i").click(dropDown);
    function dropDown(){
        $(this).next(".dropCont").toggle();
        console.log($(this).children(".dropCont"));
    }
    // al click su i.red cancello l'intero div
    $(".dropCont li.red").click(function(){
      var toDelete = document.getElementsByClassName("u_sender");
      $(this).parents(".u_sender").remove();
    })

    $(document).mouseup(function (e){
    var container = $(".dropCont");
    // console.log(e.target);
    // console.log(container.has(e.target));
    // console.log(container.has(e.target).length == 0); Restituisce true se la condizione è falsa
        // se il target del click non è il container stesso && un discendente del cotainer >> se è VERO che la condizione è falsa esegue il fadeOut
    if (!container.is(e.target) && container.has(e.target).length == 0){
      container.fadeOut();
    }
    });
  })
  search();







// ---Functions Sec---
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
  function dropDown(){
      $(this).siblings(".dropCont").toggle();
      console.log($(this).children(".dropCont"));
  }


})
