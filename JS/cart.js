'use strick';

let box=document.getElementById('boxing');
let table =document.querySelector('table');
document.body.appendChild(box);
box.style.display='none';
table.style.display='none';
let sectionDeletePay = document.getElementById('sectionDeletePay');
let DeleteBtn = document.createElement('button');
let paragraphResult = document.createElement('p');
let paymentbutton = document.createElement('button');


table.textContent='';
let cartItemArray=JSON.parse(localStorage.getItem('phoneArray')) ;///array for cart and have 3 variable

if (cartItemArray.length === 0){
  table.remove();
  paymentbutton.removeEventListener('click', pay);
  paragraphResult.style.display='none';
} else paymentbutton.addEventListener('click',pay);

table.addEventListener('click',cancelHandler);
function cancelHandler(event){
  for(let i=0;i<cartItemArray.length;i++){
    if(event.target.id===`X${i}`){
      cartItemArray.splice(i,1); ///delete one item by index event.target.i
      localStorage.setItem('phoneArray',JSON.stringify(cartItemArray));
      if(cartItemArray.length===0){
        paymentbutton.removeEventListener('click', pay);
        paragraphResult.style.display='none';
        table.remove();
      }
      showTable();
    }
  }
}
//////////////////////////////////////////////////show table
let counterForPayment=0;

function showTable(){
  box.style.display='inline-block';
  table.style.display='inline-table';
  table.innerText='';
  table.setAttribute('border','5','ridge');
  let tr=document.createElement('tr');/// tr record
  let th0=document.createElement('th'); ///head
  th0.textContent='Remove';
  let th1=document.createElement('th');
  th1.textContent='Product';
  let th2=document.createElement('th');
  th2.textContent='Quantity';
  let th3=document.createElement('th');
  th3.textContent='price';
  let th4=document.createElement('th');
  th4.textContent='Total';
  tr.appendChild(th0);
  tr.appendChild(th1);
  tr.appendChild(th3);
  tr.appendChild(th2);
  tr.appendChild(th4);
  table.appendChild(tr);
  //console.log(cartItemArray , cartItemArray.length);
  for(let i=0;i<cartItemArray.length;i++){
    let tr = document.createElement('tr');
    let td_01 = document.createElement('td');
    let td_02 = document.createElement('td');
    let td_03 = document.createElement('td');
    let td_04 =document.createElement('td');
    let td_05 = document.createElement('td');
    td_01.id=`X${i}`;
    td_01.textContent = 'X';
    td_01.style.color='wihte';
    td_01.style.backgroundColor='#062F4F';
    // td_02.src='/mobiles/samsung-galaxy-a72-4g-10.jpg';
    td_02.textContent = cartItemArray[i].product;
    td_03.textContent = cartItemArray[i].price;
    td_04.textContent =cartItemArray[i].quantity+'  Piece\'s';
    td_05.textContent =parseInt(cartItemArray[i].price) * parseInt(cartItemArray[i].quantity)+'Jd';
    counterForPayment+=parseInt(td_05.textContent);
    td_05.style.color='white';
    td_05.style.fontWeight='10px';
    td_05.style.backgroundColor='#062F4F';
    table.appendChild(tr);
    tr.appendChild(td_01);
    tr.appendChild(td_02);
    tr.appendChild(td_03);
    tr.appendChild(td_04);
    tr.appendChild(td_05);
  }
}
showTable();

/*------------payment and Delete and result section-----------*/

sectionDeletePay.appendChild(DeleteBtn);
sectionDeletePay.appendChild(paragraphResult);
sectionDeletePay.appendChild(paymentbutton);
DeleteBtn.className = 'Deletebutton';
DeleteBtn.id = 'Delete';
DeleteBtn.textContent = 'Delete All';
paragraphResult.className='paragraphResult';
paragraphResult.innerText='Your Total Price is '+ counterForPayment + ' $ \n Priss Payment ';
paymentbutton.className = 'paymentbutton';
paymentbutton.id = 'payment';
paymentbutton.textContent = 'Payment';

DeleteBtn.addEventListener('click', function (event) { ///////////////Delete table function
  table.remove();
  paragraphResult.style.display='none';
  paymentbutton.removeEventListener('click', pay);
});

/*------------------------pop-out window section-----------------------------------*/
let div = document.createElement('div');
div.className = 'modal';
div.id = 'myModal';
sectionDeletePay.appendChild(div);

let div1 = document.createElement('div');
div1.className = 'modal-content';
div.appendChild(div1);

let div11 = document.createElement('div');
div11.className = 'modal-header';
div1.appendChild(div11);

let span = document.createElement('span');
span.className = 'close';
span.textContent = 'X';
let h2 = document.createElement('h2');
h2.textContent = 'Mobile Store ';
div11.appendChild(span);
div11.appendChild(h2);

let div12 = document.createElement('div');
div12.className = 'modal-body';
let p1 = document.createElement('p');
let p2 = document.createElement('p');
p1.textContent = 'Your Payment Done , Check for the charge';
p2.textContent = 'toatal price';

div12.appendChild(p1);
div12.appendChild(p2);
div1.appendChild(div12);

let div13 = document.createElement('div');
div13.className = 'modal-footer';
let h3 = document.createElement('h3');
h3.textContent = 'Visit us again';
div13.appendChild(h3);
div1.appendChild(div13);

paymentbutton.addEventListener('click',pay);

function pay(event) {//////Payment button function
  if (event.target.id === paymentbutton.id) {
    paymentbutton.onclick = function () {
      div.style.display = 'block';
    };

    span.onclick = function () {
      div.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target === div)
        div.style.display = 'none';
    };
  }
}
