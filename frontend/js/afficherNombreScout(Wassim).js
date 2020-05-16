window.addEventListener("load", afficherNombreScout);

function afficherNombreScout() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "nombreDeScout");
    xhr.onload = callbackAffichageNombreScout;
    xhr.send();
}

function callbackAffichageNombreScout() {
    let tableau = JSON.parse(this.responseText);
    let affichage = "<ul id=table>"
    let jesaispas = 0;
    for (let e of tableau) {
        jesaispas += e.nbrScoutPatrouille;
        let div = "<li value=" + e.idPatrouille +" id=" + e.idPatrouille + ">" + e.nomDePatrouille + " : " + e.nbrScoutPatrouille + "</li>";
        affichage += div;
    }
    affichage += "<li>Total :" + String(jesaispas) + "</li>";
    document.getElementById("nombreDeScout").innerHTML = affichage;
}