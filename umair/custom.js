function fadingIn() {
  $('.fade-in').click(function() {
    $('#heading').fadeIn(500)
  });
}

function fadingOut() {
  $('.fade-out').click(function() {
    $('#heading').fadeOut(300)
  });
}

function slidingDown() {
  $('.slideDown').click(function() {
    $('#heading').slideDown(500)
  });
}

function slidingUp() {
  $('.slideUp').click(function() {
    $('#heading').slideUp(500);
});
}


$(document).ready(function() {
  fadingIn();
  fadingOut();
  slidingDown();
  slidingUp();
});