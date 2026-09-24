const musicButton = document.querySelector('#music-button');
const playerWrap = document.querySelector('#player-wrap');
const musicPlayer = document.querySelector('#music-player');
const musicStatus = document.querySelector('#music-status');
const guestSubmit = document.querySelector('#guest-submit');
const guestStatus = document.querySelector('#guest-status');
const visitorCounter = document.querySelector('#visitor-counter');

let musicOn = false;

musicButton.addEventListener('click', () => {
  musicOn = !musicOn;
  playerWrap.setAttribute('aria-hidden', String(!musicOn));
  musicPlayer.src = musicOn
    ? 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&enablejsapi=1&loop=1&playlist=dQw4w9WgXcQ'
    : 'about:blank';
  musicButton.textContent = musicOn ? '■ DETENER LA MUSICA' : '▶ ACTIVAR MUSICA';
  musicStatus.textContent = musicOn
    ? '♫ Sonando en la maquina del tiempo. ¡Sube el volumen! ♫'
    : 'La pista esta lista. Los navegadores necesitan un clic para arrancar el sonido.';
});

guestSubmit.addEventListener('click', () => {
  const name = document.querySelector('#guest-name').value.trim() || 'Visitante anonimo';
  const message = document.querySelector('#guest-message').value.trim() || 'Feliz cumple, Felipe!!!';
  guestStatus.textContent = `>> ${name} dejo un mensaje: ${message}`;
  guestSubmit.textContent = 'FIRMADO!!!';
});

const startingCount = 1337;
let count = startingCount;
setInterval(() => {
  count += 1;
  visitorCounter.textContent = String(count).padStart(7, '0');
}, 5000);
