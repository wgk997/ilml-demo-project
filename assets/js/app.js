var splide = new Splide( '.splide', {
    direction: 'ttb',
    height   : '10rem',
  } );
  
  splide.mount();



























const slideClose = document.querySelector('.splide');
const openSide = document.querySelector('.sid_effect');

const openControl = document.getElementById('getst');
const allClose = document.getElementById('allclose');

const navMenu = document.getElementById('nav-Col');
const navBtn = document.getElementById('navBtn');
const navC = document.getElementById('navC');
navC.style.display = "none";
navBtn.addEventListener('click', ()=>{
  navMenu.style.display = 'block';
  navC.style.display = "block";
  navBtn.style.display = "none"
})

allClose.style.display = 'none';
openControl.addEventListener('click', ()=>{
  allClose.style.display = 'block';
  slideClose.style.display = "flex";
  openSide.style.display = 'none';
  allClose.style.display = 'none';


})

allClose.addEventListener('click', ()=>{

 
  slideClose.style.display = "none";
  openSide.style.display = 'block';

})
navC.addEventListener('click',()=>{
  navC.style.display = "none";
  navMenu.style.display = 'none';
  allClose.style.display= 'block';
  navBtn.style.display = "block";
})


const feat1 = document.getElementById('feat1');
const fea_link = documennt.querySelector('.fea_link');


fea_link.addEventListener('click',()=>{

style.display = 'flex';
})
