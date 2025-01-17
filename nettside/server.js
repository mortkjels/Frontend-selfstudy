const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware for å lese JSON-data
app.use(express.json());

// Serverer statiske filer (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Håndterer rot-URL ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Nettside.html')); // Viser Nettside.html
});

// Endepunkt for å lagre data
app.post('/lagre', (req, res) => {
    const { navn, email, melding } = req.body;

    // Lagre data i en fil
    const data = `Navn: ${navn}\nEmail: ${email}\nMelding: ${melding}\n\n`;
    fs.appendFile('kontaktdata.txt', data, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Feil ved lagring.');
        }
        res.status(200).send('Data lagret.');
    });
});

// Start serveren
app.listen(port, () => {
    console.log(`Server kjører på http://localhost:${port}`);
});
