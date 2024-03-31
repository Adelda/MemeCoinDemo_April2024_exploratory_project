const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sert les fichiers dans le dossier public
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Le serveur est en fonctionnement sur le port ${port}`);
});
