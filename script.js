let taches = JSON.parse(localStorage.getItem('taches')) || [];

function ajouterTache() {
    const input = document.getElementById('nouvelleTache');
    if (input.value) {
        taches.push(input.value);
        input.value = '';
        sauvegarderEtAfficher();
    }
}

function supprimerTache(index) {
    taches.splice(index, 1);
    sauvegarderEtAfficher();
}

function sauvegarderEtAfficher() {
    localStorage.setItem('taches', JSON.stringify(taches));
    const liste = document.getElementById('listeTaches');
    liste.innerHTML = taches.map((tache, index) => 
        `<li>${tache} <button onclick="supprimerTache(${index})">Supprimer</button></li>`
    ).join('');
}

sauvegarderEtAfficher(); // Charge au démarrage