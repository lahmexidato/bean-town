// Bean Town — main.js
// Nav scroll state + mobile menu toggle

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
