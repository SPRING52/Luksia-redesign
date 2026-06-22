// Main JavaScript - Объединенный модуль всех интерактивных функций
(function () {
  "use strict";

  // ============================================
  // HEADER & NAVIGATION
  // ============================================

  const header = document.getElementById("main-header");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navDown = document.querySelector(".nav-down");
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  // Sticky header с тенью при скролле
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  }

  window.addEventListener("scroll", handleScroll);

  // Мобильное меню toggle
  function toggleMobileMenu() {
    const isActive = mobileMenuToggle.classList.toggle("active");
    navDown.classList.toggle("active");
    mobileMenuToggle.setAttribute("aria-expanded", isActive);
    document.body.style.overflow = isActive ? "hidden" : "";
  }

  function closeMobileMenu() {
    mobileMenuToggle.classList.remove("active");
    navDown.classList.remove("active");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  }

  // Dropdown меню
  if (dropdownToggle && dropdownMenu) {
    // Для мобильных и планшетов (≤1024px) - клик для открытия dropdown
    if (window.innerWidth <= 1024) {
      dropdownToggle.addEventListener("click", (e) => {
        const isHidden = dropdownMenu.getAttribute("aria-hidden") === "true";

        // Если dropdown закрыт - открываем его

        // Если dropdown уже открыт - позволяем переход по ссылке
      });

      // Закрываем dropdown при клике вне его
      document.addEventListener("click", (e) => {
        if (
          !dropdownToggle.contains(e.target) &&
          !dropdownMenu.contains(e.target)
        ) {
          dropdownMenu.setAttribute("aria-hidden", "true");
          dropdownToggle.setAttribute("aria-expanded", "false");
        }
      });
    } else {
      // Hover для desktop (>1024px)
      const dropdownParent = dropdownToggle.closest(".dropdown");

      dropdownParent.addEventListener("mouseenter", () => {
        dropdownMenu.setAttribute("aria-hidden", "false");
      });

      dropdownParent.addEventListener("mouseleave", () => {
        dropdownMenu.setAttribute("aria-hidden", "true");
      });
    }

    // Закрытие при клике вне меню (только для desktop)
    document.addEventListener("click", (e) => {
      if (
        window.innerWidth > 1024 &&
        !dropdownToggle.contains(e.target) &&
        !dropdownMenu.contains(e.target)
      ) {
        dropdownMenu.setAttribute("aria-hidden", "true");
      }
    });
  }

  // Адаптация при изменении размера окна
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth > 1024) {
        closeMobileMenu();
        if (dropdownMenu) {
          dropdownMenu.setAttribute("aria-hidden", "true");
        }
      }
    }, 250);
  });

  // Smooth scroll для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const offsetTop = target.offsetTop - header.offsetHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Accessibility: focus trap в мобильном меню
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      "a[href], button:not([disabled]), textarea, input, select",
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  if (navDown) {
    trapFocus(navDown);
  }

  // Preload optimization
  const allNavLinks = document.querySelectorAll(
    ".nav-link[href], .menu-item a[href]",
  );
  allNavLinks.forEach((link) => {
    link.addEventListener(
      "mouseenter",
      function () {
        const href = this.getAttribute("href");
        if (href && !href.startsWith("#") && !href.startsWith("http")) {
          const linkElement = document.createElement("link");
          linkElement.rel = "prefetch";
          linkElement.href = href;
          document.head.appendChild(linkElement);
        }
      },
      { once: true },
    );
  });

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Элементы для анимации
  const animatedElements = document.querySelectorAll(
    ".article-block, .card, .contacts-block, .motivation-block, .welcome-link, .course-search-section",
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Stagger effect для карточек
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });

  // ============================================
  // FOOTER ANIMATIONS
  // ============================================

  const footerObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const footerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const footerObserver = new IntersectionObserver(
    footerCallback,
    footerObserverOptions,
  );

  const footerLinks = document.querySelectorAll(".footer .links");

  footerLinks.forEach((linkBlock, index) => {
    linkBlock.style.transitionDelay = `${index * 0.1}s`;
    footerObserver.observe(linkBlock);
  });

  // ============================================
  // HERO ANIMATIONS
  // ============================================

  const hero = document.querySelector(".hero");
  const circle = document.querySelector(".circle");

  if (hero && circle) {
    // CSS анимации
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }

      .circle {
        animation: fadeInScale 1s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
    document.head.appendChild(style);
  }

  // ============================================
  // RIPPLE EFFECT
  // ============================================

  function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Применяем эффект к элементам с классом ripple-effect и кнопкам
  const rippleElements = document.querySelectorAll(
    ".ripple-effect, .welcome-link, .search-glass",
  );

  rippleElements.forEach((element) => {
    element.addEventListener("click", createRipple);
  });

  // ============================================
  // CARD HOVER EFFECTS (3D Tilt)
  // ============================================

  // Отключаем 3D эффект на мобильных и планшетах
  if (window.innerWidth > 1024) {
    cards.forEach((card) => {
      // 3D tilt эффект при движении мыши
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });

      // Возврат в исходное состояние
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });

      // Плавность
      card.style.transition =
        "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    });
  }
})();
