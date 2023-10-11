$(document).ready(function(){
    $('#foods tbody tr:even').css('background-color','#dddddd');
    $("#feedback").text("Click the button if you choose.");
    $('#broccoliImage').show();
    $('#hamburgerImage').hide();
    $('#mashedPotatoesImage').hide();

    $('#toggleButton').click(function(){
        $('#high_GI').toggle();        
        if($('#high_GI').is(':visible')) {
          $(this).val('Hide High GI Foods');
          $("#feedback").animate({right: '+=250px'}, 500, 'swing' );
          $("#feedback").text("Click the button if you choose.");
        } else {
          $(this).val('Show High GI Foods');
          $("#feedback").animate({right: '-=250px'}, 500, 'swing');
          $("#feedback").text("Wise Choice!");
          $('#broccoliImage').fadeIn();
          $('#hamburgerImage').fadeOut();
          $('#mashedPotatoesImage').fadeOut();
        }
    });

    $('.imageButton').click(function(){
      if ( $(this).is("#broccoliButton") ) {
        $('#broccoliImage').fadeIn();
        $('#hamburgerImage').fadeOut();
        $('#mashedPotatoesImage').fadeOut();
      }
      else if ( $(this).is("#hamburgerButton") ) {
        $('#broccoliImage').fadeOut();
        $('#hamburgerImage').fadeIn();
        $('#mashedPotatoesImage').fadeOut();
      }
      else if ( $(this).is("#mashedPotatoesButton") ) {
        $('#broccoliImage').fadeOut();
        $('#hamburgerImage').fadeOut();
        $('#mashedPotatoesImage').fadeIn();
      }
    });
  });