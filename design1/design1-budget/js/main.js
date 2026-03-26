/* =========================================
   NABATIAN RESTAURANT - MAIN JAVASCRIPT
   Vanilla JS - No dependencies
   ========================================= */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  /* =========================================
     1. MOBILE MENU TOGGLE
     ========================================= */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('nav--open');

      // Animate hamburger icon
      const bars = navToggle.querySelectorAll('.nav__toggle-bar');
      bars.forEach((bar, index) => {
        if (nav.classList.contains('nav--open')) {
          if (index === 0) bar.style.transform = 'rotate(45deg) translateY(10px)';
          if (index === 1) bar.style.opacity = '0';
          if (index === 2) bar.style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
          bar.style.transform = '';
          bar.style.opacity = '';
        }
      });
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('nav--open');

        // Reset hamburger icon
        const bars = navToggle.querySelectorAll('.nav__toggle-bar');
        bars.forEach(bar => {
          bar.style.transform = '';
          bar.style.opacity = '';
        });
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');

        // Reset hamburger icon
        const bars = navToggle.querySelectorAll('.nav__toggle-bar');
        bars.forEach(bar => {
          bar.style.transform = '';
          bar.style.opacity = '';
        });
      }
    });
  }

  /* =========================================
     2. STICKY HEADER ON SCROLL
     ========================================= */
  const header = document.getElementById('header');

  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // Add shadow when scrolled
      if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }

      lastScroll = currentScroll;
    });
  }

  /* =========================================
     3. SMOOTH SCROLL FOR ANCHOR LINKS
     ========================================= */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#" (used for modal triggers, etc.)
      if (href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        // Get header height for offset
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* =========================================
     4. CONTACT FORM VALIDATION
     ========================================= */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      let isValid = true;
      const errorMessages = [];

      // Get form fields
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      const privacy = document.querySelector('input[name="privacy"]');

      // Validate name
      if (name && name.value.trim().length < 2) {
        isValid = false;
        errorMessages.push('Bitte geben Sie einen gültigen Namen ein.');
        name.style.borderColor = '#D82B2B';
      } else if (name) {
        name.style.borderColor = '';
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailRegex.test(email.value.trim())) {
        isValid = false;
        errorMessages.push('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        email.style.borderColor = '#D82B2B';
      } else if (email) {
        email.style.borderColor = '';
      }

      // Validate subject
      if (subject && subject.value === '') {
        isValid = false;
        errorMessages.push('Bitte wählen Sie einen Betreff aus.');
        subject.style.borderColor = '#D82B2B';
      } else if (subject) {
        subject.style.borderColor = '';
      }

      // Validate message
      if (message && message.value.trim().length < 10) {
        isValid = false;
        errorMessages.push('Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.');
        message.style.borderColor = '#D82B2B';
      } else if (message) {
        message.style.borderColor = '';
      }

      // Validate privacy checkbox
      if (privacy && !privacy.checked) {
        isValid = false;
        errorMessages.push('Bitte akzeptieren Sie die Datenschutzerklärung.');
      }

      // If not valid, prevent submission and show errors
      if (!isValid) {
        e.preventDefault();

        // Show error alert
        alert('Bitte korrigieren Sie folgende Fehler:\n\n' + errorMessages.join('\n'));
      } else {
        // Form is valid - show success message
        // Note: In production, this would be handled by a server-side script
        // For now, we'll allow the mailto: action to proceed

        // Optional: Show a loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) {
          submitButton.textContent = 'Wird gesendet...';
          submitButton.disabled = true;
        }
      }
    });

    // Clear error styling on input
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
      input.addEventListener('input', function() {
        this.style.borderColor = '';
      });
    });
  }

  /* =========================================
     5. LAZY LOADING IMAGES (Native)
     ========================================= */
  // Modern browsers support loading="lazy" attribute
  // For older browsers, we'll add a polyfill
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    console.log(`Native lazy loading: ${lazyImages.length} images`);
  } else {
    // Fallback: Intersection Observer
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if (lazyImages.length > 0 && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  /* =========================================
     6. ACTIVE NAV LINK HIGHLIGHTING
     ========================================= */
  // Highlight current page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage ||
        (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  /* =========================================
     7. SCROLL ANIMATIONS (Optional)
     ========================================= */
  // Add fade-in animations for elements as they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .highlight-card, .catering-card');

    if (elements.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      elements.forEach(element => {
        observer.observe(element);
      });
    }
  };

  // Initialize scroll animations
  animateOnScroll();

  /* =========================================
     8. FORM FIELD ENHANCEMENTS
     ========================================= */
  // Date picker: Set min date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Phone number formatting (optional)
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');

      // Format as: +49 123 456789
      if (value.startsWith('49')) {
        value = '+' + value;
      } else if (value.startsWith('0')) {
        value = '+49 ' + value.substring(1);
      }

      // Don't update if user is deleting
      if (e.inputType !== 'deleteContentBackward') {
        e.target.value = value;
      }
    });
  }

  /* =========================================
     9. ACCESSIBILITY ENHANCEMENTS
     ========================================= */
  // Trap focus in mobile menu when open
  const trapFocus = function(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input, select'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }

      // Close menu on Escape
      if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        navToggle.focus();
      }
    });
  };

  if (nav) {
    trapFocus(nav);
  }

  /* =========================================
     10. CONSOLE WELCOME MESSAGE
     ========================================= */
  console.log(
    '%c🍽️ Nabatian Restaurant',
    'font-size: 20px; font-weight: bold; color: #711521;'
  );
  console.log(
    '%cWebsite built by Axtrelis | https://axtrelis.com',
    'font-size: 12px; color: #666;'
  );

});

/* =========================================
   11. PERFORMANCE MONITORING (Development)
   ========================================= */
if (window.performance && window.performance.timing) {
  window.addEventListener('load', function() {
    setTimeout(function() {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;

      console.log('⚡ Performance Metrics:');
      console.log(`  Page Load Time: ${pageLoadTime}ms`);
      console.log(`  Server Response: ${connectTime}ms`);
      console.log(`  Render Time: ${renderTime}ms`);

      if (pageLoadTime < 2000) {
        console.log('  ✅ Excellent performance!');
      } else if (pageLoadTime < 4000) {
        console.log('  ⚠️ Good performance');
      } else {
        console.log('  ❌ Consider optimization');
      }
    }, 0);
  });
}