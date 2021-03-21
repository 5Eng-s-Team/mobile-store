'use strict'
const cart=document.getElementById('');
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
    new Phone('Huawei Enjoy 20se','220$','Crush Green','128GB','13MP','4G','src')
    new Phone('Galaxy A72','550$','Awsome Black','128GB','64MP','4G','src')
    new Phone('Galaxy M31s','470$','Mirage Black','128GB','64MP','4G','src')
    new Phone('Galaxy note 20','790$','Mystic Blue','128GB','64MP','4G','src')
    new Phone('Galaxy A21 Ultra','1150$','Phantom Brown','128GB','108MP','4G','src')
    new Phone('Iphone 12 pro','1180$','Silver Graphite','128GB','12MP','4G','src')
    new Phone('Iphone SE 2020','400$','Red','64GB','12MP','4G','src')
    new Phone('Iphone X','530$','Space Gray','64GB','12MP','4G','src')
    new Phone('Huawei Mate 40E','840$','White','128GB','64MP','4G','src')
    new Phone('Huawei P Smart 2020','250$','Aurora Blue','128GB','13MP','4G','src')
    
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

const Cart = function (items) {
  this.items = items;

};

Cart.prototype.addItem = function (product, quantity) {
  const addtocart=new CartItem(product,quantity);
  this.items.push(addtocart);

};

Cart.prototype.saveToLocalStorage = function () {
  localStorage.setItem('cart',JSON.stringify(this.items));
};

Cart.prototype.removeItem = function (item) {
  this.items.splice(item, i);
};

const CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};


const cartitem = document.getElementById('cart');
cartitem.addEventListener('click', removeItemFromCart);
let cartt;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartt = new Cart(cartItems);
}
console.log(cartt)

function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function clearCart() {
  let tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
}


function showCart() {

  
   let tbody = document.getElementById('tbody');

  
  for(let i=0; i<cartt.items.length; i++) {  
  let tablerow = document.createElement('tr');
  
  let tableDataQuantity = document.createElement('td');
  let tableDataIProduct = document.createElement('td');
  let tableDataDelete = document.createElement('td');

  tableDataDelete.textContent = 'X';
  tableDataDelete.setAttribute('X',i);
  tableDataDelete.addEventListener('click', removeItemFromCart)

  tableDataIProduct.textContent = cartt.items[i].product;
  tableDataQuantity.textContent = cartt.items[i].quantity;


  tablerow.appendChild(tableDataDelete);
  tablerow.appendChild(tableDataQuantity);
  tablerow.appendChild(tableDataIProduct);





  tbody.appendChild(tablerow);
}
}



function removeItemFromCart(event) {

  
  const item = event.target.getAttribute('X');
  cartt.removeItem(cartt.items[item]);
  cartt.saveToLocalStorage();
  renderCart();


}
function addSelectedItemToCart() {
  
   let name = event.target.items.id;
  
   
   let quantity = event.target.quantity.id;
   
 
   cartt.addItem(name, quantity);

}


function updateCounter() {
  let counts=document.getElementById('itemCount')
  counts.textContent = '  ' + cartt.items.length;
}


function updateCartPreview() {

  let itemCounter = document.getElementById('cartContents')
  itemCounter.innerHTML = '';
  let unorderedList = document.createElement('ul');
  itemCounter.appendChild(unorderedList);

  for(let i=0; i<cartt.items.length; i++){
  let itemName = cartt.items[i].product;
  let itemQuantity = cartt.items[i].quantity;
  let itemList = document.createElement('li');
 
  unorderedList.appendChild(itemList);
  itemList.textContent = 'Item Name:  ' + itemName + ' ---- Quantity:   '  +  itemQuantity;
}
}

const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);
// function populateForm() {

 
//   const selectElement = document.getElementById('items');
//   for (let i in Product.allProducts) {
//     let option=document.createElement('option');
//     option.textContent=Product.allProducts[i].name;
//     option.value=Product.allProducts[i].name;
//     selectElement.appendChild(option);
    
//   }

// }

// populateForm();

renderCart();