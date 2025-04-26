// Modo Oscuro
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

  // Animaciones para las cards
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px)';
          this.querySelector('.card-img').style.transform = 'scale(1.1)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = '';
          this.querySelector('.card-img').style.transform = '';
      });
      
      // Efecto al hacer click
      card.addEventListener('click', function() {
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
              this.style.transform = 'translateY(-10px)';
          }, 200);
      });
  });

  // Efecto scroll para el header
  window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
          header.style.background = 'rgba(255, 99, 71, 0.9)';
      } else {
          header.style.background = '#ff6347';
      }
  });
});