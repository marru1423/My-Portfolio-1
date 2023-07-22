
let closeAllApps = document.getElementById('Homes')
let services = document.getElementById('Services')
let openNav = document.getElementById('myHeader')

function toggleNav() {
  if (openNav.classList.contains('hidden')) {
    openNav.classList.add('block')
    openNav.classList.remove('hidden')
  } else {
    openNav.classList.add('hidden')
    openNav.classList.remove('block')
  }
}
console.log(openNav)
console.log(services)

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
    ShowsTheTab.classList.remove('flexoff')

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
