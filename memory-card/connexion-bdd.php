<?php
// connexion.php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define('DB_NAME', 'memory-card');

try {
    // Connexion à la base de données avec PDO
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASSWORD);
    // Configuration pour gérer les erreurs en mode exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Requête pour récupérer toutes les cartes
    $sql = "SELECT Date, Definition, Image_url FROM Cartes";
    $statement = $pdo->prepare($sql);
    $statement->execute();

    // Récupérer les résultats sous forme de tableau associatif
    $cartes = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Envoyer les données au format JSON
    header('Content-Type: application/json');
    echo json_encode($cartes);
} catch(PDOException $e) {
    // En cas d'erreur de connexion à la base de données
    die("La connexion à la base de données a échoué : " . $e->getMessage());
}
?>
