document.getElementById('kontaktSkjema').addEventListener('submit', async function (e) {
    e.preventDefault(); // Hindrer siden fra å oppdatere

    // Hent data fra skjemaet
    const navn = document.getElementById('navn').value;
    const email = document.getElementById('email').value;
    const melding = document.getElementById('melding').value;

    // Send data til serveren med fetch
    const response = await fetch('http://localhost:3000/lagre', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ navn, email, melding }),
    });

    if (response.ok) {
        alert('Melding lagret!');
    } else {
        alert('Feil ved lagring.');
    }
});
