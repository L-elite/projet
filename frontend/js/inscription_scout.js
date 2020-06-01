"use strict";

// Envoie les informations contenues dans le formulaire dans la base de données
function inscrireScout() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let dateNaissanceSplit = document.getElementById("dateNaissance").value.split("/");
    let dateNaissance = dateNaissanceSplit[2] + "-" + dateNaissanceSplit[1] + "-" + dateNaissanceSplit[0];
    let telephone = document.getElementById("telephone").value;
    let mail = document.getElementById("mail").value;
    let totem = document.getElementById("totem").value;
    let role = document.getElementById("role").value;
    let patrouille = document.getElementById("patrouille").value;
    if (nom !== "" && prenom !== "" && dateNaissance !== "" && telephone !== "" && mail !== "" && totem !== "" && patrouille !== "" && role !== "") {
        let xhr = new XMLHttpRequest();
        xhr.open("get", "fiche");
        xhr.onload = callbackInscrireScout;
        xhr.send();
    }
    else {
        alert("Veuillez compléter tous les champs");
    }
}

function callbackInscrireScout() {
    let tableau = JSON.parse(this.responseText);
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let dateNaissanceSplit = document.getElementById("dateNaissance").value.split("/");
    let dateNaissance = dateNaissanceSplit[2] + "-" + dateNaissanceSplit[1] + "-" + dateNaissanceSplit[0];
    let telephone = document.getElementById("telephone").value;
    let mail = document.getElementById("mail").value;
    let totem = document.getElementById("totem").value;
    let role = document.getElementById("role").value;
    let patrouille = document.getElementById("patrouille").value;
    let unique = true;
    for (let e of tableau){
        if (e.Nom === nom && e.Prénom === prenom && e.Totem === totem){
            unique = false;
        }
    }
    if (unique === true){
        let url = "inscrire?nom=" + nom + "&prenom=" + prenom + "&dateNaissance=" + dateNaissance + "&telephone=" + telephone + "&mail=" + mail + "&totem=" + totem + "&role=" + role + "&patrouille=" + patrouille;
        let xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.send();
        alert("Votre inscription a bien été prise en compte");
        window.location.reload(false);
    } else {
        alert("Ce scout existe déjà");
    }
}


