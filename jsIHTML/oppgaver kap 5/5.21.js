let påstand1 = 20 < 20
let påstand2 = 150 >= 50
let påstand3 = 15 === "15"
let påstand4 = 23 === Math.floor(23.9)
let påstand5 = Math.sqrt(1010) < 30
let påstand6 = Math.max(-10, 35, 5, 27.3) < 30
let påstand7 = Math.abs(Math.min(-10, -35, 37, 7)) > Math.max(10,-37,35,-7)

let påstander = [påstand1,påstand2,påstand3,påstand4,påstand5,påstand6,påstand7]

let resultatTekst = "";

// Gå gjennom og evaluer påstandene
påstander.forEach((påstand, index) => {
    // Legg til resultat for hver påstand
    resultatTekst += `Påstand ${index + 1}: ${påstand ? "TRUE" : "FALSE"}<br>`;
});
document.getElementById("resultat").innerHTML = resultatTekst;
