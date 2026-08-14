import { personalInfo, projectsData, terminalCommands } from './data/portfolioData.js';
import { toggleSound, isSoundEnabled, playClickSound, playKeyPressSound, playSuccessSound } from './utils/sound.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects, renderProjectModal } from './components/Projects.js';
import { renderEducation } from './components/Education.js';
import { renderCertifications } from './components/Certifications.js';
import { renderRabbitHole } from './components/RabbitHole.js';
import { renderPlayground } from './components/Playground.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

// DOM Mounting Function
const mountComponents = () => {
  document.getElementById('navbar-container').innerHTML = renderNavbar();
  document.getElementById('hero').innerHTML = renderHero();
  document.getElementById('about').innerHTML = renderAbout();
  document.getElementById('skills').innerHTML = renderSkills();
  document.getElementById('projects').innerHTML = renderProjects();
  document.getElementById('education').innerHTML = renderEducation();
  document.getElementById('certifications').innerHTML = renderCertifications();
  document.getElementById('rabbithole').innerHTML = renderRabbitHole();
  document.getElementById('playground').innerHTML = renderPlayground();
  document.getElementById('contact').innerHTML = renderContact();
  document.getElementById('footer-container').innerHTML = renderFooter();

  // Initialize Lucide Icons if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
};

// Toast Notification Helper
const showToast = (message, type = 'yellow') => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const bgClasses = {
    yellow: 'bg-accent-yellow text-black border-black',
    green: 'bg-accent-green text-black border-black',
    blue: 'bg-accent-blue text-white border-black',
    red: 'bg-accent-red text-white border-black'
  };

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto p-4 border-3 font-mono font-black text-xs sm:text-sm shadow-[4px_4px_0px_#000] flex items-center justify-between gap-4 transition-all duration-300 transform translate-y-4 opacity-0 ${bgClasses[type] || bgClasses.yellow}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="font-black hover:opacity-75">✕</button>
  `;

  toast.querySelector('button').onclick = () => {
    toast.remove();
  };

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  playSuccessSound();

  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.add('opacity-0', 'translate-y-4');
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
};

// Setup Interactive Handlers
const bindEvents = () => {
  
  // 1. Sound FX Toggle Handler
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const enabled = toggleSound();
      const icon = document.getElementById('sound-icon');
      const text = document.getElementById('sound-text');
      if (icon && text) {
        icon.textContent = enabled ? '🔊' : '🔇';
        text.textContent = enabled ? 'SOUND' : 'MUTED';
      }
      showToast(enabled ? 'AUDIO FEEDBACK ENABLED 🔊' : 'AUDIO MUTED 🔇', 'yellow');
    });
  }

  // Global Button Click Audio Feedback
  document.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('a')) {
      playClickSound(520, 'square', 0.03);
    }
  });

  // 2. Live Time Clock Update
  const liveTimeEl = document.getElementById('live-time');
  const updateClock = () => {
    if (!liveTimeEl) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    liveTimeEl.textContent = `${timeStr} IST`;
  };
  updateClock();
  setInterval(updateClock, 1000);

  // 3. 3D Card Mouse Tilt Effect on Hero
  const heroCard = document.getElementById('hero-tilt-card');
  if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / (rect.height / 2)) * -6;
      const tiltY = (x / (rect.width / 2)) * 6;
      heroCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate(-2px, -2px)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // 4. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // 5. Project Category Filter
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Toggle button active styling
      filterBtns.forEach(b => {
        b.classList.remove('brutal-btn-primary');
        b.classList.add('bg-white');
      });
      btn.classList.remove('bg-white');
      btn.classList.add('brutal-btn-primary');

      // Filter cards
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 6. Project Detail Modal Handler
  const modalContainer = document.getElementById('project-modal-container');
  
  const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalContainer) return;
    
    modalContainer.innerHTML = renderProjectModal(project);
    modalContainer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Bind Close events
    const closeBtn = document.getElementById('close-modal-btn');
    const closeBottomBtn = document.getElementById('close-modal-bottom-btn');
    
    const closeModal = () => {
      modalContainer.classList.add('hidden');
      modalContainer.innerHTML = '';
      document.body.style.overflow = 'auto';
    };

    if (closeBtn) closeBtn.onclick = closeModal;
    if (closeBottomBtn) closeBottomBtn.onclick = closeModal;

    modalContainer.onclick = (e) => {
      if (e.target === modalContainer) closeModal();
    };
  };

  document.querySelectorAll('.view-project-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.getAttribute('data-project-id');
      openModal(pId);
    });
  });

  // 7. Interactive Terminal CLI
  const termForm = document.getElementById('terminal-form');
  const termInput = document.getElementById('terminal-input');
  const termOutput = document.getElementById('terminal-output');

  const executeCommand = (cmdStr) => {
    if (!termOutput) return;
    const cleanCmd = cmdStr.trim().toLowerCase();

    // Echo command line
    const cmdEcho = document.createElement('div');
    cmdEcho.className = 'font-bold text-accent-yellow';
    cmdEcho.textContent = `navya@portfolio:~$ ${cmdStr}`;
    termOutput.appendChild(cmdEcho);

    let outputText = '';
    if (cleanCmd === 'clear') {
      termOutput.innerHTML = '';
      return;
    } else if (terminalCommands[cleanCmd]) {
      outputText = terminalCommands[cleanCmd];
    } else if (cleanCmd === '') {
      outputText = '';
    } else {
      outputText = `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`;
    }

    if (outputText) {
      const respEl = document.createElement('div');
      respEl.className = cleanCmd === 'run' ? 'text-accent-yellow font-bold whitespace-pre-wrap' : 'text-emerald-300 whitespace-pre-wrap';
      respEl.textContent = outputText;
      termOutput.appendChild(respEl);
    }

    termOutput.scrollTop = termOutput.scrollHeight;
  };

  if (termForm && termInput) {
    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(termInput.value);
      termInput.value = '';
    });

    termInput.addEventListener('keydown', () => playKeyPressSound());
  }

  document.querySelectorAll('.term-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });

  // 8. Dynamic Accent Color Swapper
  document.querySelectorAll('.theme-swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
      document.documentElement.style.setProperty('--theme-accent', color);
      showToast(`ACCENT COLOR SWAPPED TO ${color}! 🎨`, 'yellow');
    });
  });

  // Playground Audio Test Button
  const playSoundBtn = document.getElementById('playground-sound-btn');
  if (playSoundBtn) {
    playSoundBtn.addEventListener('click', () => {
      playSuccessSound();
      showToast('AUDIO SYNTH TEST TRIGGERED! 🔊', 'green');
    });
  }

  // 9. Copy Email Button with Toast
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(personalInfo.email).then(() => {
        showToast('EMAIL COPIED TO CLIPBOARD! ✉', 'green');
      }).catch(() => {
        showToast(`EMAIL: ${personalInfo.email}`, 'yellow');
      });
    });
  }

  // 10. Contact Form Submit Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      showToast(`THANKS ${name.toUpperCase()}! MESSAGE RECEIVED! 🚀`, 'green');
      contactForm.reset();
    });
  }

  // 11. Back to Top Button
  const topBtn = document.getElementById('back-to-top-btn');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

// Main Entry Point
document.addEventListener('DOMContentLoaded', () => {
  mountComponents();
  bindEvents();
});
