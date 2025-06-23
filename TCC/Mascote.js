function criarFragmento() {
    const fragmento = document.createElement("div");
    fragmento.classList.add("fragmento");
  
    fragmento.style.left = Math.random() * window.innerWidth + "px";
    fragmento.style.animationDuration = (2 + Math.random() * 3) + "s";
    fragmento.style.width = fragmento.style.height = (5 + Math.random() * 10) + "px";
  
    document.getElementById("fundo-fragmentos").appendChild(fragmento);
  
    setTimeout(() => {
      fragmento.remove();
    }, 5000);
  }
  
  setInterval(criarFragmento, 100);
  