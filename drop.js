const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileProdutosBtn = document.getElementById("mobile-produtos-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");

  // Abre/fecha menu principal no mobile
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });

  // Abre/fecha submenu dropdown no mobile
  mobileProdutosBtn.addEventListener("click", function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      mobileDropdown.classList.toggle("show");
    }
  });

