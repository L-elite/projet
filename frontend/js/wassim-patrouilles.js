"use strict";

window.addEventListener("load", listerPatrouilles);

function listerPatrouilles() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "patrouilles");
    xhr.onload = callbackListerPatrouilles;
    xhr.send();
}

function callbackListerPatrouilles() {
    let tableau = JSON.parse(this.responseText);
    let proprietes = Object.keys(tableau[0]);
    let select="<select class='select' id='patrouille'><option disabled='disabled' selected='selected'>Patrouille</option>";
    for(let e of tableau){
        let option = "<option value=" + e[proprietes[0]] + ">" + e[proprietes[1]] + "</option>";
        select += option;
    }
    select+="</select>";
    document.getElementById("selectPatrouille").innerHTML = select;
}