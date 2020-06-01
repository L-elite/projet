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
    div += "</table></div>";
    document.querySelector(".card#" + card + " div.card-heading").innerHTML = div;
    listerBadges(id, card);
}

function listerBadges(id, card) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "badges?id=" + id)
    xhr.onload = function () {
        callbackListerBadges(JSON.parse(xhr.responseText), card)
    }
    xhr.send();
}

function callbackListerBadges(tableau, card) {
    let ul = "<ul>";
    for (let e of tableau) {

        let li = "<li>" + e.badgeLib + "</li>";
        ul += li;
    }
    ul += "</ul><button class='button' onclick='supprimerScout()'>Supprimer</button>";
    document.querySelector(".card#" + card + " div.card-heading div.fiche").innerHTML += ul;
}