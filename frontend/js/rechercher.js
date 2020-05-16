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
                div += "<tr id=" + e[proprietes[0]] +" onclick='creerFicheScout(" + e[proprietes[0]] + ", \"recherche\")'><td>" + e.Prénom + "</td><td>" + e.Nom + "</td></tr>";
            }
        }
    }
    document.querySelector("div.resultats").innerHTML = div;
}
