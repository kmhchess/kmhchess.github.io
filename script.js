$(document).ready(function(){
    $('#foods tbody tr:even').css('background-color','#dddddd');

    $('#toggleButton').click(function(){
        $('#high_GI').toggle();
        
        if($('#high_GI').is(':visible')) {
          $(this).val('Hide High GI Foods');
        } else {
          $(this).val('Show High GI Foods');
        }
    });


  });