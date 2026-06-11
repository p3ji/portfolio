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
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
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
    "optimize public policy.",
    "model career economics.",
    "explore AI design concepts."
  ];
  const typingSpeed = 80;
  const erasingSpeed = 40;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

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

  // Initial typing trigger
  if (typedTextSpan) {
    setTimeout(type, 1000);
  }

  // ==========================================
  // PROJECT FILTERING SYSTEM
  // ==========================================
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

  // ==========================================
  // INTERSECTION OBSERVER (REVEAL ON SCROLL)
  // ==========================================
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
});
