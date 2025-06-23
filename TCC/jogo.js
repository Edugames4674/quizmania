let playerName = "";
let selectedTopic = "";
let currentQuestion = 0;
let score = 0;
  const questions = {
  geral: [
    {
      question: "Qual é a capital do Brasil?",
      answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      correct: 2,
      hint: "Foi inaugurada em 1960 para ser a nova capital do país."
    },
    {
      question: "Quantos continentes existem no planeta Terra?",
      answers: ["5", "6", "7", "8"],
      correct: 2,
      hint: "Inclui Ásia, África, América, Europa, Oceania, Antártida e mais um."
    },
    {
      question: "Qual desses animais é um mamífero?",
      answers: ["Crocodilo", "Golfinho", "Águia", "Tubarão"],
      correct: 1,
      hint: "É um animal aquático que respira pelos pulmões e amamenta seus filhotes."
    },
    {
      question: "Qual é a moeda oficial do Japão?",
      answers: ["Yuan", "Won", "Yen", "Dólar"],
      correct: 2,
      hint: "É simbolizada por ¥."
    },
    {
      question: "Quem pintou a Mona Lisa?",
      answers: ["Michelangelo", "Leonardo da Vinci", "Rafael", "Donatello"],
      correct: 1,
      hint: "Também foi um inventor e cientista do Renascimento."
    },
    {
      question: "Qual o maior planeta do sistema solar?",
      answers: ["Terra", "Saturno", "Júpiter", "Marte"],
      correct: 2,
      hint: "Tem uma grande mancha vermelha e muitos satélites naturais."
    },
    {
      question: "Qual é o idioma oficial do Brasil?",
      answers: ["Espanhol", "Português", "Inglês", "Francês"],
      correct: 1,
      hint: "É o mesmo idioma falado em Portugal."
    },
    {
      question: "Quantos estados tem o Brasil?",
      answers: ["26", "27", "28", "29"],
      correct: 1,
      hint: "São 26 estados mais o Distrito Federal."
    },
    {
      question: "Qual é o elemento químico representado pela letra O?",
      answers: ["Ouro", "Oxigênio", "Ósmio", "Ozônio"],
      correct: 1,
      hint: "É essencial para a respiração."
    },
    {
      question: "Qual é a capital da França?",
      answers: ["Lyon", "Marselha", "Paris", "Nice"],
      correct: 2,
      hint: "É conhecida como a Cidade Luz."
    },
    {
      question: "Qual é o nome do primeiro homem a pisar na Lua?",
      answers: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
      correct: 2,
      hint: "Disse a famosa frase: “Um pequeno passo para o homem...”"
    },
    {
      question: "Qual é a data da independência do Brasil?",
      answers: ["7 de setembro de 1822", "15 de novembro de 1889", "21 de abril de 1500", "1 de janeiro de 1808"],
      correct: 0,
      hint: "Dom Pedro I proclamou a independência nesse dia às margens do Ipiranga."
    },
    {
      question: "Qual é o maior oceano da Terra?",
      answers: ["Atlântico", "Pacífico", "Índico", "Ártico"],
      correct: 1,
      hint: "Ocupa mais de 30% da superfície terrestre."
    },
    {
      question: "Quem é o autor de 'Dom Casmurro'?",
      answers: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Carlos Drummond"],
      correct: 0,
      hint: "Foi um dos fundadores da Academia Brasileira de Letras."
    },
    {
      question: "Qual destes esportes é jogado com uma bola oval?",
      answers: ["Futebol", "Basquete", "Rúgbi", "Tênis"],
      correct: 2,
      hint: "É muito popular na Inglaterra, Austrália e Nova Zelândia."
    }
  ],

  historia: [
    {
      question: "Por que é importante estudar a história da escravidão no Brasil?",
      answers: ["Para conhecer nomes de reis", "Para passar no vestibular", "Para compreender as raízes das desigualdades sociais atuais", "Porque está no livro"],
      correct: 2,
      hint: "Ajuda a entender o racismo estrutural e as desigualdades atuais."
    },
    {
      question: "Quem foi o primeiro presidente do Brasil?",
      answers: ["Getúlio Vargas", "Deodoro da Fonseca", "Juscelino Kubitschek", "Jânio Quadros"],
      correct: 1,
      hint: "Foi também o responsável pela proclamação da república."
    },
    {
      question: "Em que ano foi proclamada a independência do Brasil?",
      answers: ["1822", "1889", "1500", "1808"],
      correct: 0,
      hint: "Dom Pedro I gritou “Independência ou Morte!” nesse ano."
    },
    {
      question: "Qual foi o movimento que aboliu a escravidão no Brasil?",
      answers: ["Lei Áurea", "Constituição de 1988", "Movimento Diretas Já", "Revolução Farroupilha"],
      correct: 0,
      hint: "Foi assinada pela Princesa Isabel em 1888."
    },
    {
      question: "Quem liderou a Inconfidência Mineira?",
      answers: ["Tiradentes", "Dom Pedro I", "Zumbi dos Palmares", "José Bonifácio"],
      correct: 0,
      hint: "É considerado mártir da independência do Brasil."
    },
    {
      question: "Qual foi o período da Ditadura Militar no Brasil?",
      answers: ["1964 a 1985", "1930 a 1945", "1500 a 1822", "1988 até hoje"],
      correct: 0,
      hint: "Começou com um golpe militar e terminou com a redemocratização."
    },
    {
      question: "Quem foi Zumbi dos Palmares?",
      answers: ["Um imperador brasileiro", "Um líder quilombola e símbolo de resistência", "Um explorador europeu", "Um presidente brasileiro"],
      correct: 1,
      hint: "Lutou contra a escravidão e liderou o Quilombo dos Palmares."
    },
    {
      question: "Qual país colonizou o Brasil?",
      answers: ["Espanha", "Portugal", "França", "Holanda"],
      correct: 1,
      hint: "A língua que falamos veio deste país europeu."
    },
    {
      question: "Em que ano foi fundada a cidade de São Paulo?",
      answers: ["1554", "1500", "1600", "1700"],
      correct: 0,
      hint: "Foi fundada por padres jesuítas no século XVI."
    },
    {
      question: "Quem proclamou a república no Brasil?",
      answers: ["Dom Pedro II", "Marechal Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek"],
      correct: 1,
      hint: "Era marechal do Exército e liderou o golpe republicano."
    },
    {
      question: "O que foi o Ciclo do Ouro?",
      answers: ["Período de mineração de ouro no Brasil colonial", "Uma festa tradicional brasileira", "Um tipo de moeda antiga", "Um movimento artístico"],
      correct: 0,
      hint: "Teve como centro a região de Minas Gerais."
    },
    {
      question: "Qual foi o papel de Dom Pedro I na história do Brasil?",
      answers: ["Liderou a independência do Brasil", "Fundou o Império Português", "Descobriu o Brasil", "Aboliu a escravidão"],
      correct: 0,
      hint: "Foi o primeiro imperador do Brasil."
    },
    {
      question: "O que marcou o fim do Brasil Império?",
      answers: ["A proclamação da república", "A abolição da escravidão", "A chegada da família real portuguesa", "A independência do Brasil"],
      correct: 0,
      hint: "Ocorreu em 1889 com o fim da monarquia."
    },
    {
      question: "Quem foi Getúlio Vargas?",
      answers: ["Presidente do Brasil conhecido por políticas trabalhistas", "Um poeta brasileiro", "Um rei europeu", "Um navegador português"],
      correct: 0,
      hint: "Criou a CLT e governou por muitos anos em diferentes períodos."
    },
    {
      question: "Qual evento iniciou a colonização do Brasil?",
      answers: ["Descobrimento do Brasil em 1500", "Chegada da família real", "Independência do Brasil", "Proclamação da República"],
      correct: 0,
      hint: "Foi quando a esquadra de Cabral chegou ao Brasil."
    }
  ],

  ciencia: [
    {
      question: "Qual é o símbolo químico da água?",
      answers: ["O2", "H2O", "CO2", "NaCl"],
      correct: 1,
      hint: "É composta por dois átomos de hidrogênio e um de oxigênio."
    },
    {
      question: "Qual é a força que mantém os planetas em órbita ao redor do Sol?",
      answers: ["Força magnética", "Gravidade", "Força elétrica", "Força centrífuga"],
      correct: 1,
      hint: "É a mesma força que nos mantém presos ao chão."
    },
    {
      question: "Qual é a unidade básica da vida?",
      answers: ["Molécula", "Célula", "Átomo", "Organoide"],
      correct: 1,
      hint: "Todos os seres vivos são formados por essa unidade."
    },
    {
      question: "Qual planeta é conhecido como o Planeta Vermelho?",
      answers: ["Mercúrio", "Vênus", "Marte", "Júpiter"],
      correct: 2,
      hint: "Tem o solo rico em óxido de ferro."
    },
    {
  question: "O que é a fotossíntese?",
  answers: [
    "Processo pelo qual as plantas produzem energia usando luz solar",
    "Forma de respiração das plantas",
    "Modo como os animais obtêm energia",
    "Transformação de nutrientes em energia pelos humanos"
  ],
  correct: 0,
  hint: "É o processo responsável por transformar luz em energia nas plantas."
},

    {
      question: "Quem propôs a teoria da gravidade?",
      answers: ["Albert Einstein", "Isaac Newton", "Galileu Galilei", "Nikola Tesla"],
      correct: 1,
      hint: "Dizem que ele teve a ideia ao ver uma maçã cair."
    },
    {
      question: "Qual destes é um metal?",
      answers: ["Ouro", "Água", "Gás", "Plástico"],
      correct: 0,
      hint: "É usado para fazer joias."
    },
    {
      question: "Qual gás é essencial para a respiração humana?",
      answers: ["Nitrogênio", "Oxigênio", "Dióxido de carbono", "Hidrogênio"],
      correct: 1,
      hint: "Representado pela letra O na tabela periódica."
    },
    {
      question: "Qual a temperatura de congelamento da água em graus Celsius?",
      answers: ["0", "32", "100", "-10"],
      correct: 0,
      hint: "É o ponto em que a água vira gelo."
    },
    {
      question: "Qual é o maior órgão do corpo humano?",
      answers: ["Fígado", "Coração", "Pele", "Pulmão"],
      correct: 2,
      hint: "Reveste todo o corpo e protege contra o ambiente externo."
    }
  ]
};
function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}
let perguntasAtual = [];

