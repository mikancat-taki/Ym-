const express = require('express');
const ytdl = require('ytdl-core');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('html')); // フロント配信

// プロキシエンドポイント
app.get('/proxy/:id', async (req, res) => {
  const id = req.params.id;
  if (!ytdl.validateID(id)) return res.status(400).send('Invalid ID');
  try {
    res.header('Content-Type', 'video/mp4');
    ytdl(id, { filter: 'audioandvideo', quality: 'highest' }).pipe(res);
  } catch (e) {
    res.status(500).send('Error!');
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Proxy running on http://localhost:' + PORT));