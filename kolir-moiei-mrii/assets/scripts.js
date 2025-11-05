// scripts.js - оновлений для нового стилю
document.addEventListener('DOMContentLoaded', function() {
  // Додаємо анімації при скролі
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Спостерігаємо за картками та плитками
  document.querySelectorAll('.card, .tile, .swatch').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Існуючий функціонал
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t.matches('[data-copy]')) {
      const text = t.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        t.classList.add('copied');
        t.textContent = 'скопійовано';
        setTimeout(() => {
          t.classList.remove('copied');
          t.textContent = 'скопіювати';
        }, 1200);
      });
    }
    if (t.matches('[data-lightbox]')) {
      e.preventDefault();
      const src = t.getAttribute('href');
      openLightbox(src);
    }
  });
});

function openLightbox(src) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 20, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
    backdrop-filter: blur(10px);
    animation: fadeIn 0.3s ease;
  `;

  const img = document.createElement('img');
  img.src = src;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    border: 2px solid rgba(96, 165, 250, 0.3);
    box-shadow: 
      0 0 50px rgba(96, 165, 250, 0.5),
      0 20px 60px rgba(0, 0, 0, 0.8);
    animation: scaleIn 0.3s ease;
  `;

  overlay.appendChild(img);
  overlay.addEventListener('click', () => {
    overlay.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    }, 300);
  });
  
  document.body.appendChild(overlay);
}

// Додаємо CSS анімації для лайтбокса
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  
  @keyframes scaleIn {
    from { 
      opacity: 0;
      transform: scale(0.8);
    }
    to { 
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);
// Додаємо цей код до scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Додаємо ефекти для кольорових заголовків
    const pageTitles = document.querySelectorAll('.page-title');
    pageTitles.forEach(title => {
        title.style.animation = 'colorPulse 3s infinite alternate';
    });

    // Додаємо CSS анімацію для пульсації заголовків
    const pulseAnimation = document.createElement('style');
    pulseAnimation.textContent = `
        @keyframes colorPulse {
            0% {
                filter: brightness(1);
                text-shadow: 0 0 20px currentColor;
            }
            100% {
                filter: brightness(1.2);
                text-shadow: 0 0 40px currentColor;
            }
        }
    `;
    document.head.appendChild(pulseAnimation);
});