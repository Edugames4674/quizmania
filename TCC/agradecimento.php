<?php
$nome = $_POST['nome'] ?? 'Visitante';
$nota = $_POST['nota'] ?? '';
$comentario = $_POST['comentario'] ?? '';
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <title>Obrigado pela Avaliação</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        body {
            background: linear-gradient(135deg, #004080, #cce7ff);
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: 'Segoe UI', sans-serif;
        }
        .thank-you-card {
            background-color: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            text-align: center;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
        }
        p {
            font-size: 1.2rem;
            margin-top: 15px;
        }
        .btn-home {
            margin-top: 25px;
            background-color: #ffffff;
            color: #004080;
            border: none;
        }
        .btn-home:hover {
            background-color: #cce7ff;
        }
    </style>
</head>
<body>
    <div class="thank-you-card">
        <h1>Obrigado, <?php echo htmlspecialchars($nome); ?>!</h1>
        <p>Recebemos sua avaliação com a nota <strong><?php echo htmlspecialchars($nota); ?></strong>.</p>
        <?php if (!empty($comentario)): ?>
            <p><em>"<?php echo htmlspecialchars($comentario); ?>"</em></p>
        <?php endif; ?>
        <a href="avaliacao.html" class="btn btn-home btn-lg mt-4">Voltar à página inicial</a>
    </div>
</body>
</html>
