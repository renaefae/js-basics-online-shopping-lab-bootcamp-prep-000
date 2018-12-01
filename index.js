var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c; 
  return cart; 
}

function addToCart(item) {  
 // write your code here
  const itemObject = {
    itemName: item, 
    itemPrice: Math.floor(Math.random()*100)+1, 
  }; 
  
  cart.push(itemObject); 
   
  return `${this.itemName} has been added to your cart.`; 
} 

console.log(addToCart("apples")); 
console.log(addToCart("kiwis")); 

console.log(cart.length); 
console.log(cart); 

function viewCart() {
  // write your code here 
  var message;
  
  if (cart.length===0){
    message = "Your cart be empty."; 
  } else { 
    message = `In your cart, you have `; 
    message = `${message} ${cart.length} items:` ; 
    
    for (i=0; i< cart.length; i++){
      message = `${message} ${cart[i].itemName}`;
      message = `${message},`; 
    } 
  }
      message2='. '; 
  console.log(message.concat(message2));
  
  return  message;  
}

//console.log(viewCart());  

function total() {
  // write your code here
  return itemsInCart[0]+itemsInCart[1] ; 
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

