
function sjekksvar(){
    const riktigesvar = {
        q1: "50",
        q2: "central processing unit",
        q3: "header, main, footer",
        q4: ["Konfidensialitet", "integritet", "Tilgjengelighet"],
        q5: "Jon Almaas",
        radio: "10",
        q7: "2",
        q8: "8"
    }

const brukersvar = {
    q1: document.getElementById("q1").value.trim(),
    q2: document.getElementById("q2").value.trim().toLowerCase(),
    q3: document.getElementById("q3").value.trim().toLowerCase(),
    q4: Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(el => el.value.toLowerCase()), 
    q5: document.getElementById("q5").value.trim(),
    radio: document.querySelector('input[name="radio"]:checked')?.value,
    q7: document.getElementById("q7").value.trim(),
    q8: document.getElementById("q8").value.trim()
};

// finne resultat ved if setning

let resultat=""

if (riktigesvar.q1 == brukersvar.q1){
    resultat += "<p> du fikk riktig på spørsmål 1 </p>";
}
document.getElementById("resultat").innerHTML = resultat;
}