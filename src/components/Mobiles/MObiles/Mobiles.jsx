
import { useEffect, useState } from 'react'
import Mobile from '../Mobile/MObile/Mobile';
import '../CSS/Mobiles.css'
import { addToCart, getStoredCart, removeCart } from '../../../utilities/localStorage';
import Cart from '../../Cart/Cart';
const Mobiles = () => {
    let [mobiles,setMobiles]=useState([])
    let [cartMobile,setCartMobile]=useState([])

    useEffect(()=>{
      fetch('../public/laptops.json')
      .then(res=> res.json())
      .then(data => {setMobiles(data)
        // console.log(data);
      })
    },[])


    useEffect(()=>{
        
       if (mobiles.length>0) {
        const storedCart= getStoredCart()
       console.log(typeof storedCart);
        let findingStoredCart=[]
       
        for (const id of storedCart) {
     let mobile=mobiles.find(mobile=> mobile.id===id);
     if(mobile) {
        findingStoredCart.push(mobile)
     }
        }

        console.log(findingStoredCart);
    
         setCartMobile(findingStoredCart)
       }
    },[mobiles])
  
    function handledPurchase(info) {
        let newCartsMobile=[...cartMobile,info]
       
        setCartMobile(newCartsMobile)
        addToCart(info.id)
     

    }

    function handleREmoveCart(id) {
 
        let remainingCart=cartMobile.filter(mobile=> mobile.id !==id )
        setCartMobile(remainingCart)
        // LS theke
        // visual theke
     removeCart(id)
    }
    
    // console.log(mobiles.length);
    return (
<>  
        <div>
             <h1>Mobile : {mobiles.length}</h1> 
             <Cart handleREmoveCart={handleREmoveCart} cart={cartMobile}> </Cart>
        </div>

        <div className='mobile-container'>
            {mobiles.map(mobile=>  <Mobile handledPurchase={handledPurchase} key={mobile.id} mobile={mobile}></Mobile>)}
        
        </div>
        
</>
    );
};

export default Mobiles;