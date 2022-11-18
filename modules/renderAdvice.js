import typeWriter from './utils/typeWriter.js'

const renderAdvice = (data) => {

    const adviceId = document.getElementById('advice-id')
    const adviceText = document.getElementById('advice-text');
    const prefersReducedMotion = window.matchMedia('prefers-reduced-motion');

    if (data.slip) {

        adviceId.innerHTML = `Advice #${data.slip.id}`;
        if (prefersReducedMotion.matches) {
            adviceText.innerHTML = `"${data.slip.advice}"`;
        } else {
            adviceText.innerHTML = '';
            typeWriter(adviceText, `"${data.slip.advice}"`);
        }    
    } else {

        textAdvice.innerHTML = data;

    }
}

export default renderAdvice