fetch('./connexion-bdd.php') // Modifier l'URL si nécessaire
    .then(response => response.json())
    .then(data => {
        // Pour chaque carte dans les données récupérées
        data.forEach(carte => {
            // Créer un élément de carte
            var carteElement = document.createElement('div');
            carteElement.classList.add('carte');
            carteElement.setAttribute('data-date', carte.Date);

            // Créer une image à l'intérieur de la carte
            var imageElement = document.createElement('img');
            imageElement.src = carte.Image_url;
            imageElement.alt = "Carte";
            
            // Ajouter l'image à la carte
            carteElement.appendChild(imageElement);

            // Ajouter la carte au conteneur des cartes
            document.getElementById('cartes').appendChild(carteElement);
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));

document.querySelectorAll('.carte').forEach(function(carte) {
    carte.addEventListener('click', function() {
        var date = prompt("Entrez la date correspondante à cette image (AAAA-MM-JJ) :");
        var carteDate = this.getAttribute('data-date');
        
        if (date === carteDate) {
            this.style.display = 'none';
            alert("Bravo, bonne réponse !");
        } else {
            alert("Désolé, mauvaise réponse. Veuillez réessayer.");
        }
    });
});
