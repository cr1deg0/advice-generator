import typeWriter from "./utils/typeWriter.js"

const renderAdvice = (data) => {
  const adviceId = document.getElementById("advice-id")
  const adviceText = document.getElementById("advice-text")
  const prefersReducedMotion = window.matchMedia("prefers-reduced-motion")
  const btnAdvice = document.getElementById("btn-advice")

  if (data.slip) {

    adviceId.innerHTML = `Advice #${data.slip.id}`

    if (prefersReducedMotion.matches) {

      adviceText.innerHTML = `"${data.slip.advice}"`

    } else {

      adviceText.innerHTML = ""

      btnAdvice.disabled = true
      const timeout = (data.slip.advice.length + 10) * 50

      typeWriter(adviceText, `"${data.slip.advice}"`)
      setTimeout(() => {btnAdvice.disabled = false}, timeout)
    }
  } else {
    textAdvice.innerHTML = data
  }
}

export default renderAdvice
