<?php
// Configurações do banco
$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'seu_banco';

// Conectar
$conn = new mysql($host, $usuario, $senha, $banco);
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Buscar jogadores ordenados por pontuação decrescente
$sql = "SELECT nome, pontuacao FROM jogadores ORDER BY pontuacao DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <title>Ranking dos Jogadores</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f4f8;
            padding: 20px;
            color: #003366;
        }
        table {
            width: 100%;
            max-width: 600px;
            margin: auto;
            border-collapse: collapse;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            background: #e6f2ff;
            border-radius: 8px;
            overflow: hidden;
        }
        th, td {
            padding: 12px 15px;
            text-align: center;
        }
        th {
            background-color: #0059b3;
            color: white;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #cce7ff;
        }
        tr:hover {
            background-color: #99ccff;
        }
        caption {
            margin-bottom: 15px;
            font-size: 24px;
            font-weight: bold;
            color: #003366;
        }
    </style>
</head>
<body>

<table>
    <caption>Ranking dos Jogadores</caption>
    <thead>
        <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontuação</th>
        </tr>
    </thead>
    <tbody>
        <?php
        if ($result->num_rows > 0) {
            $posicao = 1;
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $posicao++ . "</td>";
                echo "<td>" . htmlspecialchars($row['nome']) . "</td>";
                echo "<td>" . $row['pontuacao'] . "</td>";
                echo "</tr>";
            }
        } else {
            echo '<tr><td colspan="3">Nenhum jogador encontrado.</td></tr>';
        }
        $conn->close();
        ?>
    </tbody>
</table>

</body>
</html>
