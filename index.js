const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Backend läuft ✅ (Platzhalter, noch kein echter Coaching-Bot-Code)');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
