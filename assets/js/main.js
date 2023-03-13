const groesse = document.getElementById("groesse");
const alter = document.getElementById("alter");
const gewicht = document.getElementById("gewicht");
const mann = document.getElementById("mann");
const frau = document.getElementById("frau");
const btn = document.getElementById("btn");
const liste = document.getElementById("liste");


function berechnen() {
    const mannGrundumsatz = 664.7 + (13.7 * gewicht.value) + (5 * groesse.value) - (6.8 * alter.value);
    const frauGrundumsatz = 655.1 + (9.6 * gewicht.value) + (1.8 * groesse.value) - (4.7 * alter.value);

    if (mann.checked && liste.value==0) {
        document.getElementById("grundCal").innerHTML = mannGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (mannGrundumsatz * 0.95).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (mannGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (mannGrundumsatz * 4.1868 * 0.95).toFixed(3);
    } else if (mann.checked && liste.value==1) {
        document.getElementById("grundCal").innerHTML = mannGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (mannGrundumsatz * 1.2).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (mannGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (mannGrundumsatz * 4.1868 * 1.2).toFixed(3);
    } else if (mann.checked && liste.value==2) {
        document.getElementById("grundCal").innerHTML = mannGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (mannGrundumsatz * 1.5).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (mannGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (mannGrundumsatz * 4.1868 * 1.5).toFixed(3);
    } else if (mann.checked && liste.value==3) {
        document.getElementById("grundCal").innerHTML = mannGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (mannGrundumsatz * 1.7).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (mannGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (mannGrundumsatz * 4.1868 * 1.7).toFixed(3);
    } else if (mann.checked && liste.value==4) {
        document.getElementById("grundCal").innerHTML = mannGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (mannGrundumsatz * 1.9).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (mannGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (mannGrundumsatz * 4.1868 * 1.9).toFixed(3);
    } else if (mann.checked && liste.value==5) {
        document.getElementById("grundCal").innerHTML = mannGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (mannGrundumsatz * 2.2).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (mannGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (mannGrundumsatz * 4.1868 * 2.2).toFixed(3);
    } else if (frau.checked && liste.value==0) {
        document.getElementById("grundCal").innerHTML = frauGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (frauGrundumsatz * 0.95).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (frauGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (frauGrundumsatz * 4.1868 * 0.95).toFixed(3);
    } else if (frau.checked && liste.value==1) {
        document.getElementById("grundCal").innerHTML = frauGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (frauGrundumsatz * 1.2).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (frauGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (frauGrundumsatz * 4.1868 * 1.2).toFixed(3);
    } else if (frau.checked && liste.value==2) {
        document.getElementById("grundCal").innerHTML = frauGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (frauGrundumsatz * 1.5).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (frauGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (frauGrundumsatz * 4.1868 * 1.5).toFixed(3);
    } else if (frau.checked && liste.value==3) {
        document.getElementById("grundCal").innerHTML = frauGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (frauGrundumsatz * 1.7).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (frauGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (frauGrundumsatz * 4.1868 * 1.7).toFixed(3);
    } else if (frau.checked && liste.value==4) {
        document.getElementById("grundCal").innerHTML = frauGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (frauGrundumsatz * 1.9).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (frauGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (frauGrundumsatz * 4.1868 * 1.9).toFixed(3);
    } else if (frau.checked && liste.value==5) {
        document.getElementById("grundCal").innerHTML = frauGrundumsatz.toFixed(3);
        document.getElementById("gesamtCal").innerHTML = (frauGrundumsatz * 2.2).toFixed(3);
        document.getElementById("grundJoul").innerHTML =
        (frauGrundumsatz * 4.1868).toFixed(3);
        document.getElementById("gesamtJoul").innerHTML =
        (frauGrundumsatz * 4.1868 * 2.2).toFixed(3);
    }
    

}



// 1,7
// Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer, Kellner, Handwerker, Mechaniker, Hausfrauen
// 1,9
// Körperlich anstrengende berufliche Arbeit
// 2,2




