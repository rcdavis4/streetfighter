$(document).ready(function() {
  $('.ryu')

  // reveals ready stance when hovering near image
  .mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    // reveal hadouken instruction
    $('.instruct-ready').hide();
    $('.instruct-hadouken').show();
  })

  // returns ryu to still when cursor leaves ryu area
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })

  .mousedown(function() {
    // hide text bubble
    $('.instruct-hadouken').hide();
    // hadouken sound
    playHadouken();
    // reveals ryu throwing stance
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    // hadouken fireball animation
    $('.hadouken').finish().show().animate(
      {'left': '500px'},
      600,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })

  // returns to ready stance when release click
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    // reveal text bubble
    $('.instruct-coolness').show();
  })

  // reveal of cool ryu when letter x is pressed
  $(document).keydown(function(event) {
    if(event.which == 88) {
      $('.ryu-still, .ryu-ready, .ryu-throwing').hide();
      $('.ryu-cool').show();
      // cue suave music
      playMusic();
      // replaces background image with cityscape image
      $('.main').css({'backgroundImage', 'url(../img/skyline.jpg)'});
      // hide text bubble
      $('.instruct-coolness').hide();
    }

  // function for when x button is released
  }).keyup(function() {
    if(event.which == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
      // stops music and loads again
      $('#suave-music')[0].pause();
      $('#suave-music')[0].load();
      // background image returns to original
      $('.main').css({'backgroundImage', 'url(../img/anime.png)'});
    }
  })

}); // end of document.ready


// music and sound functions
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playMusic() {
  $('#suave-music')[0].volume = 0.5;
  $('#suave-music')[0].play();
}