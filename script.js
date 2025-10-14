const fadeElements = document.querySelectorAll('.fade-element');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));

  let xPos = 50, yPos = 50;

  document.addEventListener('mousemove', (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const targetX = (e.clientX / width) * 100;
    const targetY = (e.clientY / height) * 100;

    const animate = () => {
      xPos += (targetX - xPos) * 0.1;
      yPos += (targetY - yPos) * 0.1;

      
      document.body.style.background = `
        radial-gradient(circle at ${xPos}% ${yPos}%, #006bff 0%, #001a4d 30%)
      `;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  });


   window.addEventListener("load", () => {
    // Espera 5 segundos
    setTimeout(() => {
      const loadingScreen = document.getElementById("loading-screen");
      const mainContent = document.getElementById("main-content");

      // Adiciona a classe pra fade-out
      loadingScreen.classList.add("fade-out");

      // Espera o fade terminar (1s) e mostra o conteúdo
      setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
      }, 1000);
    }, 3000);
  });

   function baixarArquivo(url, nomeArquivo) {
    const link = document.createElement('a'); 
    link.href = url; 
    link.download = nomeArquivo; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);
  }


  const botao = document.getElementById('btn-cv');
  botao.addEventListener('click', () => {
    baixarArquivo('assets/CV-CaioLaurindo.pdf', 'CV-CaioLaurindo.pdf');
  });

    function abrirRedeSocial(url) {
      window.open(url, '_blank'); 
    }