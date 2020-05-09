"use strict";

// Fait appel au service "fiche" et renvoie un tableau reprenant tous les scouts et leurs infos
function creerFicheScout(id, card) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        callbackCreerFicheScout(JSON.parse(xhr.responseText), id, card)
    };
    xhr.send();
}

//Transforme le tableau reçu en une table html et l'insère dans la page
function callbackCreerFicheScout(tableau, id, card) {
    let proprietes = Object.keys(tableau[0]);
    let div = "<div class='fiche'>";
    for (let e of tableau) {
        if (e.Id === id) {
            div += "<table id=" + e.Id + ">";
            for (let f = 1; f < proprietes.length; f++) {
                div += "<tr><td>" + proprietes[f] + "</td><td>" + e[proprietes[f]] + "</td></tr>";
            }
        }
    }
    div += "</table><button class='button' onclick='supprimerScout()'>Supprimer</button></div>";
    document.querySelector(".card#" + card + " div.card-heading").innerHTML = div;
}