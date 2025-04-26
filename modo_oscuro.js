document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Verificar preferencia del usuario
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️ Modo Claro';
    }
    
    // Toggle del modo oscuro
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        this.textContent = '☀️ Modo Claro';
      } else {
        localStorage.setItem('darkMode', 'disabled');
        this.textContent = '🌙 Modo Oscuro';
      }
    });
  });