document.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("theme") === "dark";
  
    const applyTheme = (darkMode) => {
      document.body.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      toggleBtn.textContent = darkMode ? "Modo Claro" : "Modo Escuro";
    };

    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggle-dark-mode";
    toggleBtn.style.display = "none"; 
    document.body.appendChild(toggleBtn);
  
    applyTheme(isDark);
    toggleBtn.style.display = "block";
  
    toggleBtn.addEventListener("click", () => {
      const darkMode = !document.body.classList.contains("dark");
      applyTheme(darkMode);
    });
  
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