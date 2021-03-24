'use strick';
const CartItem =function(product ,quantity ,price){
  this.product=product;
  if(!JSON.parse(localStorage.getItem('phoneArray'))===null){
    this.quantity=JSON.parse(localStorage.getItem('phoneArray')).quantity;
    console.log(JSON.parse(localStorage.getItem('phoneArray')).quantity);
  } else this.quantity=quantity;
  this.price=price;
  if(!CartItem.array.includes(this.product)){
    CartItem.array.push(this);
    console.log(CartItem.array +'  after push');
  }
};
CartItem.array=[];
// if(localStorage.getItem('phoneArray')!==null) {
//   if((localStorage.getItem('phoneArray'))!==JSON.stringify(CartItem.array)){
//     CartItem.array=JSON.parse(localStorage.getItem('phoneArray'));
//     console.log(JSON.stringify(CartItem.array)+' \n array with local\n' +localStorage.getItem('phoneArray'));
//   }
// }
function localStProduct(){ ////saving data for cart
  localStorage.setItem('phoneArray',JSON.stringify(CartItem.array));
}
function phoneLocalStorage(){ ////saving data to local storage
  let phoneArrayLocally= JSON.stringify(Phone.all);
  localStorage.setItem('Phones', phoneArrayLocally);
}
const Phone = function(name, price,color,storage,Memory,camera,src){
  this.name = name;
  this.price = price;
  this.color=color;
  this.storage=storage;
  this.Memory=Memory;
  this.camera=camera;
  this.src= `/newPhonesDataImg/${src}.jpg`;
  Phone.all.push(this);
};
Phone.all=[];/// array for all Product specification
function phonesData(){
  new Phone('iPhone 12 Pro','850 JD','Silver Graphite','128GB','12MP','4G','iphone-12-pro');
  new Phone('Xiaomi Mi A2 Lite','150 JD','Awsome Black','64GB','12MP','4G','xiaomi-mi-a2-lite');
  new Phone('iPhone 11','467 JD','Yellow','64GB','12MP','4G','Iphone-11-Red-Front-800x800');
  new Phone('Huawei Nova 6 Se','179 JD','Emerald Green','128GB','48MP','4G','huawei-nova-6-se');
  new Phone('Samsung A31','179 JD',' Prism Crush Blue','128GB','48MP','4G','samsung-A-31');
  new Phone('Asus Zenfone 6','450 JD','Midnight Black','128GB','48MP','4G','asus-zain-phone');
  new Phone('Huawei P30 Pro','668 JD',' Amber Sunrise','128GB','40MP','4G','Huawei-P30-Pro');
  new Phone('Iphone X','450 JD','Space Gray','128GB','12MP','4G','iphone_x');
  new Phone('iPhone 8','330 JD','White','128GB','12MP','4G','iphone-8');
  new Phone('Galaxy S21','668 JD','Gold','128GB','13MP','4G','Galaxy-s2');
}
phonesData();
//////////////////////////////////////////////////////////////////////////////////////
function creatProductShow(){
  let productShowimg=document.getElementById('productShow');
  let phoneImgSmall=[];
  for(let i=1;i<=Phone.all.length;i++){
    let divforSecitions1=document.createElement('div');//.getElementsByClassName(`flip-box${i}`);
    divforSecitions1.className=`flip-box${i}`;
    let divforSecitions2=document.createElement('div');
    divforSecitions2.className=`flip-box-inner${i}`;
    divforSecitions1.appendChild(divforSecitions2);
    let divforSecitions3=document.createElement('div');
    divforSecitions3.className= `flip-box-front${i}`; ////conatain img
    phoneImgSmall[i]=document.createElement('img');
    phoneImgSmall[i].src=Phone.all[i-1].src;
    phoneImgSmall[i].style.width='100%';
    phoneImgSmall[i].style.height='170px';
    if(i===6 || i===3 || i===4) {
      phoneImgSmall[i].style.width='100%';
      phoneImgSmall[i].style.height='180px';
    }
    if(i===9) {
      phoneImgSmall[i].style.width='175px';
      phoneImgSmall[i].style.height='165px';
    }
    if(i===8) {
      phoneImgSmall[i].style.width='150px';
      phoneImgSmall[i].style.height='185px';
    }
    if(i===10) {
      phoneImgSmall[i].style.width='190px';
      phoneImgSmall[i].style.height='175px';
    }
    divforSecitions3.appendChild(phoneImgSmall[i]);
    divforSecitions2.appendChild(divforSecitions3);
    let divforSecitions4=document.createElement('div');
    divforSecitions4.className=`flip-box-back${i}`;
    let h3=document.createElement('h3');
    h3.innerHTML=`<br> ${Phone.all[i-1].name}`;
    let pRgh1=document.createElement('p');
    pRgh1.textContent=Phone.all[i-1].price;
    let pRgh2=document.createElement('p');
    pRgh2.textContent=Phone.all[i-1].storage;
    divforSecitions4.appendChild(h3);
    divforSecitions4.appendChild(pRgh1);
    divforSecitions4.appendChild(pRgh2);
    divforSecitions2.appendChild(divforSecitions4);
    productShowimg.appendChild(divforSecitions1);
  }
  phoneLocalStorage();
}
creatProductShow();
/////////////////////////////button's for all product
let button=[];
function buttonsmallImg(){
  let buttonSection=document.getElementById('buttonSection');
  for(let i=0; i<Phone.all.length;i++){
    button[i]=document.createElement('button');
    button[i].textContent='ADD Cart';
    button[i].setAttribute('id',`phone${i+1}`);
    buttonSection.appendChild(button[i]);
  }
}
buttonsmallImg();
for(let i=0;i<Phone.all.length;i++){///////for making each button active
  button[i].addEventListener('click',product);
}
///////////////////////////////button for cart
let addAllProductBtn=document.createElement('button');
addAllProductBtn.className='paymentbutoon';
addAllProductBtn.textContent='CheckOut';
let addAllProductBtn_a = document.createElement('a');
addAllProductBtn_a.href='./cart.html';
addAllProductBtn_a.appendChild(addAllProductBtn);
function product(event){
  let section =document.getElementById('sectionForProduct');
  let div=document.createElement('div');
  section.appendChild(div);
  section.appendChild(addAllProductBtn_a);
  let p=document.createElement('p');
  let input=[]; ///for input text
  for(let i=0;i<Phone.all.length;i++){
    if(event.target.id===button[i].id){
      input[i]=document.createElement('input');
      input[i].type='number';
      input[i].id = 'input';
      input[i].placeholder='Quantity';
      p.innerHTML=Phone.all[i].name;
      button[i].removeEventListener('click',product);
      button[i].removeEventListener('click',product);
      addAllProductBtn.addEventListener('click', function(event){
        if(event.target.id===addAllProductBtn.id){
          // console.log(input[i].value);
          // if(input[i].value==='')
          //   input[i].required;
          // else {
          //   addAllProductBtn.disabled=false;
          new CartItem(Phone.all[i].name,input[i].value,Phone.all[i].price);
        }
        localStProduct();
      }
      );
      div.appendChild(input[i]);
      div.appendChild(p);
    }
  }
}
// const CartItem = function (product, quantity, price) {
//   this.product = product;
//   this.quantity = quantity;
//   this.price = price;

