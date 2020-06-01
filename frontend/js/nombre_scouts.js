window.addEventListener("load", afficherNombreScout); //La méthode addEventListener() met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible.

function afficherNombreScout() {
    let xhr = new XMLHttpRequest(); //permet d'envoyer une nouvelle requête HTTP
    xhr.open("get", "nombreDeScout");
    xhr.onload = callbackAffichageNombreScout;
    xhr.send();
}

function callbackAffichageNombreScout() {
    let tableau = JSON.parse(this.responseText);
    let affichage = "<ul id=table>"
    let total = 0;
    for (let e of tableau) {
        total += e.nbrScoutPatrouille;
        let div = "<li value=" + e.idPatrouille +" id=" + e.idPatrouille + ">" + e.nomDePatrouille + " : " + e.nbrScoutPatrouille + "</li>";
        affichage += div;
    }
    affichage += "<li>Total : " + String(total) + "</li>";
    document.getElementById("nombreDeScout").innerHTML = affichage;
}