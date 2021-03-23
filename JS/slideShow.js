'use strick';
function creatSideShow(){

  let div=document.createElement('div');
  div.className='sectionforslideShow';
  let imgArray=['ronaldon','1','2','3','4','5'];

  for(let i=1;i<=6;i++){
    let div1=document.createElement('div');
    div1.className='mySlides';
    let div2=document.createElement('div');
    div2.className='numbertext';
    div2.textContent=`${i}/6`;
    let img=document.createElement('img');
    img.src='/imgStore/ronaldo.jpg';
    img.style.width='100%';
    div1.appendChild(div2);
    div1.appendChild(img);
    div.appendChild(div1);
  }
}
// creatSideShow();




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('demo');
  let captionText = document.getElementById('caption');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += 'active';
  captionText.innerHTML = dots[slideIndex-1].alt;
}


