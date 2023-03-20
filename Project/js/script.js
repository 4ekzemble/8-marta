let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('header');
menuBtn.addEventListener('click',function(){
  menu .classList.toggle('open');
})

window.addEventListener('keydown', (e) =>{
  if (e.key === 'Escape') {
    document.querySelector('header').classList.remove('open');
  }
})

document.getElementById('menu').addEventListener('click', (event)=>{
  event._isClickWithInMenu = true;
})

document.getElementBy('burger').addEventListener('click', (event)=>{
  event._isClickWithInMenu = true;
})
document.body.addEventListener('click', (event)=>{
  if (event._isClickWithInMenu) return;
  document.querySelector('header').classList.remove('open');
})
