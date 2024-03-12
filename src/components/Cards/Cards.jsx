// import React from 'react';
import { useState } from 'react';
import Hisab from './Hisab/Hisab';
import { add ,someNumbersDividedBy as divide} from './Scripts/app';


const Cards = () => {
    let [we,ser]=useState(0)
    let sum=add(77,88)
    let d=divide(6,7,8,9)
    console.log(d);
    function keep(hold) {
        let i=hold+d
        // console.log(hold);
        ser(i)
    }
    return (
        <div>
            <p>My summation:{we} <Hisab keep={keep} sum={sum}></Hisab> </p>
        </div>
    );
};

export default Cards;