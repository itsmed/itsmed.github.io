$(document).ready(function() {
  checkWindow();
  $(window).resize(checkWindow);
  $('#nav_burger').click(function() {
    $('nav').toggleClass('hidden');
  });

//   $('.parallax').scroll(function() {
//     var x = $(this).scrollTop();
//     $(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
// });
});

function checkWindow() {
  if (document.body.clientWidth <= 767) {
    $('nav').addClass('hidden');
    $('#nav_burger').removeClass('hidden');
  } else {
    $('#nav_burger').addClass('hidden');
  } 
}