'use strict'

!function() {
  // определить хранилище обратных вызовов
  const callbacks = new Set()

  // перебрать все параллаксы
  for (const qparallax of document.querySelectorAll('.qparallax')) {
    // определить скорость параллакса
    const speed = qparallax.dataset.speed || 3

    // определить стиль нижнего слоя параллакса
    const style = qparallax.querySelector('.qparallax__lower').style

    // добавить обратный вызов в хранилище
    callbacks.add(() => {
      // определить начальную позицию параллакса
      const start = Math.max(qparallax.offsetTop - window.innerHeight, 0)

      // определить относительное смещение параллакса
      const offset = start > window.innerHeight ? window.innerHeight : qparallax.offsetTop

      // определить конечную позицию параллакса
      const end = start + offset + qparallax.offsetHeight

      // если скролл находится в промежутке между начальной и конечной позицией параллакса
      if (window.scrollY >= start && window.scrollY <= end) {
        // добавить смещение нижнему слою параллакса
        style.setProperty('--offset', (window.scrollY - start) / 10 * speed)
      }
    })
  }

  // определить датчик выполнения
  let teak = true

  // при прокрутке окна, вызвать обратные вызовы из хранилища
  window.addEventListener('scroll', () => {
    // если датчик включен
    if (teak) {
      // выключить датчик
      teak = false

      // выполнить обратные вызовы всех параллаксов
      callbacks.forEach(cb => cb())

      // включить датчик
      teak = true
    }
  })
}()