import { useEffect, useState } from "react";
import Laptop from "../Laptop/Laptop";
import './Laptops.css'
import { addTocart, getLocalStorageItems, removeData } from "../../../util/app";
import Idintity from "./Idintity/Idintity";

const Laptops = () => {

    let [laptops,setLaptops]=useState([])
    let [purchaseLaptop,setPurchaseLaptop]=useState([])
    let [a,seTa]=useState([])

    useEffect(()=>{
       let b= getLocalStorageItems()
      console.log(b);
    //     let nea=[...a,b]
        seTa(b)
    },[purchaseLaptop])
    useEffect(()=>{
        fetch('/laptops.json')
        .then(res=> res.json())
        .then(data => setLaptops(data))
    },[])
    function purchaseHandled(lap) {
       let newLap=[...purchaseLaptop,lap]
       setPurchaseLaptop(newLap)
       addTocart(lap.id)
    //    console.log(lap);
    }

    function holdingNumber(id) {
         removeData(id)
        let b= getLocalStorageItems()
        // console.log(b);
        
        // purchaseLaptop.splice(2,1)
        // console.log(b.includes(id));
           
            seTa(b)
            // console.log(b);
            
    //     if (b.includes(id)) {
    //       let idx= b.indexOf(id)
    //     //    console.log(idx);
    //     // delete b[idx]
    //     //    b.splice(idx,1)
          
    //     //    addTocart(b)
    //     //    seTa(b)
    //        console.log(b);
    //     }
     }
    // console.log(laptops);
    return (<>  
       <h1>laptops: {laptops.length}</h1> 
       <h4>jl:{a.length}</h4>
       <div>
        {a.map(value=> <Idintity holdingNumber={holdingNumber} idintity={value}></Idintity>)}
       </div>
    
       {/* <h3>Cart: {purchaseLaptop.length}</h3> */}
        <div className="laptop-contaier">
            {laptops.map(laptop=> <Laptop purchaseHandled={purchaseHandled} key={laptop.id} laptop={laptop}></Laptop>)}
        </div>
        </>
    );
};

export default Laptops;