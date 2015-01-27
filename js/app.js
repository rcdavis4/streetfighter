$(document).ready(function() {
  $('.ryu')
  .mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    // hadouken sound
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    // hadouken animation
    $('.hadouken').finish().show().animate(
      {'left': '500px'},
      600,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  })
  $(document).keydown(function(event) {
    if(event.which == 88) {
      $('.ryu-still, .ryu-ready, .ryu-throwing').hide();
      $('.ryu-cool').show();
      playMusic();
      $('.main').css('backgroundImage', 'url("../img/skyline.jpg")');
    }
  }).keyup(function() {
    if(event.which == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
      $('#suave-music')[0].pause();
      $('#suave-music')[0].load();
      $('.main').css('backgroundImage', 'url("../img/anime.png")');
    }
  })
});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playMusic() {
  $('#suave-music')[0].volume = 0.5;
  $('#suave-music')[0].play();
}