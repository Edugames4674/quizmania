<?php
header('Content-Type: application/json');

// Conexão com o banco
$host = 'localhost';
$db   = 'quiz';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Erro de conexão: ' . $e->getMessage()]);
    exit;
}

// Pega os dados do JSON
$data = json_decode(file_get_contents('php://input'), true);

$nome = $data['nome'] ?? '';
$tema = $data['tema'] ?? '';
$pontuacao = $data['pontuacao'] ?? 0;

// Validação simples
if (!$nome || !$tema || !is_numeric($pontuacao)) {
    echo json_encode(['success' => false, 'error' => 'Dados inválidos']);
    exit;
}

// Insere no banco
$sql = "INSERT INTO ranking (jogador, tema, pontuacao) VALUES (?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$nome, $tema, $pontuacao]);

echo json_encode(['success' => true]);
