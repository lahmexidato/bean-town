// Bean Town — main.js
// Nav scroll state, mobile menu toggle, email capture, scroll reveal

(function () {

  // Nav: add .scrolled class when page is scrolled past the hero
  var nav = document.getElementById('site-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 72);
    }, { passive: true });
  }

  // Mobile menu toggle
  var toggle = document.getElementById('nav-toggle');
  var menu   = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.classList.toggle('open');
      menu.classList.toggle('open', isOpen);
      menu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on any menu link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        toggle.classList.remove('open');
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

})();

// ─── Email capture — AJAX form submission
(function () {
  function setupForm(formId, feedbackId) {
    var form = document.getElementById(formId);
    var feedback = document.getElementById(feedbackId);
    if (!form || !feedback) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var original = btn.textContent;
      btn.textContent = 'sending…';
      btn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            feedback.textContent = 'you\'re in. first email on us.';
            form.reset();
          } else {
            feedback.textContent = 'something went wrong — try again or email us directly.';
          }
        })
        .catch(function () {
          feedback.textContent = 'couldn\'t reach the server — check your connection.';
        })
        .finally(function () {
          btn.textContent = original;
          btn.disabled = false;
        });
    });
  }

  setupForm('home-email-form', 'home-email-feedback');
  setupForm('cafe-email-form', 'cafe-email-feedback');
})();

// ─── Scroll reveal
(function () {
  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    '.card, .principle, .bar-step, .value-item, .space-detail, .wave-list li, .founder'
  );
  if (!targets.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
