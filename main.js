function toggleNav(elementID) {
  const openNav = document.getElementById(elementID)

  openNav.dataset.shown = openNav.dataset.shown === "false"
    ? showElement(openNav) // will return "true"
    : hideElement(openNav) // will return "false"

}
function showElement(element) {
  element.classList.add('block')
  element.classList.remove('hidden')
  return "true"
}

function hideElement(element) {
  element.classList.add('hidden')
  element.classList.remove('block')
  return "false"
}
console.log('Hello World')

const scr = document.getElementById('scrl')

function myScrlup() {
  scr.classList.add('scrlups')
}
function myScrlup() {
  scr.classList.add('ssss')
}

let dropDown = document.getElementById('phones-d')
let flexes = document.getElementById('flexes')

function oneClick() {
  if (dropDown.classList.contains('animoff')) {
    dropDown.classList.add('anim')
    dropDown.classList.remove('animoff')
    flexes.classList.add('flex')
  } else {
    dropDown.classList.add('animoff')
    dropDown.classList.remove('anim')
    flexes.classList.remove('flex')
  }
}
console.log(dropDown)

let pads = document.getElementById('imgs')
let textSettings = document.getElementById('text-show')
let myName = 'Jhonn Marru Sentoy'
let myAge = 28

function pictShows() {
  if (pads.classList.contains('pics-hide')) {
    pads.classList.add('pics-show')
    pads.classList.remove('pics-hide')
    flexes.classList.add('flex')
    textSettings.classList.add('text-show')
    console.warn(`My Name ${myName} My Age ${myAge}`);
  } else {
    pads.classList.add('pics-hide')
    pads.classList.remove('pics-show')
    flexes.classList.remove('flex')
    textSettings.classList.remove('text-show')
  }
}
console.log(pads)


