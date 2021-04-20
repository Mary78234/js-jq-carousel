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

  //conta il numero di immagini inserite
  var Nimg = $('.box-img').children().length;

  //click freccia sinistra, va indietro tra le img
  $('.box-left').click(indietro);
  //click su freccia destra, va avanti tra le img
  $('.box-right').click(avanti);
  //genera i pallini in relazione al numero di img
  generaNpallini(Nimg);
  //click sul pallino, mostra l'img corrispondente
  $('.box-center i').click(mostra);


  /* 
  * FUNZIONI
  */

  //genera i i pallini in relazione al numero di img
  function generaNpallini(num){
    for (var i = 0; i < num; i++){
      //genera il primo pallino pieno
      if (i == 0){
        $('.box-center .pallini').prepend('<i class="fas fa-circle"></i>');
  
      } else{
        $('.box-center .pallini').append('<i class="far fa-circle"></i>');
      }
  
    }
  }

  //mostra img corrispondente al pallino selezionato
  function mostra(){
    
    //sposto il pallino a quello cliccato
    var dotVisible = $('.box-center i.fas.fa-circle');
    var imgVisible = $('.box-img img.active');
    //posizione index del pallino cliccato
    var imgChosen = $(this).index();

    //rimuovo pallino pieno da posizione originale e metto nel punto selezionato con this
    dotVisible.removeClass('fas fa-circle').addClass('far fa-circle');
    $(this).removeClass('far fa-circle').addClass('fas fa-circle');
    imgVisible.removeClass('active');

    //seleziono img con indice trovato con chosen e gli metto la classe chose
    $('.box-img img').slice(imgChosen, imgChosen+1).addClass('active');
    
  };

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

    };

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