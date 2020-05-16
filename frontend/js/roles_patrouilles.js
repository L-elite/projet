"use strict";

window.addEventListener("load", listerRoles);

window.addEventListener("load", listerPatrouilles);


function listerRoles() {   //Onload
    let xhr = new XMLHttpRequest();
    xhr.open("get", "Role");
    xhr.onload = callbackListerRoles;
    xhr.send();
}

function callbackListerRoles() {
    let tableau = JSON.parse(this.responseText);
    let proprietes = Object.keys(tableau[0]);
    let select="<select class='select' id='role' required ><option disabled='disabled' selected='selected' value=''>Rôle</option>";
    for(let e of tableau){
        let option = "<option value=" + e[proprietes[0]] + ">" + e[proprietes[1]] + "</option>";
        select += option;
    }
    select+="</select>";
    document.getElementById("selectRole").innerHTML = select;
}

function listerPatrouilles() {   //Onload
    let xhr = new XMLHttpRequest();
    xhr.open("get", "patrouille");
    xhr.onload = callbackListerPatrouilles;
    xhr.send();
}

function callbackListerPatrouilles() {
    let tableau = JSON.parse(this.responseText);
    //console.log(tableau);
    let proprietes = Object.keys(tableau[0]);
    //console.log(proprietes);
    let select="<select class='select' id='patrouille' required ><option disabled='disabled' selected='selected' value=''>Patrouille</option>";
    for(let e of tableau){
        let option = "<option value=" + e[proprietes[0]] + ">" + e[proprietes[1]] + "</option>";
        select += option;
    }
    select+="</select>";
    document.getElementById("selectPatrouille").innerHTML = select;
}