function iniciarQuiz(categoria) {
  // Faz uma cópia das perguntas da categoria e embaralha
  perguntasAtual = embaralhar([...questions[categoria]]);
  
  // Aqui você pode chamar a função que mostra a primeira pergunta, tipo:
  mostrarProximaPergunta();
}

function startGame() {
  const nameInput = document.getElementById("player-name");
  const topicSelect = document.getElementById("topic-select");

  playerName = nameInput.value.trim();
  selectedTopic = topicSelect.value;

  if (!playerName) {
    alert("Digite seu nome para começar!");
    return;
  }

  localStorage.setItem("lastPlayer", playerName);
  currentQuestion = 0;
  score = 0;

  document.querySelector(".login-container").style.display = "none";
  document.querySelector(".game-container").style.display = "block";

  document.getElementById("player-display").innerText = `Jogador: ${playerName}`;
  document.getElementById("topic-display").innerText = `Tema: ${selectedTopic}`;
  document.getElementById("score").innerText = `Pontuação: ${score}`;

  loadQuestion();
}

function loadQuestion() {
  const topicQuestions = questions[selectedTopic];

  if (currentQuestion >= 15 || currentQuestion >= topicQuestions.length) {
    endGame();
    return;
  }

  const q = topicQuestions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const buttons = document.querySelectorAll(".answer");
  buttons.forEach((btn, index) => {
    btn.innerText = q.answers[index];
    btn.disabled = false;
    btn.classList.remove("correct", "incorrect");
  });

  document.getElementById("feedback").innerText = "";
  updateProgressBar(currentQuestion, 15); // Usar 15 aqui para a barra mostrar corretamente o limite

}


