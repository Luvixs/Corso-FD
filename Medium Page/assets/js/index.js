const myNav = document.getElementById('navbar')
const myButton = document.getElementById('buttonGetStarted')
const hero = document.getElementById('hero')

window.onscroll = function() {
    if(window.scrollY > (hero.offsetTop + hero.offsetHeight)){
    myNav.classList.add('scrolled')
    myButton.classList.add('scrolled')
  }else{
    myNav.classList.remove('scrolled')
    myButton.classList.remove('scrolled')
  }
}