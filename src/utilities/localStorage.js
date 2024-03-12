let getStoredCart=()=>{
 const storedCartItemString=   localStorage.getItem('cart')
 if (storedCartItemString) {
  return  JSON.parse(storedCartItemString)
 }else{
    return []
 }
}

let saveToCart=cart=>{
   let cartStringField= JSON.stringify(cart)
   localStorage.setItem('cart',cartStringField)
}

 function addToCart(id) {
    const addingCartItem=getStoredCart()
    addingCartItem.push(id)
    saveToCart(addingCartItem)
 }

 function removeCart(id) {
    let storeCard=getStoredCart()

   let remainingCArt=  storeCard.filter(value=> value !==id)
   console.log(remainingCArt);
   saveToCart(remainingCArt)
 }

 export {addToCart,getStoredCart,removeCart}