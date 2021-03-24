'use strict';
let vsButton=document.getElementById('vsBtn');
let paragraphBtn=document.getElementById('paragraphBtn');
let table=document.getElementById('table');
vsButton.style.display='none';
table.style.display='none';
let comparingPhone=JSON.parse(localStorage.getItem('Phones'));
//////////////////////////////////////////////img button on the left
const boxImg=document.getElementById('divForphoneBox');
let phoneBtn=[];
let phoneImg=[];
function render(){
  for(let i=0;i<comparingPhone.length;i++){
    phoneBtn[i]=document.createElement('button');
    phoneImg[i]=document.createElement('img');
    phoneBtn[i].setAttribute('id',`button${i}`);
    phoneImg[i].src=comparingPhone[i].src;
    phoneImg[i].style.width='25px';
    phoneImg[i].style.height='40px';
    phoneImg[i].title=comparingPhone[i].name;
    phoneBtn[i].innerText=phoneImg[i].title;
    phoneBtn[i].style.fontSize='17px';
    phoneBtn[i].style.fontWeight='bold';
    phoneBtn[i].appendChild(phoneImg[i]);
    boxImg.appendChild(phoneBtn[i]);
  }
}
render();
///////////////////////////////////////////////////img section comparing
let firstImgSection=document.getElementById('img01');
let secondtImgSection=document.getElementById('img02');
let firstImgChick=true;
let secondImgChick=false;
let btnappearance=false;
let compare2img=[];
for(let i=0;i<comparingPhone.length;i++){
  phoneBtn[i].addEventListener('click',addToComapringBox);
}
function addToComapringBox(event){
  for(let i=0;i<comparingPhone.length;i++){
    if(firstImgChick){
      if(event.target.id===phoneBtn[i].id){
        firstImgSection.src=phoneImg[i].src;
        firstImgSection.title=phoneImg[i].title;
        firstImgChick=false;
        secondImgChick=true;
        compare2img[0]=comparingPhone[i];
        if(btnappearance) vsButton.addEventListener('click',tableComaring);
      }
    } else
    if(secondImgChick){
      if(event.target.id===phoneBtn[i].id){
        secondtImgSection.src=phoneImg[i].src;
        secondtImgSection.title=phoneImg[i].title;
        firstImgChick=true;
        secondImgChick=false;
        btnappearance=true;
        compare2img[1]=comparingPhone[i];
        paragraphBtn.style.display='none';
        vsButton.style.display='inline-block';
        vsButton.addEventListener('click',tableComaring);
      }
    }
  }
}
////////////////////////////////////////////////////table
function tableComaring(event){
  /////////////////create table head
  if(event.target.id===vsButton.id){
    table.style.display='inline-table';
    table.innerText='';
    table.setAttribute('border','5','ridge');
    let tr=document.createElement('tr');
    tr.style.background='#062F4F';
    let th0=document.createElement('th');
    th0.textContent='Specification/phone';
    let th1=document.createElement('th');
    th1.textContent=Object.values(compare2img[0])[0] ;
    let th2=document.createElement('th');
    th2.textContent=Object.values(compare2img[1])[0] ;
    tr.appendChild(th0);
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
    /////////////////////////create the contact
    for(let i=1; i<Object.keys(compare2img[0]).length-1;i++){
      let tr1=document.createElement('tr');
      let td=document.createElement('td');
      td.textContent=Object.keys(compare2img[0])[i] ;
      let td01=document.createElement('td');
      td01.textContent=Object.values(compare2img[0])[i];
      let td02=document.createElement('td');
      td02.textContent=Object.values(compare2img[1])[i];
      td.style.backgroundColor='#062F4F';
      tr1.appendChild(td);
      tr1.appendChild(td01);
      tr1.appendChild(td02);
      table.appendChild(tr1);
    }
  }
  ///////////////////////////////////////////////////
  vsButton.removeEventListener('click',tableComaring);
}
