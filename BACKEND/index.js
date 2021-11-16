import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Running..');
});

app.get('/api/team', (req, res) => {
  res.json('');
});

app.listen(3000, function (err) {
  console.log('The server is running');
});
