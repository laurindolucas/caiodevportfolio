// ===================== ARRAY DE PROJETOS =====================
const projects = [
  {
    title: "Sistema de Gerenciamento de Tarefas",
    description:
      "Um sistema de gerenciamento de tarefas desenvolvido com as tecnologias mais modernas do mercado. O projeto permite criar, editar e deletar as tarefas, também pode acompanhar a quantidade de tarefas feitas e seu total, foi um projeto da trilha de React que é parceria da Rocketseat e o Porto Digital",
    technologies: ["HTML", "CSS", "TypeScript", "React.js", "TailwindCss"],
    date: { month: "setembro", year: "2025" },
    videoUrl: "/assets/demostraçãoToDo.mp4",
    githubUrl: "https://github.com/laurindolucas/React-trilha-porto-digital-rocketseat/tree/main/todo"
  },
  {
    title: "MGT- WEBSITE",
    description:
      "Site corporativo desenvolvido do zero para uma empresa alemã, com design moderno, responsivo e foco total na experiência do usuário. Apresenta informações institucionais, serviços oferecidos e parceiros estratégicos, além de um canal direto de contato. Construído inteiramente em front-end, com navegação intuitiva e identidade visual profissional.",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: { month: "Agosto", year: "2025" },
    videoUrl: "/assets/demonstraçãoMGT.mp4",
    deployUrl: "https://mgt-azure.vercel.app/index.html",
    githubUrl: "https://github.com/laurindolucas/MGT-WEBSITE"
  },
  {
    title: "Crítico de sofá - plataforma de reviews",
    description:
      "Crítico de Sofá é uma adaptação de um projeto desenvolvido durante um curso de PHP. Trata-se de uma aplicação full stack, totalmente integrada a um banco de dados relacional, onde o usuário pode criar uma conta, avaliar filmes com estrelas e comentários, além de cadastrar seus próprios filmes com pôsteres personalizados. A plataforma conta com uma dashboard para visualizar e gerenciar todos os filmes adicionados, e oferece ao usuário a possibilidade de editar completamente seu perfil, garantindo uma experiência prática, dinâmica e personalizada.",
    technologies: ["PHP", "HTML", "CSS", "MYSQL"],
    date: { month: "Agosto", year: "2025" },
    videoUrl: "/assets/1016.mp4",
    githubUrl: "https://github.com/laurindolucas/CriticoDeSofa"
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
  const index = card.getAttribute('data-index');

  card.addEventListener('click', () => {
    if (index !== null && projects[index]) {
      updateProjectData(projects[index]);
      openModal();
    }
  });

  const viewMore = card.querySelector('.view-sevice');
  if (viewMore) {
    viewMore.addEventListener('click', (e) => {
      e.preventDefault();      
      e.stopPropagation();     

      if (index !== null && projects[index]) {
        updateProjectData(projects[index]);
        openModal();
      }
    });
  }
});
