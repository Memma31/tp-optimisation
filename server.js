const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();


// Middleware de log avec morgan
app.use(morgan('dev'));


app.get('/', (req, res) => {
res.send('Hello world — serveur volontairement non optimisé mais fonctionnel');
});


app.get('/big', (req, res, next) => {
const filePath = path.join(__dirname, 'maybe-big-file.txt');
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return res.status(404).send('Fichier introuvable');

    const stream = fs.createReadStream(filePath, 'utf8');
    stream.on('error', next);
    res.setHeader('Content-Type', 'text/html');
    stream.pipe(res);
  });
});

app.use((err, req, res, next) => {
console.error(err);
res.status(500).send('Erreur serveur');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Serveur démarré sur le port ${PORT}`);
});