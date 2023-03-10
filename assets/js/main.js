console.log("läuft");

const input = document.getElementById("inputnum");
const nettoBrutto = document.getElementById("add");
const bruttoNetto = document.getElementById("sub");
const steuersatz7 = document.getElementById("steuersatz7");
const steuersatz19 = document.getElementById("steuersatz19");
const ergebnismwst = document.getElementById("ergebnismwst");
const ergebnis = document.getElementById("ergebnis");
const endBetrag = document.getElementById("endBetrag"); 
const textMwst = document.getElementById("textMwst");


let calc = () => {

    if (nettoBrutto.checked == true && steuersatz19.checked == true) {
        ergebnis.innerHTML = (input.value * 1.19).toFixed(2).concat("€");
        ergebnismwst.innerHTML = (input.value * 0.19).toFixed(2).concat("€");
        endBetrag.innerHTML = ("Bruttobetrag (Endpreis)");
    }

    else if (nettoBrutto.checked == false && steuersatz19.checked == true) {
        ergebnis.innerHTML = (input.value / 1.19).toFixed(2).concat("€");
        ergebnismwst.innerHTML = (input.value / 1.19 * 0.19).toFixed(2).concat("€");
        endBetrag.innerHTML = ("Nettobetrag");
    }

    else if (nettoBrutto.checked == true && steuersatz7.checked == true) {
        ergebnis.innerHTML = (input.value * 1.07).toFixed(2).concat("€");
        ergebnismwst.innerHTML = (input.value * 0.07).toFixed(2).concat("€");
        endBetrag.innerHTML = ("Bruttobetrag (Endpreis)");
    }

    else if (nettoBrutto.checked == false && steuersatz7.checked == true) {
        ergebnis.innerHTML = (input.value / 1.07).toFixed(2).concat("€");
        ergebnismwst.innerHTML = (input.value / 1.07 * 0.07).toFixed(2).concat("€");
        endBetrag.innerHTML = ("Nettobetrag");
    }
    }

let text = () => {
    if (netto.Brutto == true) {
    textMwst.innerHTML = ("Nettobetrag (Preis ohne Mehrwersteuer) in Euro");
    } else { 
        textMwst.innerHTML = ("Bruttobetrag (Preis inklusive Mehrwersteuer) in Euro");
    }
}
