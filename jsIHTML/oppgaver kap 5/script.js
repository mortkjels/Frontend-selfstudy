let ord = "foo"
let ordMedBindestreker = ord.split("").join("-")

document.getElementById("foo").innerHTML = `
${ord} staves på følgende måte ${ordMedBindestreker}`

