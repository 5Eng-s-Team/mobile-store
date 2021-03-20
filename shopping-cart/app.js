 
//const can not change over the time


const cart = [] ;
const cartQty = document.getElementById('cart-qty')
const itemList = document.getElementById('item-list')
const cartTotal = document.getElementById('cart-total')
const addForm = document.getElementById('add-form')
const itemName = document.getElementById('item-name')
const itemPrice= document.getElementById('item-price')

// --------------------------------------------------
//handel add from sumbit
addForm.onsubmit = function(e) {
    e.preventDefault()
    
    const name = itemName.value
    const price = itemPrice.value
    addItem(name,price)
    showItems()
}   
//------------------------------------------------------

//function to add and push to arry out.
function addItem(name,price) {

    for (let i = 0; i < cart.length; i+=1){
    if (cart[i].name === name){
        cart[i].qty +=1
        
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

        
       itemStr += `<li>${name} 
       $${price } x ${cart[i].qty} = 
       ${price * qty}$ </li>` 

    }
    itemList.innerHTML = itemStr
    //console.log(`the total price ${getTotal()} `);
    cartTotal.innerHTML=`the total price ${getTotal()} `
    
    

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
        
        return
        
    }

}

}

//----------------------------------------------------------



//--------------------------------------------------------





// (name,price) function invoked here will start step by step from here.
//index 1 fill
addItem('Apple',0.99); 
//index 2 fill
addItem('Orange',1.29);
//index 3 fill
addItem('good',30);
//index 4 fill
addItem('frice',1.99);
//index 5 fill
addItem('Apple',0.99);
//index 6 fill
addItem('Apple',0.99);
//index 7 fill
addItem('Orange',1.29);

showItems(); 


removeItem('Apple',1)
removeItem('frice')




// start show over the array
showItems(); 



