// Beispiel-Middleware-Funktion
const exampleMiddleware = (req, res, next) => {
  // Führe hier die gewünschten Aktionen aus
  console.log('Middleware ausgeführt');
  // Rufe next() auf, um zur nächsten Middleware oder Route fortzufahren
  next();
};

// Exportiere die Middleware-Funktion
module.exports = exampleMiddleware;