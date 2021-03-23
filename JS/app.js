

'use strict'
// const cart=document.getElementById('');
//Craete a constructor functuion 
const Phone = function (name, price,color,storage,camera,network,src) {
    this.name = name;
    this.price = price;
    this.color=color;
    this.storage=storage;
    this.camera=camera;
    this.network=network
    this.src=src
    this.votes=0;
    //add the object to an array
    Phone.all.push(this);
  };
  Phone.all = [];
  //create 10 phone objects

  function Phones(){
    new Phone('iPhone 12 Pro','850 JD','Silver Graphite','128GB','12MP','4G','src')
    new Phone('Xiaomi Mi A2 Lite','150 JD','Awsome Black','64GB','12MP','4G','src')
    new Phone('iPhone 11','467 JD','Yellow','64GB','12MP','4G','src')
    new Phone('Huawei Nova 6 Se','179 JD','Emerald Green','128GB','48MP','4G','src')
    new Phone('Samsung A31','179 JD',' Prism Crush Blue','128GB','48MP','4G','src')
    new Phone('Asus Zenfone 6','450 JD','Midnight Black','128GB','48MP','4G','src')
    new Phone('Huawei P30 Pro','668 JD',' Amber Sunrise','128GB','40MP','4G','src')
    new Phone('Iphone X','450 JD','Space Gray','128GB','12MP','4G','src')
    new Phone('iPhone 8','330 JD','White','128GB','12MP','4G','src')
    new Phone('Galaxy S21','668 JD','Gold','128GB','13MP','4G','src')
    

}
Phones();


function phoneLocalStorage(){
  let phoneArrayLocally= JSON.stringify(Phone.all);
  localStorage.setItem('phoneArray', phoneArrayLocally);
}


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

///////////////////////////////////////////////////img section comparing
let firstImgSection=document.getElementById('img01');
let secondtImgSection=document.getElementById('img02');
let firstImgChick=true;
let secondImgChick=false;
let compare2img=[];
for(let i=0;i<Phone.all.length;i++){
  phoneBtn[i].addEventListener('click',addToComapringBox);
}


function addToComapringBox(event ){

  for(let i=0;i<Phone.all.length;i++){
    if(firstImgChick){
      if(event.target.id===phoneBtn[i].id){
        firstImgSection.src=phoneImg[i].src;
        firstImgSection.title=phoneImg[i].title;
        firstImgChick=false;
        secondImgChick=true;
        phoneBtn[i].removeEventListener('click',addToComapringBox);
        compare2img[0]=Phone.all[i];
        console.log(phoneBtn[i].id);
      }
    } else
    if(secondImgChick){
      if(event.target.id===phoneBtn[i].id){
        secondtImgSection.src=phoneImg[i].src;
        secondtImgSection.title=phoneImg[i].title;
        firstImgChick=true;
        secondImgChick=false;
        phoneBtn[i].removeEventListener('click',addToComapringBox);
        compare2img[1]=Phone.all[i];
        console.log( Object.keys(compare2img[0])[0] );
        console.log(Object.keys(compare2img[0]).length);


      }

    }
  }
}

////////////////////////////////////////////////////table
let vsButton=document.getElementById('vsBtn');
let table=document.getElementById('table');
vsButton.addEventListener('click',tableComaring);

function tableComaring(event){
  /////////////////create table head
  table.setAttribute('border','5','ridge');
  table.style.color='brown';
  table.style.width='800px';

  let tr=document.createElement('tr');
  let th0=document.createElement('th');
  th0.textContent='Comparing';
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

    tr1.appendChild(td);
    tr1.appendChild(td01);
    tr1.appendChild(td02);

    table.appendChild(tr1);
   
  }

  ///////////////////////////////////////////////////
  vsButton.removeEventListener('click',tableComaring);
}



