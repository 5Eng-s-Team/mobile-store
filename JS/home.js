'use strick';
const CartItem = function (product, quantity, price) {
  this.product = product;
  if (!JSON.parse(localStorage.getItem('phoneArray')) === null) {
    this.quantity = JSON.parse(localStorage.getItem('phoneArray')).quantity;
    console.log(JSON.parse(localStorage.getItem('phoneArray')).quantity);
  } else this.quantity = quantity;
  this.price = price;
  if (!CartItem.array.includes(this.product)) {
    CartItem.array.push(this);
    console.log(CartItem.array + '  after push');
  }
};
CartItem.array = [];
// if(localStorage.getItem('phoneArray')!==null) {
//   if((localStorage.getItem('phoneArray'))!==JSON.stringify(CartItem.array)){
//     CartItem.array=JSON.parse(localStorage.getItem('phoneArray'));
//     console.log(JSON.stringify(CartItem.array)+' \n array with local\n' +localStorage.getItem('phoneArray'));
//   }
// }
function localStProduct() { ////saving data for cart
  localStorage.setItem('phoneArray', JSON.stringify(CartItem.array));
}
function phoneLocalStorage() { ////saving data to local storage
  let phoneArrayLocally = JSON.stringify(Phone.all);
  localStorage.setItem('Phones', phoneArrayLocally);
}
const Phone = function (name, price, color, storage, Memory, camera, src) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.storage = storage;
  this.Memory = Memory;
  this.camera = camera;
  this.src = `./newPhonesDataImg/${src}.jpg`;
  Phone.all.push(this);
};
Phone.all = [];/// array for all Product specification
function phonesData() {
  new Phone('iPhone 12 Pro', '850 JD', 'Silver Graphite', '128GB', '12MP', '4G', 'iphone-12-pro');
  new Phone('Xiaomi Mi A2 Lite', '150 JD', 'Awsome Black', '64GB', '12MP', '4G', 'xiaomi-mi-a2-lite');
  new Phone('iPhone 11', '467 JD', 'Yellow', '64GB', '12MP', '4G', 'Iphone-11-Red-Front-800x800');
  new Phone('Huawei Nova 6 Se', '179 JD', 'Emerald Green', '128GB', '48MP', '4G', 'huawei-nova-6-se');
  new Phone('Samsung A31', '179 JD', ' Prism Crush Blue', '128GB', '48MP', '4G', 'samsung-A-31');
  new Phone('Asus Zenfone 6', '450 JD', 'Midnight Black', '128GB', '48MP', '4G', 'asus-zain-phone');
  new Phone('Huawei P30 Pro', '668 JD', ' Amber Sunrise', '128GB', '40MP', '4G', 'Huawei-P30-Pro');
  new Phone('Iphone X', '450 JD', 'Space Gray', '128GB', '12MP', '4G', 'iphone_x');
  new Phone('iPhone 8', '330 JD', 'White', '128GB', '12MP', '4G', 'iphone-8');
  new Phone('Galaxy S21', '668 JD', 'Gold', '128GB', '13MP', '4G', 'Galaxy-s2');
}
phonesData();
//////////////////////////////////////////////////////////////////////////////////////
function creatProductShow() {
  let productShowimg = document.getElementById('productShow');
  let phoneImgSmall = [];
  for (let i = 1; i <= Phone.all.length; i++) {
    let divforSecitions1 = document.createElement('div');//.getElementsByClassName(`flip-box${i}`);
    divforSecitions1.className = `flip-box${i}`;
    let divforSecitions2 = document.createElement('div');
    divforSecitions2.className = `flip-box-inner${i}`;
    divforSecitions1.appendChild(divforSecitions2);
    let divforSecitions3 = document.createElement('div');
    divforSecitions3.className = `flip-box-front${i}`; ////conatain img
    phoneImgSmall[i] = document.createElement('img');
    phoneImgSmall[i].src = Phone.all[i - 1].src;
    phoneImgSmall[i].style.width = '100%';
    phoneImgSmall[i].style.height = '170px';
    if (i === 10) {
      phoneImgSmall[i].style.width = '95px';
      phoneImgSmall[i].style.height = '165px';
    }
    divforSecitions3.appendChild(phoneImgSmall[i]);
    divforSecitions2.appendChild(divforSecitions3);
    let divforSecitions4 = document.createElement('div');
    divforSecitions4.className = `flip-box-back${i}`;
    let h3 = document.createElement('h3');
    h3.innerHTML = `<br> ${Phone.all[i - 1].name}`;
    let pRgh1 = document.createElement('p');
    pRgh1.textContent = Phone.all[i - 1].price;
    let pRgh2 = document.createElement('p');
    pRgh2.textContent = Phone.all[i - 1].storage;
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
let button = [];
function buttonsmallImg() {
  let buttonSection = document.getElementById('buttonSection');
  for (let i = 0; i < Phone.all.length; i++) {
    button[i] = document.createElement('button');
    button[i].textContent = 'ADD Cart';
    button[i].setAttribute('id', `phone${i + 1}`);
    buttonSection.appendChild(button[i]);
  }
}
buttonsmallImg();
for (let i = 0; i < Phone.all.length; i++) {///////for making each button active
  button[i].addEventListener('click', product);
}
///////////////////////////////button for cart
let addAllProductBtn = document.createElement('button');
addAllProductBtn.className = 'paymentbutoon';
addAllProductBtn.textContent = 'CheckOut';
let addAllProductBtn_a = document.createElement('a');
addAllProductBtn_a.id = 'modal';
addAllProductBtn_a.appendChild(addAllProductBtn);
function product(event) {
  let section = document.getElementById('sectionForProduct');
  let div = document.createElement('div');
  section.appendChild(div);
  section.appendChild(addAllProductBtn_a);
  let p = document.createElement('p');
  let input = []; ///for input text
  for (let i = 0; i < Phone.all.length; i++) {
    if (event.target.id === button[i].id) {
      input[i] = document.createElement('input');
      input[i].type = 'number';
      input[i].id = 'input';
      input[i].placeholder = 'Quantity';
      p.innerHTML = Phone.all[i].name;
      button[i].removeEventListener('click', product);
      button[i].removeEventListener('click', product);
      addAllProductBtn.addEventListener('click', checkout);
      // eslint-disable-next-line no-inner-declarations
      function checkout(event) {
        if (event.target.id === addAllProductBtn.id) {
          if (input[i].value === '' || parseInt(input[i].value) <=0 ) {
            // confirm('Please, provide a quantitiy')
            let modal = document.getElementById('myModal-home');
            // Get the button that opens the modal
            let btn = document.getElementById('modal');
            // Get the <span> element that closes the modal
            let span = document.getElementsByClassName('close-home')[0];
            // When the user clicks the button, open the modal
            btn.onclick = function () {
              modal.style.display = 'block';
            };
            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
              modal.style.display = 'none';
            };
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
              if (event.target === modal) {
                modal.style.display = 'none';
              }
            };
            // section.removeChild(addAllProductBtn_a);
          } else {
            addAllProductBtn_a.href = './cart.html';
            new CartItem(Phone.all[i].name, input[i].value, Phone.all[i].price);
          }
        }
        localStProduct();
      }
      div.appendChild(input[i]);
      div.appendChild(p);
    }
  }
}

