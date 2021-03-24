'use strict';

let vsButton=document.getElementById('vsBtn');
let paragraphBtn=document.getElementById('paragraphBtn');
let table=document.getElementById('table');

vsButton.style.display='none';

const Phone = function (name, price,color,storage,Memory,camera,src) {
  this.name = name;
  this.price = price;
  this.color=color;
  this.storage=storage;
  this.Memory=Memory;
  this.camera=camera;
  this.src= `/mobiles/${src}`;

  Phone.all.push(this);
};
Phone.all = [];

function phonesData(){
  new Phone('Huawei Enjoy 20se','220$','Crush Green','128GB','13MP','4G', 'huawei-enjoy-20-se-1.jpg');
  new Phone('Galaxy A72','550$','Awsome Black','128GB','64MP','4G','samsung-galaxy-a72-4g-10.jpg');
  new Phone('Galaxy M31s','470$','Mirage Black','128GB','64MP','4G','samsung-galaxy-m31s-2.jpg');
  new Phone('Galaxy note 20','790$','Mystic Blue','128GB','64MP','4G','samsung-galaxy-note20-1.jpg');
  new Phone('Galaxy A21 Ultra','1150$','Phantom Brown','128GB','108MP','4G','samsung-galaxy-s21-ultra-5g-1.jpg');
  new Phone('Iphone 12 pro','1180$','Silver Graphite','128GB','12MP','4G','apple-iphone-12-pro-r1.jpg');
  new Phone('Iphone SE 2020','400$','Red','64GB','12MP','4G','apple-iphone-se-2020-2.jpg');
  new Phone('Iphone X','530$','Space Gray','64GB','12MP','4G','apple-iphone-x-new-1.jpg');
  new Phone('Huawei Mate 40E','840$','White','128GB','64MP','4G','huawei-mate-40-1.jpg');
  new Phone('Huawei P Smart 2020','250$','Aurora Blue','128GB','13MP','4G','huawei-p-smart-2020-t.jpg');
}
phonesData();
/////////////////////////////////////////////
function phoneLocalStorage(){
  let phoneArrayLocally= JSON.stringify(Phone.all);
  localStorage.setItem('phoneArray', phoneArrayLocally);
}

// console.log(Phone.all);

//////////////////////////////////////////////img button on the left
const boxImg=document.getElementById('divForphoneBox');
let phoneBtn=[];
let phoneImg=[];
function render(){
  for(let i=0;i<Phone.all.length;i++){
    phoneBtn[i]=document.createElement('button');
    phoneImg[i]=document.createElement('img');

    phoneBtn[i].setAttribute('id',`button${i}`);
    phoneImg[i].src=Phone.all[i].src;
    phoneImg[i].title=Phone.all[i].name;
    phoneBtn[i].innerText=phoneImg[i].title;
    phoneBtn[i].appendChild(phoneImg[i]);
    boxImg.appendChild(phoneBtn[i]);

    phoneLocalStorage();
  }
}
render();
let phoneArrayLocally=JSON.parse(localStorage.getItem('phoneArray'));
console.log(phoneArrayLocally);
///////////////////////////////////////////////////img section comparing
let firstImgSection=document.getElementById('img01');
let secondtImgSection=document.getElementById('img02');
let firstImgChick=true;
let secondImgChick=false;
let btnappearance=false;
let compare2img=[];
for(let i=0;i<Phone.all.length;i++){
  phoneBtn[i].addEventListener('click',addToComapringBox);
}


function addToComapringBox(event){

  for(let i=0;i<Phone.all.length;i++){
    if(firstImgChick){
      if(event.target.id===phoneBtn[i].id){
        firstImgSection.src=phoneImg[i].src;
        firstImgSection.title=phoneImg[i].title;
        firstImgChick=false;
        secondImgChick=true;
        phoneBtn[i].removeEventListener('click',addToComapringBox);
        compare2img[0]=Phone.all[i];
        // barImg01.textContent=phoneImg[i].title;
        console.log(phoneBtn[i].id);
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
        phoneBtn[i].removeEventListener('click',addToComapringBox);
        compare2img[1]=Phone.all[i];
        console.log( Object.keys(compare2img[0])[0] );
        console.log(Object.keys(compare2img[0]).length);

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
  table.innerText='';
  table.setAttribute('border','5','ridge');
  table.style.color='gray';
  table.style.width='950px';

  let tr=document.createElement('tr');
  tr.style.background='gray';
  tr.style.color='white';

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

    td.style.backgroundColor='gray';
    td.style.color='white';

    tr1.appendChild(td);
    tr1.appendChild(td01);
    tr1.appendChild(td02);

    table.appendChild(tr1);
  }

  ///////////////////////////////////////////////////
  vsButton.removeEventListener('click',tableComaring);
}
//   table.remove();
////////btn for cacel image from it's own place
// function cancelBtn(event){
//   //firstImgSection.style.display='none';
//   firstImgSection.title='';
//  }

