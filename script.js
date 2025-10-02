
// Seleciona todos os elementos que terão animação
const animatedElements = document.querySelectorAll(
  ".fade-in, .zoom-in, .typing, .glow"
);

// Função que ativa/desativa as animações
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate"); // volta ao estado inicial
      }
    });
  },
  { threshold: 0.2 } // ativa quando 20% do elemento aparece
);

// Atacha o observer em cada elemento
animatedElements.forEach((el) => {
  observer.observe(el);
});