// 'use strick';
// const CartItem = function (product, quantity, price) {
//   this.product = product;
//   if (!JSON.parse(localStorage.getItem('phoneArray')) === null) {
//     this.quantity = JSON.parse(localStorage.getItem('phoneArray')).quantity;
//     console.log(JSON.parse(localStorage.getItem('phoneArray')).quantity);
//   } else this.quantity = quantity;
//   this.price = price;
//   if (!CartItem.array.includes(this.product)) {
//     CartItem.array.push(this);
//     console.log(CartItem.array + '  after push');
//   }
// };
// CartItem.array = [];
// // if(localStorage.getItem('phoneArray')!==null) {
// //   if((localStorage.getItem('phoneArray'))!==JSON.stringify(CartItem.array)){
// //     CartItem.array=JSON.parse(localStorage.getItem('phoneArray'));
// //     console.log(JSON.stringify(CartItem.array)+' \n array with local\n' +localStorage.getItem('phoneArray'));
// //   }
// // }
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
//   this.src = `/newPhonesDataImg/${src}.jpg`;
//   Phone.all.push(this);
// };
// Phone.all = [];/// array for all Product specification
// function phonesData() {
//   new Phone('iPhone 12 Pro', '850 JD', 'Silver Graphite', '128GB', '12MP', '4G', 'iphone-12-pro');
//   new Phone('Xiaomi Mi A2 Lite', '150 JD', 'Awsome Black', '64GB', '12MP', '4G', 'xiaomi-mi-a2-lite');
//   new Phone('iPhone 11', '467 JD', 'Yellow', '64GB', '12MP', '4G', 'Iphone-11-Red-Front-800x800');
//   new Phone('Huawei Nova 6 Se', '179 JD', 'Emerald Green', '128GB', '48MP', '4G', 'huawei-nova-6-se');
//   new Phone('Samsung A31', '179 JD', ' Prism Crush Blue', '128GB', '48MP', '4G', 'samsung-A-31');
//   new Phone('Asus Zenfone 6', '450 JD', 'Midnight Black', '128GB', '48MP', '4G', 'asus-zain-phone');
//   new Phone('Huawei P30 Pro', '668 JD', ' Amber Sunrise', '128GB', '40MP', '4G', 'Huawei-P30-Pro');
//   new Phone('Iphone X', '450 JD', 'Space Gray', '128GB', '12MP', '4G', 'iphone_x');
//   new Phone('iPhone 8', '330 JD', 'White', '128GB', '12MP', '4G', 'iphone-8');
//   new Phone('Galaxy S21', '668 JD', 'Gold', '128GB', '13MP', '4G', 'Galaxy-s2');
// }
// phonesData();
// //////////////////////////////////////////////////////////////////////////////////////
// function creatProductShow() {
//   let productShowimg = document.getElementById('productShow');
//   let phoneImgSmall = [];
//   for (let i = 1; i <= Phone.all.length; i++) {
//     let divforSecitions1 = document.createElement('div');//.getElementsByClassName(`flip-box${i}`);
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
//     if (i === 10) {
//       phoneImgSmall[i].style.width = '95px';
//       phoneImgSmall[i].style.height = '165px';
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
// addAllProductBtn.className = 'paymentbutoon';
// addAllProductBtn.textContent = 'CheckOut';
// let addAllProductBtn_a = document.createElement('a');
// addAllProductBtn_a.href = './cart.html';
// addAllProductBtn_a.appendChild(addAllProductBtn);
// function product(event) {
//   let section = document.getElementById('sectionForProduct');
//   let div = document.createElement('div');
//   section.appendChild(div);
//   section.appendChild(addAllProductBtn_a);
//   let p = document.createElement('p');
//   let input = []; ///for input text
//   for (let i = 0; i < Phone.all.length; i++) {
//     if (event.target.id === button[i].id) {
//       input[i] = document.createElement('input');
//       input[i].type = 'number';
//       input[i].id = 'input';
//       input[i].placeholder = 'Quantity';
//       p.innerHTML = Phone.all[i].name;
//       button[i].removeEventListener('click', product);
//       button[i].removeEventListener('click', product);
//       addAllProductBtn.addEventListener('click', function (event) {
//         if (event.target.id === addAllProductBtn.id) {
//           if (input[i].value === '') {
//             alert('aaaaa');
//           } else {
//             new CartItem(Phone.all[i].name, input[i].value, Phone.all[i].price);
//           }
//         }
//         localStProduct();
//       }
//       );
//       div.appendChild(input[i]);
//       div.appendChild(p);
//     }
//   }
// }
