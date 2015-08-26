$(document).ready( function() {

    $(".note.a").click(function () {
      var audio_tag = document.getElementById('aAudio'); // audio file
      audio_tag.currentTime = 0;
      audio_tag.play();  // command to play audio
    });

    $(".note.b").click(function () {
      var audio_tag = document.getElementById('bAudio'); // audio file
      audio_tag.currentTime = 0;
      audio_tag.play();  // command to play audio
    });

    $(".note.c").click(function () {
      var audio_tag = document.getElementById('cAudio'); // audio file
      audio_tag.currentTime = 0;
      audio_tag.play();  // command to play audio
    });

    $(".note.d").click(function () {
      var audio_tag = document.getElementById('dAudio'); // audio file
      audio_tag.currentTime = 0;
      audio_tag.play();  // command to play audio
    });

    $(".note.e").click(function () {
      var audio_tag = document.getElementById('eAudio'); // audio file
      audio_tag.currentTime = 0;
      audio_tag.play();  // command to play audio
    });

    $(".note.f").click(function () {
      var audio_tag = document.getElementById('fAudio'); // audio file
      audio_tag.currentTime = 0;
      audio_tag.play();  // command to play audio
    });

    $(".note.g").click(function () {
      var audio_tag = document.getElementById('gAudio'); // audio file
      audio_tag.currentTime = 0;
      audio_tag.play();  // command to play audio
    });

});


//
// $(document).ready( function() {
//
//   switch(note) {
//     case "a":
//       note = "aAudio";
//       playSound(a)
//       break;
//     case "b":
//       note = "bAudio";
//       break;
//
//   }
//
//   var a = $(".note.a").click()
//
//   function playSound(note) {
//     $(".note." + note ).click(function() {
//       var audio_tag = document.getElementById(note + 'Audio'); // audio file
//       audio_tag.currentTime = 0;
//       audio_tag.play();  // command to play audio
//     }
//   )}
// });
