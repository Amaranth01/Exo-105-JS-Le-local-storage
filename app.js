let result = document.getElementById('result');
const storage = window.localStorage;
storage.setItem('key', 'Game');

function texte() {
    result.innerHTML = storage.getItem('key');
    console.log("Thème Red, type Game et police de caractères 20 px");
}

texte();