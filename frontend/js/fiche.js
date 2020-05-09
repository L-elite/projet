"use strict";

function creerFicheScout(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        callbackCreerFicheScout(JSON.parse(xhr.responseText), id)
    };
    xhr.send();
}

function callbackCreerFicheScout(tableau, id) {
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
    div += "</table><button class='button1' onclick='supprimer()'>Supprimer</button></div>";
    document.querySelector(".card#listing div.card-heading").innerHTML = div;
}

