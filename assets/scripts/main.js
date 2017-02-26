$(document).ready(function() {
  checkWindow();
  $(window).resize(checkWindow);
  $('#nav_burger').click(function() {
    $('nav').toggleClass('hidden');
  });
});

function checkWindow() {
  console.log(document.body.clientWidth);
  if (document.body.clientWidth <= 767) {
    $('nav').addClass('hidden');
    $('#nav_burger').removeClass('hidden');
  } else {
    $('#nav_burger').addClass('hidden');
  } 
}