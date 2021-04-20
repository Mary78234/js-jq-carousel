/* **Descrizione:**
Creare uno slider di immagini: potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Se vogliamo possiamo utilizzare una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
**Bonus:**
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Generiamo i pallini con JS */

$(function(){

  $('.box-left').click(indietro);
  $('.box-right').click(avanti);
  $('.box-center i').click(mostra);
  var figli = $('.box-img').children();
  console.log(figli.length)

  //genero pallini per n img
  $('.box-center .pallini').prepend('<i class="fas fa-circle"></i>');
  for (var i = 1; i < figli.length; i++){
    
    $('.box-center .pallini').append('<i class="far fa-circle"></i>');
  }

  /* 
  * FUNZIONI
  */

  function mostra(){

  }

  //al click vado avanti nel carosello immagini
  function indietro(){
    
    //cerco img con classe active e dot con fas (punto pieno)
    var imgVisible = $('.box-img img.active');
    var dotVisible = $('.box-center i.fas.fa-circle');
    //rimuovo la classe active
    imgVisible.removeClass('active');
    dotVisible.removeClass('fas fa-circle').addClass('far fa-circle');

    //se l'img precedente ha valore zero, cioè non c'è, metto active all'ultima img della box
    if (imgVisible.prev().length === 0){
      $('.box-img img').last().addClass('active');
      $('.box-center i.far.fa-circle').last().removeClass('far fa-circle').addClass('fas fa-circle');

    } else{
      //altrimenti metto la classe 'active' all'img precedente
      imgVisible.prev().addClass('active');
      dotVisible.prev().removeClass('far fa-circle').addClass('fas fa-circle');

    }

  };

  //al click vado indietro nel carosello immagini
  function avanti(){

    //cerco immgagine con classe active
    var imgVisible = $('.box-img img.active');
    var dotVisible = $('.box-center i.fas.fa-circle');

    //rimuovo la classe active
    imgVisible.removeClass('active');
    dotVisible.removeClass('fas fa-circle').addClass('far fa-circle');


    //se l'img successiva ha valore zero, cioè non c'è, metto active alla prima img della box
    if (imgVisible.next().length === 0){
      $('.box-img img').first().addClass('active');
      $('.box-center i.far.fa-circle').first().removeClass('far fa-circle').addClass('fas fa-circle');

    } else{
      //altrimenti metto la classe 'active' all'img successiva
      imgVisible.next().addClass('active');
      dotVisible.next().removeClass('far fa-circle').addClass('fas fa-circle');

    }
  };



});