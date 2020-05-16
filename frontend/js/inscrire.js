"use strict";

function inscrireScouts() {
    let nouveauNom = document.getElementById("nom").value;
    let nouveauPrenom = document.getElementById("prenom").value;
    let nouveauTotem = document.getElementById("dateNaissance").value;
    let dateNaissanceSplit = document.getElementById("dateNaissance").value.split("/");
    let nouveauDateNaissance = dateNaissanceSplit[2] + "-" + dateNaissanceSplit[1] + "-" + dateNaissanceSplit[0];
    let nouveauTelephone = document.getElementById("telephone").value;
    let nouveauMail = document.getElementById("mail").value;
    let nouveauRole = document.getElementById("role").value;
    let nouveauPatrouille = document.getElementById("patrouille").value;

    if (nouveauNom !== "" && nouveauPrenom !== "" && nouveauDateNaissance !== "" && nouveauTelephone !== "" && nouveauMail !== "" && nouveauTotem !== "" && nouveauPatrouille !== "" && nouveauRole !== "") {
        let xhr = new XMLHttpRequest();
        xhr.open("get", "fiche");
        xhr.onload = callbackinscrireScouts;
        xhr.send();
    } else {
        confirmer();
    }
}


function scoutExisteDeja() {
    document.getElementById("cadre").style.display= "none";
    document.getElementById("existeDeja").style.display= "block";
    document.getElementById("nombreDeScout").style.display= "none";
 }


 function callbackinscrireScouts() {
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
        let url = "inscrire?nom=" + nom + "&prenom=" + prenom + "&dateNaissance=" + dateNaissance + "&telephone=" + telephone + "&email=" + mail + "&totem=" + totem + "&role=" + role + "&patrouille=" + patrouille;
        let xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.send();
        //console.log(mail);
        alert("Votre inscription a bien été prise en compte");
        window.location.reload(false);
    } else {
        scoutExisteDeja();
    }
}