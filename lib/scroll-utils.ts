/**
 * Função para rolar suavemente até um elemento com animação
 * @param elementId - ID do elemento para onde rolar
 * @param offset - Deslocamento opcional do topo (padrão: 0)
 * @param duration - Duração da animação em ms (padrão: 800)
 */
export function scrollToElement(elementId: string, offset = 0, duration = 800): void {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  // Posição inicial
  const startPosition = window.pageYOffset
  // Distância a percorrer
  const distance = offsetPosition - startPosition

  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    // Função de easing para dar um efeito mais natural
    const ease = easeOutCubic(progress)

    window.scrollTo(0, startPosition + distance * ease)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  // Função de easing cúbica
  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3)
  }

  requestAnimationFrame(animation)
}
