const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send([
    {
      id: 1,
      name: 'Стикер аниме',
      category: 'sticker',
    },
    {
      id: 2,
      name: 'Кружка аниме',
      category: 'cup',
    },
    {
      id: 3,
      name: 'Брелки аниме',
      category: 'keychain',
    },
  ]);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
