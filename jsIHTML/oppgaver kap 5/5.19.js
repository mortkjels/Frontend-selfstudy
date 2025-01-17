function beregnKryssprodukt() {
    // Hent verdiene fra input-feltene
    let x1 = parseFloat(document.getElementById('x1').value);
    //Henter verdien brukeren har skrevet inn i input-feltet.
    //Konverterer verdien fra tekst til tall.
    //Lagrer resultatet i variabelen x1. 
    let y1 = parseFloat(document.getElementById('y1').value);
    let z1 = parseFloat(document.getElementById('z1').value);

    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);
    let z2 = parseFloat(document.getElementById('z2').value);

    // Beregn kryssproduktet
    let x3 = y1 * z2 - y2 * z1;
    let y3 = z1 * x2 - z2 * x1;
    let z3 = x1 * y2 - x2 * y1;

    // Oppdater resultatene i HTML
    document.getElementById('x3').textContent = x3;
    document.getElementById('y3').textContent = y3;
    document.getElementById('z3').textContent = z3;
}