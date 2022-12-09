import Eden from '../eden.js'

const container = document.getElementById('edenContainer')
const eden = new Eden(container)

eden.map(10, 8)

eden.build('wall', {
  coords: [{y: 2, x: 1}, {y: 2, x: 0}],
  color: 'gray'
})

eden.listener('left', () => console.log('click left'))

eden.spawn('tiger', {
  y: 5,
  x: 0,
  color: 'orange'
})
eden.spawn('meet', {
  y: eden.random(9),
  x: eden.random(9),
  color: 'red'
})