'use strict'

!function() {
  // определить ссылку на элемент документа
  const documentElement = document.documentElement
  
  // устанавливает смещение нижнему слою параллакса
  function setOffset(qparallax, style, speed) {
    // определить начальную позицию параллакса
    const start = Math.max(qparallax.offsetTop - documentElement.clientHeight, 0)

    // определить относительное смещение параллакса
    const relative = start > documentElement.clientHeight ? documentElement.clientHeight : qparallax.offsetTop

    // определить конечную позицию параллакса
    const end = start + relative + qparallax.offsetHeight

    // если скролл находится в промежутке между начальной и конечной позицией параллакса
    if (window.scrollY >= start && window.scrollY <= end) {
      // установить смещение нижнему слою параллакса
      style.setProperty('--offset', (window.scrollY - start) / 10 * speed)
    }
  }

  // определить хранилище обратных вызовов
  const callbacks = new Set()

  // перебрать все параллаксы
  for (const qparallax of document.querySelectorAll('.qparallax')) {
    // определить скорость параллакса
    const speed = qparallax.dataset.speed || 3

    // определить стиль нижнего слоя параллакса
    const style = qparallax.querySelector('.qparallax__lower').style

    // добавить обратный вызов в хранилище
    callbacks.add(() => setOffset(qparallax, style, speed))
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