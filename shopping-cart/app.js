 
//const can not change over the time


const cart = [] ;
const cartQty = document.getElementById('cart-qty')
const itemList = document.getElementById('item-list')
const cartTotal = document.getElementById('cart-total')
const addForm = document.getElementById('add-form')


//---------------------------------------------------
//Handle clicks on list
itemList.onclick = function(e){
    //console.log("Clicked!!")
    //console.log(e.target)
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
}

 
//------------------------------------------------------

//function to add and push to arry out.
function addItem(name,price) {

    for (let i = 0; i < cart.length; i+=1){
    if (cart[i].name === name){
        cart[i].qty +=1
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
    //console.log(`you have ${qty} items in your cart`);
    cartQty.innerHTML= `you have ${qty} items in your cart`
    
    let itemStr = ''
    for (let i = 0; i < cart.length; i += 1) {
        //console.log(`name ${cart[i].name} price: ${cart[i].price } x ${cart[i].qty}` )
     
         //{name: 'Apple', price:0.99,qty:3}
        const {name,price,qty} =  cart [i]
        const priceXqty = Math.floor(price*qty)
        
       itemStr += `<li>${name}
       <span> 
       $${price} x ${cart[i].qty} = ${priceXqty}$ 
       </span>
       <span>
       <button class="remove" data-name="${name}">Remove</button>
       <button class="add-one" data-name="${name}">+</button>  
       <button class="remove-one" data-name="${name}">-</button> 
       <span>
       </li>` 
         
    }
    itemList.innerHTML = itemStr
    //console.log(`the total price ${getTotal()} `);
    cartTotal.innerHTML=`the total price $${getTotal()} `
    
    

}
//-------------------------------------------------------

// Get qty

function getQty(){
    let qty = 0
    for (let i=0; i < cart.length; i += 1) {
        qty += cart[i].qty

    }
    return qty

}
//-----------------------------------------------------

// Get total

function getTotal(){

    let total=0
    
    
for (let i=0; i < cart.length; i += 1) {
    total += cart[i].price * cart[i].qty

    

}
return total.toFixed(2)
}

//------------------------------------------------------

function removeItem(name, qty = 0){
for (let i= 0 ; i < cart.length; i+= 1) {
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
document.getElementById('phone1').addEventListener('click',function (e){
    e.preventDefault();
    addItem('samsung-galaxy-s21-ultra-5g-1',1); 
    showItems(); 
})

document.getElementById('phone2').addEventListener('click',function (e){
    e.preventDefault();
    addItem('samsung-galaxy-note20-1',2); 
    showItems(); 
})
document.getElementById('phone3').addEventListener('click',function (e){
    e.preventDefault();
    addItem('samsung-galaxy-m31s-2',3); 
    showItems(); 
})
document.getElementById('phone4').addEventListener('click',function (e){
    e.preventDefault();
    addItem('samsung-galaxy-a72-4g-10',4); 
    showItems(); 
})
document.getElementById('phone5').addEventListener('click',function (e){
    e.preventDefault();
    addItem('huawei-p-smart-2020-t',5); 
    showItems(); 
})
document.getElementById('phone6').addEventListener('click',function (e){
    e.preventDefault();
    addItem('huawei-mate-40-1',6); 
    showItems(); 
})
document.getElementById('phone7').addEventListener('click',function (e){
    e.preventDefault();
    addItem('huawei-enjoy-20-se-1',7); 
    showItems(); 
})
document.getElementById('phone8').addEventListener('click',function (e){
    e.preventDefault();
    addItem('apple-iphone-x-new-1',8); 
    showItems(); 
})
document.getElementById('phone9').addEventListener('click',function (e){
    e.preventDefault();
    addItem('apple-iphone-se-2020-2',9); 
    showItems(); 
})
document.getElementById('phone10').addEventListener('click',function (e){
    e.preventDefault();
    addItem('apple-iphone-se-2020-2',10); 
    showItems(); 
})

document.getElementById('buy').addEventListener('click',function (e){
    e.preventDefault();
    alert(`well done`)
    showItems(); 
})
    












// start show over the array
showItems(); 