function checkAnswer(index) {
  const q = questions[selectedTopic][currentQuestion];
  const feedback = document.getElementById("feedback");
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach(btn => btn.classList.remove("correct", "incorrect"));

  if (index === q.correct) {
    score += 10;
    feedback.innerText = "✔️ Resposta correta!";
    buttons[index].classList.add("correct");
  } else {
    const correctAnswer = q.answers[q.correct];
    feedback.innerText = `❌ Incorreta! Resposta certa: "${correctAnswer}"`;
    buttons[index].classList.add("incorrect");
    buttons[q.correct].classList.add("correct");
  }

  document.getElementById("score").innerText = `Pontuação: ${score}`;
  buttons.forEach(btn => btn.disabled = true);

  setTimeout(() => {
    currentQuestion++;
    loadQuestion();
  }, 2000);
}

function endGame() {
  document.querySelector(".game-container").style.display = "none";
  document.querySelector(".result-container").style.display = "block";

  document.getElementById("final-player-name").innerText = playerName;
  document.getElementById("final-score").innerText = score;

  let level = "Iniciante";
  if (score >= 20) level = "Intermediário";
  if (score >= 40) level = "Mestre do Quiz";

  document.getElementById("final-level").innerText = level;



  // Enviar para o servidor
  fetch('save_score.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      nome: playerName,
      tema: selectedTopic,
      pontuacao: score
    })
  })
  .then(res => res.json())
  .then(data => {
    if (!data.success) {
      console.warn("Erro ao salvar online:", data.error);
    }
  })
  .catch(err => console.error("Erro de rede:", err));
}
salvarPontuacao("Nome do jogador", pontuacao);

