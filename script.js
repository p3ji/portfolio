document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // THEME TOGGLE (DARK / LIGHT MODE)
  // ==========================================
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Check user preference in localStorage or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    body.classList.add('light-mode');
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });

  // ==========================================
  // NAVIGATION & MOBILE MENU
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const header = document.getElementById('header');
  const links = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Scroll effect on Header height & backdrop
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Dynamic Navigation Active State based on scroll position
    let currentSection = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        currentSection = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return; // skip cross-page links
      link.classList.remove('active');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================
  // TYPING ANIMATION (HERO SECTION)
  // ==========================================
  const typedTextSpan = document.getElementById('typed-text');
  const textArray = [
    "transform workflows.",
    "explore AI design concepts.",
    "prototype new products.",
    "imagine new services."
  ];
  const typingSpeed = 80;
  const erasingSpeed = 40;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = textArray[0].length;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingSpeed + 500);
    }
  }

  // Initial trigger: text is already in HTML, so wait then erase
  if (typedTextSpan) {
    typedTextSpan.textContent = textArray[0];
    setTimeout(erase, newTextDelay);
  }

  // ==========================================
  // DYNAMIC PROJECTS LOADING
  // ==========================================
  async function loadProjects() {
    try {
      const response = await fetch('_data/projects.json?v=' + new Date().getTime());
      const projects = await response.json();
      
      const carouselTrack = document.getElementById('carouselTrack');
      const conceptsGrid = document.getElementById('concepts-grid');
      const prototypesGrid = document.getElementById('prototypes-grid');

      if (!carouselTrack || !conceptsGrid || !prototypesGrid) return;

      projects.forEach(project => {
        // Map category keys to display labels
        const tagsHtml = project.category.map(cat => {
          let label = cat;
          if (cat === 'work-tools') label = 'Work Tools';
          if (cat === 'personal-tools') label = 'Personal Tools';
          if (cat === 'health') label = 'Health';
          if (cat === 'economy') label = 'Economy';
          if (cat === 'games') label = 'Games';
          return `<span class="project-tag">${label}</span>`;
        }).join('');

        const linksHtml = project.links.map(link => {
          // Fallback logic for icons based on label if link.icon doesn't have fa-brands prefix
          let iconClass = link.icon;
          if (iconClass === 'fa-github') iconClass = 'fa-brands fa-github';
          else if (iconClass === 'fa-play' || iconClass === 'fa-code' || iconClass === 'fa-download') iconClass = 'fa-solid ' + iconClass;
          else if (!iconClass.includes('fa-')) iconClass = 'fa-solid fa-play'; // fallback
          
          return `
          <a class="project-link" href="${link.href}" rel="noopener noreferrer" target="_blank" title="${link.label}">
            <i class="${iconClass}"></i>
          </a>
        `}).join('');

        const cardHtml = `
          <div class="project-card reveal" data-category="${project.category.join(',')}">
            <div class="project-header">
              <div class="project-header-left">
                <div class="project-icon-box">
                  <i class="fa-solid ${project.icon}"></i>
                </div>
                <span class="project-tag stage-tag ${project.stage}">
                  ${project.stage.charAt(0).toUpperCase() + project.stage.slice(1)}
                </span>
              </div>
              <div class="project-links">
                ${linksHtml}
              </div>
            </div>
            <div class="project-body">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <details class="project-details">
                <summary class="project-summary">Project Details</summary>
                <p class="project-description">${project.details}</p>
              </details>
              <div class="project-tags">
                ${tagsHtml}
              </div>
            </div>
          </div>
        `;

        if (project.stage === 'concept') {
          conceptsGrid.innerHTML += cardHtml;
        } else if (project.stage === 'prototype') {
          prototypesGrid.innerHTML += cardHtml;
        }

        // Build carousel slide if featured
        if (project.featured) {
          const slideHtml = `
            <div class="carousel-slide">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; max-width: 900px; margin: 0 auto;">
                <div style="aspect-ratio: 16/9; overflow: hidden; background: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; padding: 2rem;">
                  <img src="${project.image || ''}" alt="${project.title}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                </div>
                <div>
                  <h3 style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 600; margin-bottom: 1rem;">${project.title}</h3>
                  <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">${project.description}</p>
                  <div style="display: flex; gap: 1rem;">
                    ${project.links.map(link => `<a href="${link.href}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${link.label}</a>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          `;
          carouselTrack.innerHTML += slideHtml;
        }
      });

      // Initialize logic after DOM is populated
      initProjectFilters();
      initReveal();
      initCarousel();

    } catch (error) {
      console.error("Error loading projects:", error);
    }
  }

  loadProjects();

  // ==========================================
  // PROJECT FILTERING SYSTEM
  // ==========================================
  function initProjectFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab styling
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filterValue = tab.getAttribute('data-filter');

        // Filter project cards
        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category').split(',');
          
          if (filterValue === 'all' || categories.includes(filterValue)) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ==========================================
  // INTERSECTION OBSERVER (REVEAL ON SCROLL)
  // ==========================================
  function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }

  // ==========================================
  // CONTACT FORM REAL HANDLING (Web3Forms AJAX)
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const btnSubmit = document.getElementById('btnSubmit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Fallback for file:// protocol: browsers block CORS fetch requests from local files.
      // We set attributes and submit via standard form POST instead of AJAX.
      if (window.location.protocol === 'file:') {
        contactForm.setAttribute('action', 'https://api.web3forms.com/submit');
        contactForm.setAttribute('method', 'POST');
        return; // Proceed with normal submission
      }

      e.preventDefault();

      // Disable button & change text to show sending status
      btnSubmit.disabled = true;
      const originalBtnText = btnSubmit.innerHTML;
      btnSubmit.innerHTML = 'Sending Message <i class="fa-solid fa-spinner fa-spin"></i>';

      const formData = new FormData(contactForm);
      formData.append("from_name", "Peter Jiao Portfolio");

      // Send actual email via Web3Forms AJAX endpoint
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Form submission failed.");
        }
      })
      .then(data => {
        if (data.success) {
          // Success feedback
          formStatus.textContent = 'Message sent successfully! Peter will get back to you shortly.';
          formStatus.className = 'form-status success';
          formStatus.style.display = 'block';

          // Reset form details
          contactForm.reset();
        } else {
          throw new Error(data.message || "Failed to submit form.");
        }
      })
      .catch(error => {
        // Fallback: If AJAX fails (e.g. network error), submit via standard POST
        console.warn("Web3Forms AJAX failed, falling back to standard POST:", error);
        contactForm.setAttribute('action', 'https://api.web3forms.com/submit');
        contactForm.setAttribute('method', 'POST');
        contactForm.submit();
      })
      .finally(() => {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = originalBtnText;

        // Hide notification after 5 seconds
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 5000);
      });
    });
  }

  // ==========================================
  // FEATURED CAROUSEL
  // ==========================================
  function initCarousel() {
    let carouselIndex = 0;
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselDotsContainer = document.getElementById('carouselDots');
    let carouselAutoplay;
    
    // Clear old dots just in case
    if (carouselDotsContainer) {
      carouselDotsContainer.innerHTML = '';
    }

    if (carouselSlides.length > 0) {
      // Create dots
      carouselSlides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.onclick = () => carouselGoTo(i);
        carouselDotsContainer.appendChild(dot);
      });

      function updateCarousel() {
        const offset = -carouselIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;

        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === carouselIndex);
        });
      }

      function carouselNext() {
        carouselIndex = (carouselIndex + 1) % carouselSlides.length;
        updateCarousel();
        resetAutoplay();
      }

      function carouselPrev() {
        carouselIndex = (carouselIndex - 1 + carouselSlides.length) % carouselSlides.length;
        updateCarousel();
        resetAutoplay();
      }

      function carouselGoTo(i) {
        carouselIndex = i;
        updateCarousel();
        resetAutoplay();
      }

      function startAutoplay() {
        carouselAutoplay = setInterval(() => {
          carouselIndex = (carouselIndex + 1) % carouselSlides.length;
          updateCarousel();
        }, 5000);
      }

      function resetAutoplay() {
        clearInterval(carouselAutoplay);
        startAutoplay();
      }

      window.carouselNext = carouselNext;
      window.carouselPrev = carouselPrev;
      startAutoplay();
    }
  }
});
