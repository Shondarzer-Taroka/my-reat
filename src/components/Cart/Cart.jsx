

const Cart = ({cart,handleREmoveCart}) => {
    console.log(cart);
    return (
        <div>
            <h6>Cart: {cart.length} </h6>
            <div>
                {cart.map(value =><div  key={value.id}>
                <img style={{width:100+'px'}} src={value.image}></img> 
                <button onClick={()=>handleREmoveCart(value.id)}>remove</button>   
                </div> )}
            </div>

        </div>
    );
};

export default Cart;