const express = require('express');
const router = express.Router();

// Route für die Startseite
router.get('/', (req, res) => {
  res.render('index');
});

// Weitere Routen können hier hinzugefügt werden

module.exports = router;