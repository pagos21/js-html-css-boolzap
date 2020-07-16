$(document).ready(function() {

  var date = new Date();
  var dateHM = date.toLocaleTimeString();

  $("#inp").keyup(function(event){
    var input = $("#inp").val();
    console.log(input);
    if (event.keyCode == 13 && input != "") {
      var copyDiv = $(".main.active .u_sender").clone();
      $(".main.active").last().append(copyDiv);
      $(".main.active .u_sender").last().removeClass("hide");
      // Inserisco il testo solo all'ultimo div creato lasciando stare quelli precedenti
      $(".main.active .u_sender p.txt").text(input);
      $(".main.active .u_sender p.sendDate").text(dateHM);
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
  highLightContact();



  // Per ricercare elementi nel dom anche dopo averli generati dinamicamente
      $(document).on("click", ".deleteOption i", dropDown);
      // al click su i.red cancello l'intero div
      $(document).on("click", "li.red", function(){
        modal();
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
    var copyDiv = $(".main .receive").last().clone();
    if ($(".main.active").data("id") == "smith") {
      $(".main.active").last().append(copyDiv);
      $(".main.active .receive p.txt").last().text("It's inevitable!");
      $(".main.active .receive p.sendDate").last().text(dateHM);
    }
    else{
        $(".main.active").last().append(copyDiv);
        $(".main.active .receive p.txt").last().text("Follow the white rabbit!");
        $(".main.active .receive p.sendDate").last().text(dateHM);}
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
  function highLightContact() {
    $(".list .contacts_list").click(function(){
      // variabile per l'id dell'HTML
      var idTarget = $(this).data("id");
      console.log(idTarget);

      $("#chat .main.active").removeClass("active");
      $('#chat .main[data-id="'+idTarget+'"]').addClass("active");
      $(".list .contacts_list.activebg").removeClass("activebg");
      $(this).addClass("activebg");
      switchNameAvatar();

    });
  }
  function switchNameAvatar(){
    var nameTarget = $(".list .contacts_list.activebg p").text();
    var avaterTarget = $(".list .contacts_list.activebg img").attr("src");
    $(".icon_nome .nome p:first").text(nameTarget);
    $(".icon_nome .icon img").attr("src", avaterTarget);
  }

  function modal(){
    // Get the modal
var modal = $("#myModal");

// Get the button that opens the modal
var btn = $(this);
 //var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = $(".close");
console.log(span);

modal.show();


// When the user clicks on <span> (x), close the modal
span.click(function(){
  modal.hide();
})

// When the user clicks anywhere outside of the modal, close it
$(document).mouseup(function (e){
var container = $(".modal-content");
if (!container.is(e.target) && container.has(e.target).length == 0){
  modal.fadeOut("slow");
}
});

setTimeout(function () {
  modal.fadeOut("slow");
}, 2000);
  }



})
