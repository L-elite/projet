"use strict";

window.addEventListener("load", patrouilles);

function patrouilles() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "scoutspatrouilles");
    xhr.onload = callbackPatrouilles;
    xhr.send();
}

function callbackPatrouilles() {
    let tableau = JSON.parse(this.responseText);
    console.log(tableau)
    let ul = "<ul>"
    for (let e of tableau) {
        ul += "<li onclick='membres(" + e.patrId + ")'>" + e.patrLib + " (" + e.nombreScouts + " scouts)</li>";
        console.log(ul);
    }
    document.querySelector("div.patrouilles").innerHTML = ul;
}

function membres(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "membrespatrouille?patrid=" + id);
    xhr.onload = callbackMembres;
    xhr.send();
}

function callbackMembres() {
    let tableau = JSON.parse(this.responseText);
    let div = "<div class = 'membres'><table>";
    div += "<tr><th> Scout </th><th> Rôle </th></tr>";
    for (let e of tableau) {
        div += "<tr><td>" + e.prenom + " " + e.nom + "</td><td>" + e.role + "</td>";
    }
    div += "</table></div>";
    document.querySelector(".card#patrouilles div.card-heading").innerHTML = div;
}