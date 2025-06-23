<?php
// Configurações do banco
$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'seu_banco';

$conn = new mysqli($host, $usuario, $senha, $banco);
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Recebe o nome do jogador
$nome = $_POST['nome'] ?? '';

// Exemplo simples de cálculo de pontuação
// Aqui você ajusta conforme seu quiz e critérios de resposta
$pontuacao = 0;

// Exemplo: se pergunta 1 for "a", pontua 1 ponto
if (isset($_POST['pergunta1']) && $_POST['pergunta1'] === 'a') {
    $pontuacao += 1;
}
// Repita para outras perguntas...

// Insere no banco de dados
$stmt = $conn->prepare("INSERT INTO jogadores (nome, pontuacao) VALUES (?, ?)");
$stmt->bind_param("si", $nome, $pontuacao);
$stmt->execute();

$stmt->close();
$conn->close();

// Redireciona para a página do ranking ou para uma página de agradecimento
header("Location: ranking.php");
exit();