//   if (!CartItem.array.includes(this.product))
//     CartItem.array.push(this);

//   // console.log('ddd',CartItem.array);
// };
// CartItem.array = [];

// function localStProduct() { ////saving data for cart
//   localStorage.setItem('phoneArray', JSON.stringify(CartItem.array));
// }

// function phoneLocalStorage() { ////saving data to local storage
//   let phoneArrayLocally = JSON.stringify(Phone.all);
//   localStorage.setItem('Phones', phoneArrayLocally);
// }

// const Phone = function (name, price, color, storage, Memory, camera, src) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.storage = storage;
//   this.Memory = Memory;
//   this.camera = camera;
//   this.src = src;
//   Phone.all.push(this);
// };
// Phone.all = [];/// array for all Product specification

// function phonesData() {
//   new Phone('iPhone 12 Pro', '850 JD', 'Silver Graphite', '128GB', '12MP', '4G', 'https://www.cricketwireless.com/uiassets/DAPW4242-detail-front.jpg');
//   new Phone('Xiaomi Mi A2 Lite', '150 JD', 'Awsome Black', '64GB', '12MP', '4G', 'https://www.91-img.com/pictures/127701-v5-xiaomi-mi-a2-lite-mobile-phone-large-1.jpg?tr=q-60');
//   new Phone('iPhone 11', '467 JD', 'Yellow', '64GB', '12MP', '4G', 'https://d11fuji4mn7bm2.cloudfront.net/media/cache/data/Apple/Apple-iPhone-11/Red/Iphone-11-Red-Front-800x800.jpg');
//   new Phone('Huawei Nova 6 Se', '179 JD', 'Emerald Green', '128GB', '48MP', '4G', 'https://phone.mesramobile.com/wp-content/uploads/2019/12/huawei-nova-6-se-price-malaysia-1.jpg');
//   new Phone('Samsung A31', '179 JD', ' Prism Crush Blue', '128GB', '48MP', '4G', 'https://images-na.ssl-images-amazon.com/images/I/61UDVLnL16L._AC_SX522_.jpg');
//   new Phone('Asus Zenfone 6', '450 JD', 'Midnight Black', '128GB', '48MP', '4G', 'https://i.pinimg.com/474x/99/c4/74/99c474758a4b0466f4eec52c37696749.jpg');
//   new Phone('Huawei P30 Pro', '668 JD', ' Amber Sunrise', '128GB', '40MP', '4G', 'https://www.lovescreen.co.uk/img/p/2/8/0/280-large_default.jpg');
//   new Phone('Iphone X', '450 JD', 'Space Gray', '128GB', '12MP', '4G', 'https://www.gizmofashion.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_iphone_x_silver_front_view_gizmofashion_1.jpg');
//   new Phone('iPhone 8', '330 JD', 'White', '128GB', '12MP', '4G', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6305/6305022_sd.jpg');
//   new Phone('Galaxy S21', '668 JD', 'Gold', '128GB', '13MP', '4G', 'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/s/2/s21_phantom_gray_front.jpg');

