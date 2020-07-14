var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var object = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
  cart.push(object)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code 
  
  if (!cart.length) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length > 1) {
    let array = [];
    for (let i = 0 ; i < cart.length; i++) {
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have ${array.slice(0, array.length - 1).join(", ")}, and ${array[array.length -1]}.`
  }
}

  // write your code here
function total() {
  let sum = 0 
  for (let i = 0; i < cart.length; i++) {
    sum = sum + cart[i].itemPrice
  }
  return sum 
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
     if (cart[i].itemName === item) {
       cart.splice(parseInt(i), 1)
     return cart
     }
   }
   return "That item is not in your cart."
  }


const cardNumber = Math.floor(Math.random() * 100000000);


function placeOrder(cardNumber) {
  // write your code 
  const cartTotal = total();
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
