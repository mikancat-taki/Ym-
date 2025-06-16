document.getElementById('ytform').addEventListener('submit', async function(e) {
  e.preventDefault();
  const input = document.getElementById('ytid').value.trim();
  if (!input) return;
  // YouTube URLまたはIDから動画IDを抽出
  const id = input.match(/(?:v=|youtu\.be\/|youtube\.com\/shorts\/)?([a-zA-Z0-9_-]{11})/)?.[1] || input;
  const video = document.getElementById('player');
  video.src = `/proxy/${id}`;
  video.load();
  video.play();
});
