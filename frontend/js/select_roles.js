"use strict";

window.addEventListener("load", listerRoles);

function listerRoles() {   //Onload
    let xhr = new XMLHttpRequest();
    xhr.open("get", "roles");
    xhr.onload = callbackListerRoles;
    xhr.send();
}

function callbackListerRoles() {
    let tableau = JSON.parse(this.responseText);
    let proprietes = Object.keys(tableau[0]);
    let select="<select class='select' id='role'><option disabled='disabled' selected='selected'>Rôle</option>";
    for(let e of tableau){
        let option = "<option value=" + e[proprietes[0]] + ">" + e[proprietes[1]] + "</option>";
        select += option;
    }
    select+="</select>";
    document.getElementById("selectRole").innerHTML = select;
}