function toggle() {
  $('.toggle-me').click(function() {
    if ($('#heading').css('display') === 'block') {
      $('#heading').css('display', 'none');
    } else {
      $('#heading').css('display', 'block');
    }
  });
}

$(document).ready(toggle);