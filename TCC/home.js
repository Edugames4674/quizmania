// Botão: efeito de clique
document.querySelectorAll('.anim-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.remove('clicked');
    void button.offsetWidth;
    button.classList.add('clicked');
  });
});

// Animação de digitação
const titleText = "Bem-Vindo!";
const titleElement = document.querySelector(".typewriter");
let i = 0;

function typeTitle() {
  if (i < titleText.length) {
    titleElement.textContent += titleText.charAt(i);
    i++;
    setTimeout(typeTitle, 150);
  } else {
    animateRest();
  }
}

titleElement.textContent = "";
typeTitle();

// Entrada animada após digitação
function animateRest() {
  document.querySelectorAll(".fade-in").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 300);
  });
}
