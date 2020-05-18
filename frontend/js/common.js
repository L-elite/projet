"use strict";

function afficherCarte(card) {
    document.getElementById("inscription").style.display = "none";
    document.getElementById("listing").style.display = "none";
    document.getElementById("recherche").style.display = "none";
    document.getElementById("badges").style.display = "none";
    if (card === 'inscription') {
        document.getElementById("inscription").style.display = "table";
    } else if (card === 'listing') {
        document.getElementById("listing").style.display = "table";
    } else if (card === 'recherche') {
        document.getElementById("recherche").style.display = "table";
    } else if (card === 'badges') {
        document.getElementById("badges").style.display = "table";
    }
}
