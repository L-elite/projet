"use strict";

// Fait appel au service "fiche" et renvoie un tableau reprenant tous les scouts et leurs infos
function rechercherScouts() {
    let recherche = document.getElementById("rechercher").value;
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        callbackRechercherScout(JSON.parse(xhr.responseText), recherche);
    };
    xhr.send();
}

// Parcourt le tableau de scouts reçu et retient ceux qui correspondent au critère de recherche puis les place dans une
// table html el les insère dans la page
function callbackRechercherScout(tableau, recherche) {
    afficherCarte('recherche');
    let proprietes = Object.keys(tableau[0]);
    let div = "<div><table>";
    let titre = "<tr><th>Prénom</th><th>Nom</th></tr>";
    div += titre;
    for (let e of tableau) {
        for (let f of proprietes) {
            if (e[f] === recherche) {
                div += "<tr id=" + e[proprietes[0]] + " onclick='creerFicheScout(" + e[proprietes[0]] + ", \"recherche\")'><td>" + e.Prénom + "</td><td>" + e.Nom + "</td></tr>";
            }
        }
    }
    div += "</table></div>";
    document.querySelector("div.resultats").innerHTML = div;
}