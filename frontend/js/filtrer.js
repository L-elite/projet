"use strict";

function filtreur(){
    let xhr = new XMLHttpRequest();
    xhr.open("get", "patrouille");
    xhr.onload = callbackCreationFiltreur;
    xhr.send();
    
}

function callbackCreationFiltreur(){
    let tableau = JSON.parse(this.responseText);
    let proprietes = Object.keys(tableau[0]);
    let select="<select class='select' id='patr' onchange='filtrage()'><option disabled='disabled' selected='selected' value=''>Patrouille</option>";
    for(let e of tableau){
        let option = "<option value=" + e[proprietes[0]] + ">" + e[proprietes[1]] + "</option>";
        select += option;
    }
    select+="</select>";
    document.getElementById("filtreur").innerHTML = select;
}


function filtrage(){
    let id= document.getElementById("patr").value;
    console.log(id);
    let xhr = new XMLHttpRequest();
    let url= "filtrer?id=" + id;
    xhr.open("get", url );
    xhr.onload = callbackFiltrage;
    xhr.send();
}

function callbackFiltrage(){
    let tableau = JSON.parse(this.responseText);
    let proprietes = Object.keys(tableau[0]);
    if (tableau.length === 0) {
        document.querySelector("div.listing").innerHTML = "<table></table>";
    }
    let table = "<table>";
    let titre = "<tr>";
    for (let e = 1; e <((proprietes.length)-1); e++ ) {
        titre += "<th>" + proprietes[e] + "</th>";
    }
    titre += "</tr>";
    table += titre;
    for (let e of tableau) {
        var tr = "<tr id=" + e[proprietes[0]] + " onclick='creerFicheScout(" + e[proprietes[0]] + ", \"listing\")'>";
        for (let f = 1; f < ((proprietes.length)-1); f++) {
            tr += "<td>" + e[proprietes[f]] + "</td>";
        }
        tr += "</tr>";
        table += tr;
    }
    table += "</table>";
    document.querySelector("div.listing").innerHTML = table;
}


