function generateRandomSong() {
  const selectedMood = document.getElementById("moodSelect").value;
  const resultBox = document.getElementById("songResult");
  const cd = document.querySelector(".cd");

  if (!selectedMood) {
    resultBox.innerHTML = "<p>Please select a mood first.</p>";
    return;
  }

  const moodData = songsByMood[selectedMood];

  if (!moodData || !moodData.songs || moodData.songs.length === 0) {
    resultBox.innerHTML = "<p>No songs found for that mood yet.</p>";
    return;
  }

  const songs = moodData.songs;
  const randomIndex = Math.floor(Math.random() * songs.length);
  const randomSong = songs[randomIndex];

  if (cd) {
    cd.classList.remove("spinning");
    void cd.offsetWidth;
    cd.classList.add("spinning");
  }

  resultBox.innerHTML = `
    <div class="song-title">${moodData.emoji} ${randomSong.title}</div>
    <div class="song-artist">by ${randomSong.artist}</div>
    <div class="song-description">${moodData.description}</div>
  `;
}