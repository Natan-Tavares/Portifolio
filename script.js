// script.js

document.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("theme") === "dark";
  
    const applyTheme = (darkMode) => {
      document.body.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      toggleBtn.textContent = darkMode ? "Modo Claro" : "Modo Escuro";
    };
  
    // Criação do botão de alternância
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggle-dark-mode";
    toggleBtn.style.display = "none"; // Evita piscadas se for adicionado antes da lógica
    document.body.appendChild(toggleBtn);
  
    applyTheme(isDark);
    toggleBtn.style.display = "block";
  
    toggleBtn.addEventListener("click", () => {
      const darkMode = !document.body.classList.contains("dark");
      applyTheme(darkMode);
    });
  
    // Destacar o item do menu correspondente à página atual
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll(".menu a").forEach(link => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
        link.classList.add("ativo");
      } else {
        link.classList.remove("ativo");
      }
    });
  });