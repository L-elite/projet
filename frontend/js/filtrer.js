"use strict";

function filtreur(){
    let xhr = new XMLHttpRequest(); // permet d'envoyer une nouvelle requête de demande de données a un serveur web / permet l'interraction avec des serveurs
    xhr.open("get", "patrouille"); // initialise la requête créé avec comme paramètre la méthode "GET" et le nom de mon service
    xhr.onload = callbackCreationFiltreur; // permet de lancer la fonction "callbackCreationFiltreur" lorsque la requête XMLHttpRequest a été complété/terminé avec succès
    xhr.send(); // envoie la requête au serveur
    
}

function callbackCreationFiltreur(){
    let tableau = JSON.parse(this.responseText); // La méthode JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne
    // THIS fais référence au XHR de la fonction au dessus //XHR.responseText envoie Une chaîne de caractères qui contient la réponse à la requête sous forme de texte ou la valeur null si la requête a échoué ou n'a pas encore été envoyée
    let proprietes = Object.keys(tableau[0]); // renvoie un array  
    let select="<select class='select' id='patr' onchange='filtrage()'><option disabled='disabled' selected='selected' value=''>Patrouille</option>"; // création du Select
    for(let e of tableau){
        let option = "<option value=" + e[proprietes[0]] + ">" + e[proprietes[1]] + "</option>"; // création des options
        select += option;
    }
    select+="</select>"; // fermeture du Select
    document.getElementById("filtreur").innerHTML = select; // insertion dans le HTML
}


function filtrage(){
    let id= document.getElementById("patr").value; // récupération des idsdes option
    let xhr = new XMLHttpRequest();
    let url= "filtrer?id=" + id; // l'url permet d'appeler le service avec ses paramètres
    xhr.open("get", url );//lance la nouvelle requête et permet l'envoie des paramètres dont le service a besoin
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


