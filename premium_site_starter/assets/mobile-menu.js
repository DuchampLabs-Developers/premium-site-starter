    const hamburgerBtn = document.getElementById('hamburger');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerOpenIcon = document.getElementById('hamburger-open');
    const hamburgerCloseIcon = document.getElementById('hamburger-close');

    function openMenu() {
      mobileMenuBackdrop.classList.remove('hidden');
      hamburgerOpenIcon.classList.add('hidden');
      hamburgerCloseIcon.classList.remove('hidden');

      requestAnimationFrame(() => {
        mobileMenu.classList.remove('scale-95', 'opacity-0');
        mobileMenu.classList.add('scale-100', 'opacity-100');
      });
    }

    function closeMenu() {
      mobileMenu.classList.add('scale-95', 'opacity-0');
      mobileMenu.classList.remove('scale-100', 'opacity-100');

      hamburgerOpenIcon.classList.remove('hidden');
      hamburgerCloseIcon.classList.add('hidden');

      setTimeout(() => mobileMenuBackdrop.classList.add('hidden'), 300);
    }

    // Open menu when hamburger is clicked
    hamburgerBtn.addEventListener('click', openMenu);

    // Close menu when clicking anywhere (inside or outside)
    mobileMenuBackdrop.addEventListener('click', closeMenu);
    mobileMenu.addEventListener('click', closeMenu);
