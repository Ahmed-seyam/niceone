import { isClient } from '@vueuse/core'

const removeAlert = (el, delay) => {
  if (!el)
    return

  setTimeout(() => {
    el.style.transform = 'translateY(-2rem)'
    el.style.opacity = '0'
    setTimeout(() => {
      el.remove()
    }, 500)
  }, delay)
}

export function Alert(type, message, delay = 1000) {
  if (!isClient)
    return

  const alertsDiv = document.getElementById('alerts')
  // create alert element and insert the markup html into it
  const el = document.createElement('div')
  el.classList.add('alert')
  el.classList.add(`alert--${type}`)

  // append the alert in the alerts container
  alertsDiv.appendChild(el)

  // create a markup html for each alert type
  let markup
  switch (type) {
    case 'success': {
      markup = `
        <svg class='alert__icon alert__icon--${type}'>
           <use xlink:href='/images/sprite.svg#icon-check-circle' />
        </svg>
        <div class='alert__message'>
          ${message}
         </div>

    `
      break
    }
    case 'warning': {
      markup = `
        <svg class='alert__icon alert__icon--warning'>
            <use xlink:href='/images/sprite.svg#icon-alert-triangle'/>
        </svg>
        <div class='alert__message'>${message}</div>

    `
      break
    }

    case 'error': {
      markup = `
        <svg class='alert__icon alert__icon--error'>
            <use xlink:href='/images/sprite.svg#icon-alert-triangle'/>
        </svg>
        <div class='alert__message'>${message}</div>

    `
      break
    }

    default: {
      markup = `
        <svg class='alert__icon alert__icon--info'>
            <use xlink:href='/images/sprite.svg#icon-alert-triangle'/>
        </svg>
        <div class='alert__message'>${message}</div>
    `
      break
    }
  }

  el.innerHTML = markup

  el.addEventListener('click', () => {
    removeAlert(el, 0)
  })
  // remove the alert after delay
  removeAlert(el, delay)
}
