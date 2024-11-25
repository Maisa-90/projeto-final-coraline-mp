const songs = [
    { title: "Despacito - Luis Fonsi", src: "songs/despacito.mp3" },
    { title: "La Bicicleta - Shakira", src: "songs/labicicleta.mp3" },
    { title: "Livin' la Vida Loca - Ricky Martin", src: "songs/livinlavida.mp3" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");

document.getElementById("play").addEventListener("click", playSong);
document.getElementById("pause").addEventListener("click", pauseSong);
document.getElementById("next").addEventListener("click", nextSong);
document.getElementById("prev").addEventListener("click", prevSong);

function playSong() {
    const currentSong = songs[currentSongIndex];
    audio.src = currentSong.src;
    songTitle.textContent = currentSong.title;
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong();
}

function openCountry(url) {
    window.open(url, "_blank");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
