<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$host = "localhost";
$user = "root";
$senha = "";
$banco = "avaliacoes_site";

// Criar conexão
$conn = new mysqli($host, $user, $senha, $banco);

// Verificar conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Obter dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$nota = $_POST['nota'];
$comentario = $_POST['comentario'];

// Inserir dados
$sql = "INSERT INTO avaliacoes (nome, email, nota, comentario) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssis", $nome, $email, $nota, $comentario);

if ($stmt->execute()) {
    echo "Obrigado pela sua avaliação!";
} else {
    echo "Erro ao enviar avaliação: " . $stmt->error;
}

$conn->close();
?>
