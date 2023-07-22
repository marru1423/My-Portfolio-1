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

// let closeAllApps = document.getElementById('Homes')
// let services = document.getElementById('Services')

// function toggleNav(){
//   if(closeAllApps.classList.contains('hidden')){
//     closeAllApps.classList.add('block')
//     closeAllApps.classList.remove('hidden')

//   }else{
//     closeAllApps.classList.add('hidden')
//     closeAllApps.classList.remove('block')
//   }
// }

const scr = document.getElementById('scrl')

function myScrlup() {
  scr.classList.add('scrlups')
}
function myScrlup() {
  scr.classList.add('ssss')
}
let phonesBtns = document.getElementById('btn-phones')
let dropDown = document.getElementById('phones-d')
let flexes = document.getElementById('flexes')

function oneClick() {
  if (dropDown.classList.contains('animoff')) {
    dropDown.classList.add('anim')
    dropDown.classList.remove('animoff')

    flexes.classList.add('flexon')
    flexes.classList.remove('flexoff')

    phonesBtns.classList.add('scales')
  } else {
    dropDown.classList.add('animoff')
    dropDown.classList.remove('anim')

    flexes.classList.add('flexoff')
    flexes.classList.remove('flexon')

    phonesBtns.classList.remove('scales')
  }
}
console.log(dropDown)

let phonesBtn = document.getElementById('btn-Picture')
let pads = document.getElementById('imgs')
let textSettings = document.getElementById('text-show')
let myName = 'Jhonn Marru Sentoy'
let myAge = 28
let ShowsTheTab = document.getElementById('side-tab')

function pictShows() {
  if (pads.classList.contains('pics-hide')) {
    pads.classList.add('pics-show')
    pads.classList.remove('pics-hide')

    flexes.classList.add('flexon')
    flexes.classList.remove('flexoff')

    textSettings.classList.add('text-show')
    textSettings.classList.remove('text-hide')


    console.warn(`My Name ${myName} My Age ${myAge}`);

    ShowsTheTab.classList.add('flexon')
    ShowsTheTab.classList.remove('flex')

    phonesBtn.classList.add('scales')

  } else {
    pads.classList.add('pics-hide')
    pads.classList.remove('pics-show')

    flexes.classList.add('flexoff')
    flexes.classList.remove('flexon')

    textSettings.classList.add('text-hide')
    textSettings.classList.remove('text-show')

    ShowsTheTab.classList.add('flexoff')
    ShowsTheTab.classList.remove('flexon')
    
    phonesBtn.classList.remove('scales')

  }
}
console.log(pads)

let warn = 'Ooopss! Sorry this time the site that you want to see is Maintenance!'

function warNing() {
  alert(warn)
}