// }
// phonesData();
// //localStorage.setItem('ProductArray', JSON.stringify(phonesData));
// //////////////////////////////////////////////////////////////////////////////////////

// function creatProductShow() {
//   let productShowimg = document.getElementById('productShow');
//   //let flipboxClass=[]; ///class for one secition    *******make it not array
//   let phoneImgSmall = [];
//   console.log(Phone.all.length);

//   for (let i = 1; i <= Phone.all.length; i++) {

//     let divforSecitions1 = document.createElement('div');//.getElementsByClassName(`flip-box${i}`);
//     //flipboxClass[i]=document.getElementsByClassName(`flip-box${i}`);
//     divforSecitions1.className = `flip-box${i}`;

//     let divforSecitions2 = document.createElement('div');
//     divforSecitions2.className = `flip-box-inner${i}`;
//     divforSecitions1.appendChild(divforSecitions2);

//     let divforSecitions3 = document.createElement('div');
//     divforSecitions3.className = `flip-box-front${i}`; ////conatain img
//     phoneImgSmall[i] = document.createElement('img');
//     phoneImgSmall[i].src = Phone.all[i - 1].src;
//     phoneImgSmall[i].style.width = '100%';
//     phoneImgSmall[i].style.height = '170px';
//     if (i === 6 || i === 3 || i === 4) {
//       phoneImgSmall[i].style.width = '100%';
//       phoneImgSmall[i].style.height = '180px';
//     }
//     if (i === 9) {
//       phoneImgSmall[i].style.width = '175px';
//       phoneImgSmall[i].style.height = '165px';
//     }
//     if (i === 8) {
//       phoneImgSmall[i].style.width = '150px';
//       phoneImgSmall[i].style.height = '185px';
//     }
//     if (i === 10) {
//       phoneImgSmall[i].style.width = '190px';
//       phoneImgSmall[i].style.height = '175px';
//     }
//     divforSecitions3.appendChild(phoneImgSmall[i]);
//     divforSecitions2.appendChild(divforSecitions3);

