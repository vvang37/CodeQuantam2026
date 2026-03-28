function generateRandomSong() {
  const selectedMood = document.getElementById("moodSelect").value;
  const resultBox = document.getElementById("songResult");
  const screenMood = document.getElementById("screenMood");
  const screenText = document.getElementById("screenText");

  if (!selectedMood) {
    resultBox.innerHTML = "<p>Please select a mood first.</p>";
    screenMood.textContent = "No mood selected";
    screenText.textContent = "Choose a mood to begin.";
    return;
  }

  const moodData = songsByMood[selectedMood];

  if (!moodData || !moodData.songs || moodData.songs.length === 0) {
    resultBox.innerHTML = "<p>No songs found for that mood yet.</p>";
    screenMood.textContent = "Mood unavailable";
    screenText.textContent = "No songs found.";
    return;
  }

  const songs = moodData.songs;
  const randomIndex = Math.floor(Math.random() * songs.length);
  const randomSong = songs[randomIndex];

  screenMood.textContent = `${moodData.emoji} ${selectedMood.toUpperCase()}`;
  screenText.textContent = `${randomSong.title} — ${randomSong.artist}`;

  resultBox.innerHTML = `
    <div class="song-title">${moodData.emoji} ${randomSong.title}</div>
    <div class="song-artist">by ${randomSong.artist}</div>
    <div class="song-description">${moodData.description}</div>
  `;
}