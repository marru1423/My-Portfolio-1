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

    let searchBox = document.querySelector('#box-search');
    console.log(searchBox)
    let searchBtn = document.querySelector('.search-fab');
    console.log(searchBtn)

    searchBtn.onclick = function () {
    const url = `https://www.google.com/search?q=${searchBox.value}`;
    window.open(url, '_blank')
}

// const Name = "marru";
// const Age = 28;
// let String = `My name ${Name} And my Age ${Age}`;
// console.log(String);