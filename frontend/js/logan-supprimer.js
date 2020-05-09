"use strict";

function supprimerScout() {
    let xhr = new XMLHttpRequest();
    let id = document.querySelector(".fiche table").id;
    let url = "supprimer?id=" + id;
    xhr.open("get", url);
    xhr.send();
    alert("Le scout a bien été supprimé");
    window.location.reload(false);
}