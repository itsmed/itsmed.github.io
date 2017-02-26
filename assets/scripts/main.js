$(document).ready(function() {
  checkWindow();
  $(window).resize(checkWindow);
});

function checkWindow() {
  if (document.body.clientWidth <= 767) {
    console.log('hello');
  }
}