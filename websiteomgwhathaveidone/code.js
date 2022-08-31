function clicked() {
  document.getElementById('button1').textContent = 'Button clicked';
}

function shut() {
  audio = document.getElementById('audioplayer');
  textaudio = document.getElementById('button2');
  if (audio.muted == false) {
    audio.muted = true;
    audio.pause();
    textaudio.textContent = "🔇";
  }
  
  else {
    audio.play();
    audio.muted = false;
    textaudio.textContent = "🔊";
  }
}
