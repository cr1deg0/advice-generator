const TYPE_SPEED = 50

const typeWriter = async (node, text, i) => {
  
  let index = i || 0
  if (index < text.length) {
    node.innerHTML += text.charAt(i)
    index++
    setTimeout(() => typeWriter(node, text, index), TYPE_SPEED)
  }
}

export default typeWriter