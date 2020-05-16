function supprimer() {
    let xhr = new XMLHttpRequest;
    let id = document.querySelector(".fiche table").id
    let url = "supprimer?Id=" + id;
    xhr.open("get", url);
    xhr.send();
    window.location.reload(false);
    alert("ce scout a bien été supprimé de la liste !!");
}