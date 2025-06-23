<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <title>Avaliação do Site</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        body {
            background: linear-gradient(135deg, #cce7ff, #004080);
            min-height: 100vh;
            color: #003366;
        }
        .card {
            background-color: #e6f2ff;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 64, 128, 0.3);
        }
        .btn-primary {
            background-color: #0059b3;
            border-color: #0059b3;
        }
        .btn-primary:hover {
            background-color: #003d80;
            border-color: #003d80;
        }
        label {
            font-weight: 600;
        }
        h2 {
            color: #003366;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
                <div class="card p-4">
                    <h2 class="text-center mb-4">Avalie nosso site</h2>
                    <form action="process.php" method="post" novalidate>
                        <div class="mb-3">
                            <label for="nome" class="form-label">Nome:</label>
                            <input type="text" name="nome" id="nome" class="form-control" required />
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" name="email" id="email" class="form-control" required />
                        </div>

                        <div class="mb-3">
                            <label for="nota" class="form-label">Nota (1 a 5):</label>
                            <select name="nota" id="nota" class="form-select" required>
                                <option value="" selected disabled>Escolha uma nota</option>
                                <option value="1">1 - Péssimo</option>
                                <option value="2">2 - Ruim</option>
                                <option value="3">3 - Médio</option>
                                <option value="4">4 - Bom</option>
                                <option value="5">5 - Excelente</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label for="comentario" class="form-label">Comentário:</label>
                            <textarea name="comentario" id="comentario" rows="4" class="form-control"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary w-100">Enviar Avaliação</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS Bundle (com Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
