const btn = document.createElement('button');
btn.id = 'toggle-dark-mode';
btn.textContent = 'Modo Escuro';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn.textContent = document.body.classList.contains('dark') ? 'Modo Claro' : 'Modo Escuro';
});