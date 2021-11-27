import _ from 'lodash'
import '../commons/commons.scss'
import './contact.scss'
import img from '../../images/image-02.jpg'

function imageAdd() {
  const image = document.createElement('img')
  image.src = img
  return image
}

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
document.body.appendChild(imageAdd())

console.log('contact page');
