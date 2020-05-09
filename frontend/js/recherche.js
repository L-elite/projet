"use strict";

function rechercherScouts() {
    let recherche = document.getElementById("rechercher").value;
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        callbackRechercherScout(JSON.parse(xhr.responseText), recherche);
    };
    xhr.send();
}

function callbackRechercherScout(tableau, recherche) {
    afficherCarte('recherche');
    let proprietes = Object.keys(tableau[0]);
    let div = "<div><table>";
    let titre = "<tr><th>Prénom</th><th>Nom</th></tr>";
    div += titre;
    for (let e of tableau) {
        for (let f of proprietes) {
            if (e[f] === recherche) {
                div += "<tr id=" + e[proprietes[0]] + " onclick='creerFicheScout2(" + e[proprietes[0]] + ")'><td>" + e.Prénom + "</td><td>" + e.Nom + "</td></tr>";
            }
        }
    }
    document.querySelector("div.resultats").innerHTML = div;
}

function creerFicheScout2(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        callbackCreerFicheScout2(JSON.parse(xhr.responseText), id)
    };
    xhr.send();
}

function callbackCreerFicheScout2(tableau, id) {
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
    div += "</table><button class='button1  ' onclick='supprimer()'>Supprimer</button></div>";
    document.querySelector(".card#recherche div.card-heading").innerHTML = div;
}