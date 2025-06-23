<?php
// Conexão com banco de dados (ajuste para seu ambiente)
$pdo = new PDO("mysql:host=localhost;dbname=quiz", "usuario", "senha");

// Dados recebidos via POST
$nome = $_POST['nome'];
$pontuacao = $_POST['pontuacao'];

// Inserção no banco
$stmt = $pdo->prepare("INSERT INTO ranking (nome, pontuacao) VALUES (?, ?)");
$stmt->execute([$nome, $pontuacao]);

echo "Pontuação salva com sucesso!";
?>
