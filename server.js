// Erforderliche Module importieren
const express = require('express');
const path = require('path');
const port = require('./config/port');

// App erstellen
const app = express();

// Middleware für statische Dateien einrichten
app.use(express.static(path.join(__dirname, 'public')));

// Middleware für den Body-Parser einrichten
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routen importieren
const siteRouter = require('./routing/site_routing');

// Routen verwenden
app.use('/', siteRouter);

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});