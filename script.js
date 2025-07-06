
// Initialize WaveSurfer
const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#6f86d6',
  progressColor: '#fff',
  cursorColor: '#fff',
  barWidth: 2,
  barRadius: 2,
  responsive: true,
  height: 80,
  normalize: true,
  partialRender: true
});

// Load a sample track for testing
wavesurfer.load('assets/song.mp3');

// Sync Play/Pause button
const playPauseBtn = document.getElementById('play-pause-btn');
playPauseBtn.addEventListener('click', () => {
  wavesurfer.playPause();
  const icon = playPauseBtn.querySelector('i');
  icon.classList.toggle('fa-play');
  icon.classList.toggle('fa-pause');
});
