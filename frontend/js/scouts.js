"use strict";

// **** //

window.addEventListener("load", listerScouts);

function listerScouts() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "lister");
    xhr.onload = callbackListerScouts;
    xhr.send();
}

function callbackListerScouts() {
    let tableau = JSON.parse(this.responseText);
    if (tableau.length === 0) {
        document.querySelector("div.listing").innerHTML = "<table></table>";
    }
    let proprietes = Object.keys(tableau[0]);
    let table = "<table>";
    let titre = "<tr>";
    for (let e = 1; e < proprietes.length; e++) {
        titre += "<th>" + proprietes[e] + "</th>";
    }
    titre += "</tr>\n";
    table += titre;
    for (let e of tableau) {
        var tr = "<tr id=" + e[proprietes[0]] + " onclick='creerFicheScout(" + e[proprietes[0]] + ")'>";
        for (let f = 1; f < proprietes.length; f++) {
            tr += "<td>" + e[proprietes[f]] + "</td>";
        }
        tr += "</tr>";
        table += tr;
    }
    table += "</table>";
    document.querySelector("div.listing").innerHTML = table;
}

// **** //

function creerFicheScout(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        callbackCreerFicheScout(JSON.parse(xhr.responseText), id)
    };
    xhr.send();
}

function callbackCreerFicheScout(tableau, id) {
    let proprietes = Object.keys(tableau[0]);
    let div = "<div class='fiche'>";
    for (let e of tableau) {
        if (e.Id === id) {
            div += "<table id=" + e.Id + ">";
            for (let f = 1; f < proprietes.length; f++) {
                div += "<tr><td>" + proprietes[f] + "</td><td>" + e[proprietes[f]] + "</td></tr>";
            }
        }
    }
    div += "</table><button class='button1' onclick='supprimer()'>Supprimer</button></div>";
    document.querySelector(".card#listing div.card-heading").innerHTML = div;
}

// **** //

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
                div += "<tr id=" + e[proprietes[0]] + " onclick='creerFicheScout2(" + e[proprietes[0]] + ")'><td>" + e.Prénom + "</td><td>" + e.Nom + "</td></tr>";
            }
        }
    }
    document.querySelector("div.resultats").innerHTML = div;
}

function creerFicheScout2(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        callbackCreerFicheScout2(JSON.parse(xhr.responseText), id)
    };
    xhr.send();
}

function callbackCreerFicheScout2(tableau, id) {
    let proprietes = Object.keys(tableau[0]);
    let div = "<div class='fiche'><table>";
    for (let e of tableau) {
        if (e.Id === id) {
            for (let f = 1; f < proprietes.length; f++) {
                div += "<tr><td>" + proprietes[f] + "</td><td>" + e[proprietes[f]] + "</td></tr>";
            }
        }
    }
    div += "</table><button class='button1' onclick='supprimer()'>Supprimer</button></div>";
    document.querySelector(".card#recherche div.card-heading").innerHTML = div;
}

// **** //

function inscrireScout() {
    let nouveauNom = document.getElementById("nom").value;
    let nouveauPrenom = document.getElementById("prenom").value;
    let nouveauTotem = document.getElementById("dateNaissance").value;
    let dateNaissanceSplit = document.getElementById("dateNaissance").value.split("/");
    let nouveauDateNaissance = dateNaissanceSplit[2] + "-" + dateNaissanceSplit[1] + "-" + dateNaissanceSplit[0];
    let nouveauTelephone = document.getElementById("telephone").value;
    let nouveauMail = document.getElementById("mail").value;
    let nouveauRole = document.getElementById("role").value;
    let nouveauPatrouille = document.getElementById("patrouille").value;

    let table = document.querySelector("div.listing");
    console.log(table);//
    let url = "inscrire?nom=" + nouveauNom + "&prenom=" + nouveauPrenom + "&dateNaissance=" + nouveauDateNaissance + "&telephone=" + nouveauTelephone + "&email=" + nouveauMail + "&totem=" + nouveauTotem + "&role=" + nouveauRole + "&patrouille=" + nouveauPatrouille;    let xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send();
} // Envoie les informations contenues dans le formulaire dans la base de données





/*function inscrireScout() {
    let nouveauNom = document.getElementById("nom").value;
    let nouveauPrenom = document.getElementById("prenom").value;
    let nouveauTotem = document.getElementById("dateNaissance").value;
    let dateNaissanceSplit = document.getElementById("dateNaissance").value.split("/");
    let nouveauDateNaissance = dateNaissanceSplit[2] + "-" + dateNaissanceSplit[1] + "-" + dateNaissanceSplit[0];
    let nouveauTelephone = document.getElementById("telephone").value;
    let nouveauMail = document.getElementById("mail").value;
    let nouveauRole = document.getElementById("role").value;
    let nouveauPatrouille = document.getElementById("patrouille").value;
    
    // let proprietes = Object.keys(tableauScout[0]);

    for( let numeroScout of tableauScout) {
        if( (numeroScout.Nom !== nouveauNom) && (numeroScout.Prénom !== nouveauPrenom) && (numeroScout.Totem !== nouveauTotem) {
            let url = "inscrire?nom=" + nouveauNom + "&prenom=" + nouveauPrenom + "&dateNaissance=" + nouveauDateNaissance + "&telephone=" + nouveauTelephone + "&email=" + nouveauMail + "&totem=" + nouveauTotem + "&role=" + nouveauRole + "&patrouille=" + nouveauPatrouille;
            let xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.send();
        }
        else {
            alert("Désolé, " + nouveauNom + nouveauPrenom + "existe déja !");
        }
    }
}*/

// **** //

function afficherCarte(card) {
    document.getElementById("inscription").style.display = "none";
    document.getElementById("listing").style.display = "none";
    document.getElementById("recherche").style.display = "none";
    if (card === 'inscription') {
        document.getElementById("inscription").style.display = "table";
    } else if (card === 'listing') {
        document.getElementById("listing").style.display = "table";
    } else if (card === 'recherche') {
        document.getElementById("recherche").style.display = "table";
    }
}

// **** //

function confirmer() {
    document.getElementById("cadre").style.display= "none";
    document.getElementById("Confirmer").style.display= "block";
 }

 // **** //

 function supprimer() {
    let xhr = new XMLHttpRequest;
    let id = document.querySelector(".fiche table").id
    let url = "supprimer?Id=" + id
    xhr.open("get", url);
    xhr.send();
    window.location.reload(false);
}

// **** //