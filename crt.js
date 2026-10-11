// ========================================================
// Interaktivitas Portofolio — Mobile Menu, ScrollSpy, Form
// ========================================================

document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Menu Navigasi HP (Mobile Dropdown)
  const menuBtn = document.getElementById('menuBtn');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuBtn && mobileDropdown) {
    menuBtn.addEventListener('click', function () {
      mobileDropdown.classList.toggle('hidden');
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDropdown.classList.add('hidden');
      });
    });
  }

  // 2. ScrollSpy: Tandai Menu Aktif Saat Halaman Di-scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  function updateNav() {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(function (item) {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      if (href === '#' + currentId) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateNav);
  updateNav();

  // 3. Feedback Pengiriman Formulir Kontak
  const kontakForm = document.getElementById('kontakForm');
  if (kontakForm) {
    kontakForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      
      alert(
        `Halo ${nama}!\n\nTerima kasih sudah mengirimkan pesan.\nPesan Anda telah diterima, saya akan segera merespons ke ${email}.`
      );
      kontakForm.reset();
    });
  }

});