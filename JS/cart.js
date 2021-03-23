'use strick';

const tableCart =document.getElementById('tableCart');
let table =document.createElement('table');
tableCart.append(table);
let cartItemArray=JSON.parse(localStorage.getItem('phoneArray')) ;///array for cart and have 3 variable
let allProduct=JSON.parse(localStorage.getItem('Phones'));//////for all product

console.log(cartItemArray);
table.addEventListener('click',cancelHandler);

function cancelHandler(event){
  if(event.target.id==='X'){
    //console.log('fff');
    cartItemArray.splice(event.target.i,1); ///delete one item by index event.target.i
    localStorage.setItem('phoneArray',JSON.stringify(cartItemArray));
    if(cartItemArray.length===0) table.style.display='none';
    showTable();
  }
  if(event.target.id==='ADD'){
    confirm('done');
  }
}
//////////////////////////////////////////////////show table
function showTable(){
  table.innerText='';
  table.setAttribute('border','5','ridge');
  table.style.color='gray';
  table.style.width='950px';

  let tr=document.createElement('tr');/// tr record
  tr.style.background='gray';
  tr.style.color='white';

  let th0=document.createElement('th'); ///head
  th0.textContent='Cancel';
  let th1=document.createElement('th');
  th1.textContent='Product';
  let th2=document.createElement('th');
  th2.textContent='Quantity';
  let th3=document.createElement('th');
  th3.textContent='Totally Price';
  let th4=document.createElement('th');
  th4.textContent='Pay';
  tr.appendChild(th0);
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
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
    td_01.id='X';
    td_01.name=i;
    td_01.textContent = 'X';
    td_01.style.color='red';

    // td_02.src='/mobiles/samsung-galaxy-a72-4g-10.jpg';

    td_02.textContent = cartItemArray[i].product;
    td_03.textContent = cartItemArray[i].quantity;
    td_04.textContent =parseInt(cartItemArray[i].price) * parseInt(cartItemArray[i].quantity)+'Jd';
    td_05.textContent ='ADD';
    td_05.id='ADD';
    td_05.style.color='blue';

    table.appendChild(tr);
    tr.appendChild(td_01);
    tr.appendChild(td_02);
    tr.appendChild(td_03);
    tr.appendChild(td_04);
    tr.appendChild(td_05);
  }

}


showTable();


