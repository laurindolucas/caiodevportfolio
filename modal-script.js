// ===================== ARRAY DE PROJETOS =====================
const projects = [
  {
    title: "Sistema de Gerenciamento de Tarefas",
    description:
      "Um sistema completo de gerenciamento de tarefas desenvolvido com as tecnologias mais modernas do mercado. O projeto permite criar, editar e organizar tarefas de forma intuitiva, com recursos avançados como filtros, categorias, prioridades e colaboração em tempo real. A interface foi cuidadosamente projetada para proporcionar a melhor experiência ao usuário, com animações suaves e design responsivo que funciona perfeitamente em qualquer dispositivo.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
    date: { month: "Janeiro", year: "2024" },
    videoUrl: "/assets/demonstraçãoMGT.mp4",
    deployUrl: "https://gerenciador-tarefas.com",
    githubUrl: "https://github.com/usuario/gerenciador-tarefas"
  },
  {
    title: "Plataforma de E-commerce Inteligente",
    description:
      "Uma plataforma de e-commerce moderna com sistema de recomendação inteligente, carrinho persistente, autenticação segura e painel administrativo completo para gestão de produtos, pedidos e usuários. O design é totalmente responsivo e focado em conversão, com animações suaves e performance otimizada.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"],
    date: { month: "Agosto", year: "2024" },
    videoUrl: "/assets/demostraçãoToDo.mp4",
    deployUrl: "https://ecommerce-inteligente.com",
    githubUrl: "https://github.com/usuario/ecommerce-inteligente"
  },
  {
    title: "Dashboard de Análise Financeira em Tempo Real",
    description:
      "Um dashboard interativo para análise de dados financeiros em tempo real, com gráficos dinâmicos, filtros avançados, exportação de relatórios e integração com APIs externas. A interface foi projetada para oferecer visualização clara e intuitiva de métricas importantes, facilitando a tomada de decisão por gestores.",
    technologies: ["Vue.js", "Chart.js", "Sass", "Firebase", "REST API"],
    date: { month: "Março", year: "2025" },
    videoUrl: "/assets/1016.mp4",
    deployUrl: "https://dashboard-financeiro.com",
    githubUrl: "https://github.com/usuario/dashboard-financeiro"
  }
];


// ===================== ELEMENTOS DO DOM =====================
const modal = document.getElementById('projectModal');
const closeBtn = document.getElementById('closeBtn');
const backBtn = document.getElementById('backBtn');
const backdrop = document.querySelector('.modal-backdrop');

const projectCards = document.querySelectorAll('.card-project'); // <-- importante


// ===================== FUNÇÃO PARA ABRIR O MODAL =====================
function openModal() {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}


// ===================== FUNÇÃO PARA FECHAR O MODAL =====================
function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Pausar vídeo ao fechar
  const video = document.getElementById('projectVideo');
  if (video) {
    video.pause();
  }
}


// ===================== EVENTOS PARA FECHAR =====================
closeBtn.addEventListener('click', closeModal);
backBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

// Fechar com ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Prevenir scroll no body ao rolar o modal
modal.addEventListener('wheel', (event) => {
  event.stopPropagation();
});


// ===================== ATUALIZAR DADOS DO MODAL =====================
function updateProjectData(projectData) {
  // Título
  const titleElement = document.getElementById('projectTitle');
  if (titleElement && projectData.title) {
    titleElement.textContent = projectData.title;
  }

  // Vídeo
  const videoElement = document.getElementById('projectVideo');
  if (videoElement && projectData.videoUrl) {
    videoElement.src = projectData.videoUrl;
  }

  // Tecnologias
  const techContainer = document.getElementById('techContainer');
  if (techContainer && projectData.technologies) {
    techContainer.innerHTML = '';
    projectData.technologies.forEach(tech => {
      const techCard = document.createElement('div');
      techCard.className = 'tech-card';
      techCard.textContent = tech;
      techContainer.appendChild(techCard);
    });
  }

  // Descrição
  const descriptionElement = document.getElementById('projectDescription');
  if (descriptionElement && projectData.description) {
    descriptionElement.textContent = projectData.description;
  }

  // Links
  const deployBtn = document.getElementById('deployBtn');
  const githubBtn = document.getElementById('githubBtn');

  if (deployBtn) {
    if (projectData.deployUrl) {
      deployBtn.href = projectData.deployUrl;
      deployBtn.style.display = 'inline-flex';
    } else {
      deployBtn.style.display = 'none';
    }
  }

  if (githubBtn) {
    if (projectData.githubUrl) {
      githubBtn.href = projectData.githubUrl;
      githubBtn.style.display = 'inline-flex';
    } else {
      githubBtn.style.display = 'none';
    }
  }

  // Data
  const dateElement = document.getElementById('projectDate');
  if (dateElement && projectData.date) {
    dateElement.textContent = `${projectData.date.month} ${projectData.date.year}`;
  }
}


// ===================== ASSOCIA CADA CARD AO PROJETO CORRESPONDENTE =====================
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const index = card.getAttribute('data-index');
    if (index !== null && projects[index]) {
      updateProjectData(projects[index]);
      openModal();
    }
  });
});