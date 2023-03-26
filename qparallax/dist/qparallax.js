'use strict'

!function() {
  // определить хранилище обратных вызовов
  const callbacks = new Set()

  // перебрать все параллаксы
  for (const qparallax of document.querySelectorAll('.qparallax')) {
    // определить скорость параллакса
    const speed = qparallax.dataset.speed || 2

    // определить стиль параллакса
    const style = qparallax.querySelector('.qparallax__lower').style

    // добавить обратный вызов в хранилище
    callbacks.add(() => style.setProperty('--offset', window.scrollY * speed))
  }

  // при прокрутке окна, вызвать обратные вызовы из хранилища
  window.addEventListener('scroll', () => callbacks.forEach(cb => cb()))
}()