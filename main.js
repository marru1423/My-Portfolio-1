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

    let searchBox = document.querySelector('box-search');
    let searchBtn = document.querySelector('.search-fab');

      searchBtn.onclik = function(){
      let url = 'https://www.google.com/search?q='+searchBox.value;
        window.open(url, '_blank')
    }
    console.log(searchBtn)