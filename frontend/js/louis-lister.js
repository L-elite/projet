"use strict";

window.addEventListener("load", listerScouts);

// Fait appel au service "lister" et renvoie un tableau reprenant l'id, le prenom  et le nom de chaque scout
function listerScouts() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "lister");
    xhr.onload = callbackListerScouts;
    xhr.send();
}

// Transforme le tableau reçu en une table html et l'insère dans la page
function callbackListerScouts() {
    let tableau = JSON.parse(this.responseText);
    if (tableau.length === 0) {
        document.querySelector("div.listing").innerHTML = "<table></table>";
    }
    let proprietes = Object.keys(tableau[0]);
    let table = "<table>";
    let titre = "<tr>";
    for (let e = 1; e < proprietes.length; e++) {
        titre += "<th>" + proprietes[e] + "</th>";
    }
    titre += "</tr>\n";
    table += titre;
    for (let e of tableau) {
        var tr = "<tr id=" + e[proprietes[0]] + " onclick='creerFicheScout(" + e[proprietes[0]] + ", \"listing\")'>";
        for (let f = 1; f < proprietes.length; f++) {
            tr += "<td>" + e[proprietes[f]] + "</td>";
        }
        tr += "</tr>";
        table += tr;
    }
    table += "</table>";
    document.querySelector("div.listing").innerHTML = table;
}