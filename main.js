// movement animation to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container')
// items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// moving Animation Event
container.addEventListener('mousemove', e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

// Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none'
  // pop-out
  sneaker.style.transform = 'translateZ(125px) rotateZ(-20deg)'
  title.style.transform = 'translateZ(100px)'
  description.style.transform = 'translateZ(75px)'
  sizes.style.transform = 'translateZ(50px)'
  purchase.style.transform = 'translateZ(25px)'
})
// Animate out
container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  // pop back in
  sneaker.style.transform = 'translateZ(0) rotateZ(0deg)'
  title.style.transform = 'translateZ(0)'
  purchase.style.transform = 'translateZ(0)'
  description.style.transform = 'translateZ(0)'
  sizes.style.transform = 'translateZ(0)'
})
