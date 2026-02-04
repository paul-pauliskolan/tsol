(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }
  // Dark/Light mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeToggle) themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
  }
  // Initial theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme("light");
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current =
        root.getAttribute("data-theme") === "light" ? "dark" : "light";
      setTheme(current);
    });
  }
})();
