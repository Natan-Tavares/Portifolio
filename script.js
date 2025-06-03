// script.js

// Aplica tema salvo no localStorage ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
  
  // Cria botão de alternância se não existir
  if (!document.querySelector('#toggle-dark-mode')) {
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'toggle-dark-mode';
    toggleBtn.textContent = document.body.classList.contains('dark') ? 'Modo Claro' : 'Modo Escuro';
    document.body.appendChild(toggleBtn);
  
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const darkMode = document.body.classList.contains('dark');
      toggleBtn.textContent = darkMode ? 'Modo Claro' : 'Modo Escuro';
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    });
  }
  
  // Aplica estado do botão e modo escuro ao mudar de página ou recarregar
  window.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark', darkMode);
  
    const toggleBtn = document.querySelector('#toggle-dark-mode');
    if (toggleBtn) {
      toggleBtn.textContent = darkMode ? 'Modo Claro' : 'Modo Escuro';
    }
  
    // Destacar item de menu ativo
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll(".menu a").forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("ativo");
      } else {
        link.classList.remove("ativo");
      }
    });
  });