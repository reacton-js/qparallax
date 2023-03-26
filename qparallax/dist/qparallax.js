'use strict'

!function() {
  const callbacks = new Set()

  for (const qparallax of document.querySelectorAll('.qparallax')) {
    const speed = qparallax.dataset.speed || 2
    const style = qparallax.querySelector('.qparallax__lower').style
    callbacks.add(() => style.setProperty('--offset', window.scrollY * speed))
  }

  window.addEventListener('scroll', () => callbacks.forEach(cb => cb()))
}()