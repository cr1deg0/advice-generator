
import getAdvice from "./modules/getAdvice.js";
import renderAdvice from "./modules/renderAdvice.js";
import setTheme from "./modules/setTheme.js";


const URL = 'https://api.adviceslip.com/advice';

const btnAdvice = document.getElementById('btn-advice');

btnAdvice.addEventListener('click', () => {
    btnAdvice.blur();
    getAdvice(URL)
        .then(data => renderAdvice(data))
        .catch(error => console.log(error));
})

getAdvice(URL)
    .then(data => renderAdvice(data))
    .catch(error => {
        console.log(error);
        renderAdvice("Oops, it seems something went wrong")
    })

// const initialTheme = setInitialTheme();
// console.log(initialTheme)
setTheme();

// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// nnif (prefersDarkScheme.matches) {n  document.body.classList.add('dark-theme');n} 
// else {n  document.body.classList.remove('dark-theme');n}