//     let divforSecitions4 = document.createElement('div');
//     divforSecitions4.className = `flip-box-back${i}`;
//     let h3 = document.createElement('h3');
//     h3.innerHTML = `<br> ${Phone.all[i - 1].name}`;
//     let pRgh1 = document.createElement('p');
//     pRgh1.textContent = Phone.all[i - 1].price;
//     let pRgh2 = document.createElement('p');
//     pRgh2.textContent = Phone.all[i - 1].storage;
//     divforSecitions4.appendChild(h3);
//     divforSecitions4.appendChild(pRgh1);
//     divforSecitions4.appendChild(pRgh2);
//     divforSecitions2.appendChild(divforSecitions4);

//     productShowimg.appendChild(divforSecitions1);
//   }
//   phoneLocalStorage();
// }
// creatProductShow();

// /////////////////////////////button's for all product
// let button = [];
// function buttonsmallImg() {
//   let buttonSection = document.getElementById('buttonSection');
//   for (let i = 0; i < Phone.all.length; i++) {
//     button[i] = document.createElement('button');
//     button[i].textContent = 'ADD Cart';
//     button[i].setAttribute('id', `phone${i + 1}`);
//     buttonSection.appendChild(button[i]);
//   }
// }
// buttonsmallImg();

// for (let i = 0; i < Phone.all.length; i++) {///////for making each button active
//   button[i].addEventListener('click', product);
// }

// ///////////////////////////////button for cart

// let addAllProductBtn = document.createElement('button');
// //let refrence=document.createElement('a');
// addAllProductBtn.className = 'paymentbutoon';
// // addAllProductBtn.style.width='60px';
// // addAllProductBtn.style.height='40px';
// // addAllProductBtn.style.border='black 5px';
// addAllProductBtn.textContent = 'Payment';

// function product(event) {
//   let section = document.getElementById('sectionForProduct');
//   let div = document.createElement('div');
//   section.appendChild(div);
//   section.appendChild(addAllProductBtn);
//   // div.style.backgroundColor='rgb(190, 187, 194)';
//   let p = document.createElement('p');
//   let input = []; ///for input text

//   for (let i = 0; i < Phone.all.length; i++) {
//     if (event.target.id === button[i].id) {
//       input[i] = document.createElement('input');
//       input[i].type = 'number';
//       input[i].id = 'input';
//       input[i].placeholder = 'Quantity';
//       console.log(button[i].id);
//       p.innerHTML = Phone.all[i].name;
//       button[i].removeEventListener('click', product);

//       addAllProductBtn.addEventListener('click', function (event) {
//         if (event.target.id === addAllProductBtn.id) {
//           //  refrence.href='./Html/cart.html';
//           //  addAllProductBtn.appendChild(refrence);

//           //addAllProductBtn.form='https://www.w3docs.com/';
//           new CartItem(Phone.all[i].name, input[i].value, Phone.all[i].price);
//           console.log(CartItem.array, 'jjj');
//           localStProduct();
//         }
//       });


//       div.appendChild(input[i]);
//       div.appendChild(p);
//     }
//   }
// }
