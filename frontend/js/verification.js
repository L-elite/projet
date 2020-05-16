function verification() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        antiDouble(JSON.parse(xhr.responseText), nom, prenom, totem);
    xhr.send();
    }
}


function antiDouble(tableauScout, nom, prenom, totem) {
    let nouveauNom = document.getElementById("nom").value;
    let nouveauPrenom = document.getElementById("prenom").value;
    let nouveauTotem = document.getElementById("dateNaissance").value;
    
    let proprietes = Object.keys(tableau[0]);
    for( let numeroScout of tableauScout) {
        if( (numeroScout.nom === "nouveauNom") && (numeroScout.prenom ==="nouveauPrenom") && (numeroScout.totem === "nouveauTotem")){
            
        }
    }
}