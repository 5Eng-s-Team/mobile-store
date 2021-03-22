'use strict'

const cart = [] ;
const cartQty = document.getElementById('cart-qty')
const itemList = document.getElementById('item-list')
const cartTotal = document.getElementById('cart-total')
const addForm = document.getElementById('add-form')
const itemName = document.getElementById('item-name')
const itemPrice= document.getElementById('item-price')

//---------------------------------------------------
//Handle clicks on list
itemList.addEventListener('click' ,function(e){
    
    if (e.target && e.target.classList.contains('remove')) {
        const name = e.target.dataset.name // data-name="????"
        removeItem(name)

    } else if (e.target && e.target.classList.contains('add-one')) {

    const name = e.target.dataset.name
    addItem(name) 

    } else if (e.target && e.target.classList.contains('remove-one')){
        const name = e.target.dataset.name
        removeItem(name,1)   

    }
})

function addItem(name,price) {
    
    for (let i = 0; i < cart.length; i++){
    if (cart[i].name === name){
    
        cart[i].qty ++
       
        showItems()
        //its will not contunuo it will stop here
        return

    }
    }
    
    //key not eqale the value
    const item = { name,price,qty:1 }
    cart.push(item)
  
}

//-------------------------------------------------------
//function to show the items in cart arry

function  showItems() {
const qty = getQty()
    
    cartQty.innerHTML= `you have ${qty} items in your cart`
    
    let itemStr = ''
    for (let i = 0; i < cart.length; i ++) {
        
     
        
        const {name,price,qty} =  cart [i]
        
        const priceXqty = price*qty
     
        
    
        
       itemStr += `<li>${name}
       <span> 
       ${price} JD x ${cart[i].qty} = ${priceXqty} JD
       </span>
       <span>
       <button class="remove" data-name="${name}">Remove</button>
       <button class="add-one" data-name="${name}">+</button>  
       <button class="remove-one" data-name="${name}">-</button> 
       <span>
       </li>` 
       
    
    }
   
    itemList.innerHTML = itemStr
    
    cartTotal.innerHTML=`the total price ${getTotal()} JD`
   

}
//-------------------------------------------------------

   
// Get qty

function getQty(){
    let qty = 0
    for (let i=0; i < cart.length; i ++) {
        qty += cart[i].qty

    }
    return qty

}
//-----------------------------------------------------

// Get total

function getTotal(){

    let total=0
    
    
for (let i=0; i < cart.length; i ++) {
    total += cart[i].price * cart[i].qty

    

}
return total.toFixed(2)
}

//------------------------------------------------------

function removeItem(name, qty=0 ){
   
for (let i= 0 ; i < cart.length; i++) {
    if (cart[i].name === name) {
        if(qty > 0){
            cart[i].qty -= qty
           

        }
        

        if (cart[i].qty < 1 || qty === 0){
            cart.splice(i,1)
        }
        showItems()
        
        return
       
    }

}

}

//----------------------------------------------------------



//--------------------------------------------------------





// (name,price) function invoked here will start step by step from here.
//index 0 fill
document.getElementById('button1').addEventListener('click',function (e){
    e.preventDefault();
    addItem('Iphone 12 pro ',850); 
  
    showItems(); 
    
})

document.getElementById('button2').addEventListener('click',function (e){
    e.preventDefault();
    addItem('Xiaomi Mi',150); 
    
    showItems(); 
})
document.getElementById('button3').addEventListener('click',function (e){
    e.preventDefault();
    addItem('iPhone 11 ',467  ); 
    showItems(); 
})
document.getElementById('button4').addEventListener('click',function (e){
    e.preventDefault();
    addItem('Huawei Nova',179 ); 
    showItems(); 
})
document.getElementById('button5').addEventListener('click',function (e){
    e.preventDefault();
    addItem('Samsung A31',179 ); 
    showItems(); 
})
document.getElementById('button6').addEventListener('click',function (e){
    e.preventDefault();
    addItem('Asus Zenfone 6',450 ); 
    showItems(); 
})
document.getElementById('button7').addEventListener('click',function (e){
    e.preventDefault();
    addItem('Huawei P30 Pro',530 ); 
    showItems(); 
})
document.getElementById('button8').addEventListener('click',function (e){
    e.preventDefault();
    addItem('Galaxy S21',668 ); 
    showItems(); 
})
document.getElementById('button9').addEventListener('click',function (e){
    e.preventDefault();
    addItem('iPhone X',450 ); 
    showItems(); 
})
document.getElementById('button10').addEventListener('click',function (e){
    e.preventDefault();
    addItem('iPhone 8',330 ); 
    showItems(); 
})

document.getElementById('buy').addEventListener('click',function (e){
    e.preventDefault();
    alert('Please, choose the payment method')
    localStorage.setItem('phone',JSON.stringify(cart))
    showItems(); 
})
    
// const table=document.getElementById('table')
// let catrphone=JSON.parse(localStorage.getItem('Phone'));
// console.log(catrphone)
// for(let i=0;i<cart.length;i++){
   
//     let tr=document.createElement('tr')
//     let tdphone=document.createElement('td')
//     let tdqty=document.createElement('td')
//     let tdtot=document.createElement('td')
//     tdphone.textContent=catrphone.name;
//     tdphone.textContent=catrphone.price;
//     tdphone.textContent=catrphone.qty;
//     tr.appendChild(tdphone)
//     tr.appendChild(tdqty)
//     tr.appendChild(tdtot)
//     table.appendChild(tr)
// }












// start show over the array
showItems(); 