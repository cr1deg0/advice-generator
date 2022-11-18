const setTheme = () => {
    
  const prefersLigthScheme = window.matchMedia("(prefers-color-scheme: light)");
  const themeToggler = document.querySelector(".theme-toggler");

  let nextTheme = !prefersLigthScheme.matches ? "Light" : "Dark";

  themeToggler.innerHTML = `${nextTheme} Mode<span class="material-symbols-outlined" aria-hidden="true">${nextTheme}_mode</span>`;

  themeToggler.addEventListener("click", () => {
    if (prefersLigthScheme.matches) {
      document.body.classList.toggle("dark-theme");
      nextTheme = document.body.classList.contains("dark-theme")
        ? "Light"
        : "Dark";
    } else {
      document.body.classList.toggle("light-theme");
      nextTheme = document.body.classList.contains("light-theme")
        ? "Dark"
        : "Light";
    }
    themeToggler.innerHTML = `${nextTheme} Mode<span class="material-symbols-outlined" aria-hidden="true">${nextTheme}_mode</span>`;
  });
};

export default setTheme;
