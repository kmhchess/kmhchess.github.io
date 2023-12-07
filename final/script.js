$(document).ready(function(){
  $('.Missouri').hide();
  $('.Kansas').hide();
  $('.Iowa').hide();
  $('.Illinois').hide();
  $('.Indiana').hide();
  $('.Michigan').hide();
  $('.Minnesota').hide();
  $('.Nebraska').hide();
  $('.Ohio').hide();
 
  $("#link-Missouri").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Missouri").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
  });

  $("#link-Kansas").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Kansas").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
  });

  $("#link-Iowa").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Iowa").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
  });

  $("#link-Illinois").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Illinois").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
  });

  $("#link-Indiana").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Indiana").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
  });

  $("#link-Michigan").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Michigan").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
  });

  $("#link-Minnesota").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Minnesota").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
  });

  $("#link-Nebraska").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Nebraska").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
  });

  $("#link-Ohio").on('click', () => {
    $(".question").hide(500);
    $(".wronganswer").hide(500);
    $(".rightanswer").hide(500);
    $(".Ohio").show(500);
    $(".rightanswer").removeClass('rightchoice');
    $(".wronganswer").removeClass('wrongchoice');
    $('#feedback').text("Answer question above");
    
  });

  $(".wronganswer").on('click', (event) => {
    $(event.currentTarget).addClass('wrongchoice');
    $('#feedback').text("Wrong. Try again.")
  });

  $(".rightanswer").on('click', (event) => {
    $(event.currentTarget).addClass('rightchoice');
    $('#feedback').text("Correct! Good job!")
  });

});
