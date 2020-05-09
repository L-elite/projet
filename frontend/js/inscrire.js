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
 }


function callbackinscrireScouts() {
    let tableauScout = JSON.parse(this.responseText); //

    //console.log(tableauScout.length);
    //console.log(tableauScout[7].Nom);

    let nouveauNom = document.getElementById("nom").value;
    let nouveauPrenom = document.getElementById("prenom").value;
    let nouveauTotem = document.getElementById("dateNaissance").value;
    let dateNaissanceSplit = document.getElementById("dateNaissance").value.split("/");
    let nouveauDateNaissance = dateNaissanceSplit[2] + "-" + dateNaissanceSplit[1] + "-" + dateNaissanceSplit[0];
    let nouveauTelephone = document.getElementById("telephone").value;
    let nouveauMail = document.getElementById("mail").value;
    let nouveauRole = document.getElementById("role").value;
    let nouveauPatrouille = document.getElementById("patrouille").value;

    //console.log(nouveauNom);
    //console.log(tableauScout[0].Nom)
    let trouver = false;
    for( let i = 0; i < tableauScout.length; i++) {
        //console.log(tableauScout[i].Nom);
        //console.log(tableauScout[i].Prénom);
        //console.log(tableauScout[i].Totem);
        if((tableauScout[i].Nom == nouveauNom) && (tableauScout[i].Prénom == nouveauPrenom) && (tableauScout[i].Totem == nouveauTotem)) {
            //console.log(tableauScout[i].Nom);   
            trouver = true;
            //console.log(trouver);
        }

    }

    //console.log(trouver);
    //console.log(nouveauNom);
    //console.log(tableauScout[0].Nom);

    if (trouver == false) {
        //console.log(trouver);
        let url = "inscrire?nom=" + nouveauNom + "&prenom=" + nouveauPrenom + "&dateNaissance=" + nouveauDateNaissance + "&telephone=" + nouveauTelephone + "&email=" + nouveauMail + "&totem=" + nouveauTotem + "&role=" + nouveauRole + "&patrouille=" + nouveauPatrouille;    let xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.send();
        window.location.reload(false);
    }
    if(trouver == true) {
        scoutExisteDeja(); 
    }
}
