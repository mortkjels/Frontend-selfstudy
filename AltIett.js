(() => {
    localStorage.Overskrift = "Velkommen til Avslutningsprosjektet mitt" //localstorage gjør at dataen er varig og forsvinner ikke når du lukker nettleseren. 
    //Kunne brukt sessionstorage men da er kun dataen lagret mens nettleseren er åpen. 
    document.getElementById("overskrift").innerHTML = localStorage.Overskrift;
})();

(() => { //pil funksjon, hensiktsmessig når vi vil gjøre en enkelt operasjon  
    let r = Math.random().toFixed(2);
    const O = (2 * r * Math.PI).toFixed(2);
    const A = (2 * r * r * Math.PI).toFixed(2);

    document.getElementById("Areal").innerHTML = `Omkretsen til en sirkel er: ${O} <br>
    Arealet til en sirkel er: ${A}`;
})();

//løsning om man vil sette det som en funksjon.
// function calculateCircleMetrics() {
//     let r = Math.random().toFixed(2); // Tilfeldig radius med to desimaler
//     const O = (2 * r * Math.PI).toFixed(2); // Omkrets
//     const A = (r * r * Math.PI).toFixed(2); // Areal

//     document.getElementById("Areal").innerHTML = `Omkretsen til en sirkel er: ${O} <br>
//     Arealet til en sirkel er: ${A}`;
// }

// Kall funksjonen for å utføre beregningen
calculateCircleMetrics();


(() => { //For å hente fra json filen
    const HenterDetektiv = async () => { //Definerer en konstant variabel som inneholder en funksjon, er en asynkron funksjon
        try {
            // Hent JSON-filen
            const detektiver = await fetch("AltIett.json");
            const data = await detektiver.json(); // Parse JSON-data

            // Sett dataene i HTML
            document.getElementById("Detektiv").innerHTML = data.detektiver.join(", ");

            // Logg dataene i konsollen
            console.log(data);
        } catch (error) {
            console.error("Feil:", error);
        }
    };

    HenterDetektiv(); // Kall funksjonen
})();



// ikke asynkron funksjon
// (() => { // For å hente fra JSON-filen
//     function HenterDetektiv() {
//         // Hent JSON-filen
//         fetch("AltIett.json")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP-feil! Status: ${response.status}`);
//                 }
//                 return response.json(); // Parse JSON-data
//             })
//             .then(data => {
//                 // Sett dataene i HTML
//                 document.getElementById("Detektiv").innerHTML = data.detektiver.join(", ");

//                 // Logg dataene i konsollen
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.error("Feil:", error);
//             });
//     }

//     HenterDetektiv(); // Kall funksjonen
// })();


(() => { //For å hente API
    let joke; // Variabel for å holde vitsen

    const getJoke = async () => {
        try {
            const data = await fetch("https://api.chucknorris.io/jokes/random");
            const jsone = await data.json();
            joke = jsone.value; // Hent vitsen fra JSON-dataen

            // Oppdater vitsen på siden
            document.getElementById("joke").innerText = joke;
        } catch (error) {
            console.error("Kunne ikke hente vits:", error);
            document.getElementById("joke").innerText = "Kunne ikke laste inn vits.";
        }
    };

    // Hent første vits når siden lastes
    getJoke();

    // Gjør getJoke tilgjengelig globalt
    window.getJoke = getJoke;
})();


    //GJøre den global siden vi har den inne i en
    //Immediately Invoked Function Expression (IIFE), 
    //og derfor er den ikke tilgjengelig globalt for knappen å kalle på
//Bruker her en anonym funksjon for å pakke inn for å unngå globale variabler.  
