"use strict";

window.addEventListener("load", badges);

function badges() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "scoutsbadges");
    xhr.onload = callbackBadges;
    xhr.send();
}

function callbackBadges() {
    let tableau = JSON.parse(this.responseText);
    console.log(tableau)
    let ul = "<ul>"
    for (let e of tableau) {
        ul += "<li onclick='possedants(" + e.badgeId + ")'>" + e.badgeLib + " (" + e.nombreScouts + " scouts)</li>";
        console.log(ul);
    }
    document.querySelector("div.badges").innerHTML = ul;
}

function possedants(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "possedantsbadge?badgid=" + id);
    xhr.onload = callbackPossedants;
    xhr.send();
}

function callbackPossedants() {
    let tableau = JSON.parse(this.responseText);
    let div = "<div class = 'possedants'><table>";
    div += "<tr><th> Scout </th></tr>";
    for (let e of tableau) {
        div += "<tr><td>" + e.prenom + " " + e.nom + "</td>";
    }
    div += "</table></div>";
    document.querySelector(".card#badges div.card-heading").innerHTML = div;
}