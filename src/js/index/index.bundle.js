import _ from 'lodash'
import feature from './feature'
import '../commons/commons.scss'
import './index.scss'
import mainFile from '../../images/image-02.jpg'

// add image sample
function image() {
  const img = document.createElement('img')
  img.src = mainFile

  return img
}

// add a sample component
function component() {
  const element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '2021', 'inde', 'page'], ' ')

  return element
}

document.body.appendChild(component())
document.body.appendChild(image())

console.log('index page ready ...')
feature()
