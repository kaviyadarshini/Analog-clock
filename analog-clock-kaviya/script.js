setInterval(setClock, 1000)

const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setClock() {
  const now = new Date()
  const secRatio = now.getSeconds() / 60
  const minRatio = (secRatio + now.getMinutes()) / 60
  const hourRatio = (minRatio + now.getHours()) / 12
  setRotation(secHand, secRatio)
  setRotation(minHand, minRatio)
  setRotation(hourHand, hourRatio)

  if (now.getSeconds() === 0) {
    secHand.style.transition = 'none'
  } else {
    secHand.style.transition = 'all 0.05s cubic-bezier(0.175, 2, 0.32, 1.275)'
  }
}

function setRotation(e, rotationRatio) {
  e.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
