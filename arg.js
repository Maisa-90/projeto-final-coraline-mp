// Destacar o país ao passar o mouse
function highlight(element) {
    element.style.transform = 'scale(1.1)';
    element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
}

// Remover o destaque ao sair do mouse
function unhighlight(element) {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = 'none';
}

// Redirecionar para a página do país ao clicar
function redirectToCountry(page) {
    window.location.href = page;
}

// Playlist de músicas
const songs = [
    { src: 'caetano.mp3', title: 'Desde que o samba é samba - Caetano' },
    { src: 'tim.mp3', title: 'A Festa do Santo Reis - Tim Maia' },
];

let currentSongIndex = 0;

const audioElement = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const playlistSongs = document.getElementById('playlist-songs');

function playSong(index) {
    currentSongIndex = index;
    audioSource.src = songs[index].src;
    audioElement.load();
    audioElement.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

// Inicializar a playlist
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.onclick = () => playSong(index);
    playlistSongs.appendChild(li);
});
