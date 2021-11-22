import _ from 'lodash'
import feature from './feature'
import '../commons/commons.css'

function component() {
  const element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '2021', 'inde', 'page'], ' ')

  return element
}

document.body.appendChild(component())

console.log('index page ready ...')
feature()
