const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const profileImage = document.querySelector("[data-profile-image]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (profileImage) {
  const markProfileLoaded = () => {
    profileImage.classList.add("is-loaded");
    profileImage.classList.remove("is-missing");
  };

  const markProfileMissing = () => {
    profileImage.classList.add("is-missing");
    profileImage.classList.remove("is-loaded");
  };

  if (profileImage.complete) {
    if (profileImage.naturalWidth > 0) {
      markProfileLoaded();
    } else {
      markProfileMissing();
    }
  }

  profileImage.addEventListener("load", markProfileLoaded);
  profileImage.addEventListener("error", markProfileMissing);
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});
