"use strict";

function creerFicheScout(id, card) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        callbackCreerFicheScout(JSON.parse(xhr.responseText), id, card)
    };
    xhr.send();
}

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
    div += "</table><button class='button1' onclick='supprimer()'>Supprimer</button></div>";
    document.querySelector(".card#"+card+" div.card-heading").innerHTML = div;
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
