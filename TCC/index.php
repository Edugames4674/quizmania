<?php
$enviado = $_SERVER['REQUEST_METHOD'] === 'POST';

$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$nota = $_POST['nota'] ?? '';
$comentario = $_POST['comentario'] ?? '';

if ($enviado) {
    // Conectando ao banco de dados
    $host = 'localhost';
    $usuario = 'root';
    $senha = '';
    $banco = 'avaliacoes_site';

    $conn = new mysqli($host, $usuario, $senha, $banco);

    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    }

    // Preparando e executando a query com segurança
    $stmt = $conn->prepare("INSERT INTO avaliacoes (nome, email, nota, comentario) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssis", $nome, $email, $nota, $comentario);
    $stmt->execute();

    $stmt->close();
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Avaliação do Site</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        body {
            background: linear-gradient(135deg, #cce7ff, #004080);
            min-height: 100vh;
            color: #003366;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            font-family: 'Segoe UI', sans-serif;
        }
        .card {
            background-color: #e6f2ff;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 64, 128, 0.3);
            padding: 30px;
            width: 100%;
            max-width: 500px;
        }
        .btn-primary {
            background-color: #0059b3;
            border-color: #0059b3;
        }
        .btn-primary:hover {
            background-color: #003d80;
            border-color: #003d80;
        }
        .modal-content {
            background: #f0f8ff;
            border-radius: 20px;
            text-align: center;
            padding: 30px 20px;
        }
        .modal-header {
            border-bottom: none;
            justify-content: center;
        }
        .modal-title {
            font-size: 24px;
            font-weight: bold;
            color: #003366;
        }
        .thank-you-emoji {
            font-size: 60px;
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }
        .modal-footer {
            border-top: none;
            justify-content: center;
        }
        .btn-voltar {
            background-color: #28a745;
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 16px;
            transition: background 0.3s ease;
        }
        .btn-voltar:hover {
            background-color: #218838;
            box-shadow: 0 0 10px #28a745;
        }
    </style>
</head>
<body>

<div class="card">
    <h2 class="text-center mb-4">Avalie nosso site</h2>
    <form method="post" novalidate>
        <div class="mb-3">
            <label for="nome" class="form-label">Nome:</label>
            <input type="text" name="nome" id="nome" class="form-control" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" name="email" id="email" class="form-control" required>
        </div>
        <div class="mb-3">
            <label for="nota" class="form-label">Nota (1 a 5):</label>
            <select name="nota" id="nota" class="form-select" required>
                <option value="" disabled selected>Escolha uma nota</option>
                <option value="1">1 - Péssimo</option>
                <option value="2">2 - Ruim</option>
                <option value="3">3 - Médio</option>
                <option value="4">4 - Bom</option>
                <option value="5">5 - Excelente</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="comentario" class="form-label">Comentário:</label>
            <textarea name="comentario" id="comentario" class="form-control" rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Enviar Avaliação</button>
    </form>
</div>

<!-- Modal de agradecimento -->
<div class="modal fade" id="agradecimentoModal" tabindex="-1" aria-labelledby="agradecimentoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content text-dark">
      <div class="modal-header">
        <h5 class="modal-title" id="agradecimentoLabel">Obrigado pela Avaliação!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
      </div>
      <div class="modal-body">
        <p>Obrigado, <strong><?php echo htmlspecialchars($nome); ?></strong>!</p>
        <p>Você avaliou com nota <strong><?php echo htmlspecialchars($nota); ?></strong>.</p>
        <?php if (!empty($comentario)): ?>
            <p><em>"<?php echo htmlspecialchars($comentario); ?>"</em></p>
        <?php endif; ?>
      </div>
      <div class="modal-footer">
        <a href="jogo.html" class="btn btn-primary">Voltar ao Quiz</a>
      </div>
    </div>
  </div>
</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<?php if ($enviado): ?>
<script>
  const modal = new bootstrap.Modal(document.getElementById('agradecimentoModal'));
  window.addEventListener('load', () => {
    modal.show();
  });
</script>
<?php endif; ?>

</body>
</html>
