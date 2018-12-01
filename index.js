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
  var itemObject= {
  itemName: item, 
  itemPrice: Math.floor(Math.random()*100)+1, 
  }; 
  
  cart.push(itemObject); 
   
  return `${this.itemName} has been added to your cart.`; 
} 

var messageAboutCart = addToCart("apples", "kiwis");

console.log(cart.length); 
console.log(cart); 

function viewCart() {
  // write your code here 
  if (cart.length===0){
    return "Your cart be empty."; 
  } else { 
  var  cartLength = cart.length; 
  for (i=0; i<= cartLength; i++){
  var stuffInCart = `In your cart, you have ${cart[0].itemName}.`  
  return  stuffInCart; } } 
}

console.log(viewCart());  

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