function updateLocalRanking(name, score) {
  let ranking = JSON.parse(localStorage.getItem("ranking")) || [];
  ranking.push({ name, score });
  ranking.sort((a, b) => b.score - a.score);
  ranking = ranking.slice(0, 5);
  localStorage.setItem("ranking", JSON.stringify(ranking));

  const ul = document.getElementById("ranking-list");
  ul.innerHTML = "";
  ranking.forEach((entry, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}º - ${entry.name}: ${entry.score} pts`;
    ul.appendChild(li);
  });
}

function restartGame() {
  document.querySelector(".result-container").style.display = "none";
  document.querySelector(".ranking-container").style.display = "none";
  document.querySelector(".login-container").style.display = "block";

  document.getElementById("player-name").value = localStorage.getItem("lastPlayer") || "";
}

function showRanking() {
  document.querySelector(".game-container").style.display = "none";
  document.querySelector(".result-container").style.display = "none";
  document.querySelector(".ranking-container").style.display = "block";

  fetch('get_ranking.php')
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#ranking-table tbody");
      tbody.innerHTML = "";

      if (data.error) {
        tbody.innerHTML = `<tr><td colspan="5">${data.error}</td></tr>`;
        return;
      }

      data.forEach((item, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${i + 1}</td>
          <td>${item.jogador}</td>
          <td>${item.tema}</td>
          <td>${item.pontuacao}</td>
          <td>${new Date(item.data_hora).toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(() => {
      const tbody = document.querySelector("#ranking-table tbody");
      tbody.innerHTML = `<tr><td colspan="5">Erro ao carregar ranking</td></tr>`;
    });
}

function closeRanking() {
  document.querySelector(".ranking-container").style.display = "none";
  document.querySelector(".login-container").style.display = "block";
}
const questionContainer = document.getElementById('question-container');
questionContainer.classList.remove('fade-in-question');
void questionContainer.offsetWidth; // força reflow pra reiniciar animação
questionContainer.classList.add('fade-in-question');
function updateProgressBar(atual, total) {
  const barra = document.getElementById('progress-fill');
  const percentual = (atual / total) * 100;
  barra.style.width = percentual + '%';

  // Muda a cor conforme o progresso (opcional)
  if (percentual < 40) {
    barra.style.background = '#f44336'; // vermelho
  } else if (percentual < 70) {
    barra.style.background = '#ff9800'; // laranja
  } else {
    barra.style.background = '#4CAF50'; // verde
  }
}
function showHint() {
    const topicQuestions = questions[selectedTopic];
    if (!topicQuestions || currentQuestion >= topicQuestions.length) return;
    const hint = topicQuestions[currentQuestion].hint;
    const hintBubble = document.getElementById("hint-bubble");
    hintBubble.innerText = hint;
    hintBubble.style.display = "block";
  }

  // Chama a dica ao clicar no mascote
  document.getElementById("mascote-dica").addEventListener("click", function(event) {
    event.stopPropagation(); // evita fechar logo após abrir
    showHint();
  });

  // Fecha o balão ao clicar fora
  document.addEventListener("click", function() {
    const hintBubble = document.getElementById("hint-bubble");
    hintBubble.style.display = "";
  });

function salvarPontuacao(nome, pontuacao) {
  fetch("salvar_pontuacao.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `nome=${encodeURIComponent(nome)}&pontuacao=${pontuacao}`
  })
  .then(res => res.text())
  .then(res => console.log(res));
}

