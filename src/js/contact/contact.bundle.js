import _ from 'lodash'
import '../commons/commons.css'

function component() {
  const element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(
    ['Hello', 'webpack', '2021', 'from', 'Contact', 'Page'],
    ' '
  )

  return element
}

document.body.appendChild(component())

console.log('contact page');
