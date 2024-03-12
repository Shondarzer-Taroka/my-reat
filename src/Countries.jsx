// import React from 'react';
import { useEffect } from 'react'
import { useState } from 'react'
import Country from './components/countries/Country/Country';
import './components/CSS/Contrs.css'
const Countries = () => {
    let [countries,setCountries]=useState([])
    let [selectedCont,setIsSelectedCont]=useState([])
    let [selImage,setImage]=useState([])

    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=> res.json())
      .then(data=> {
       setCountries(data)
        console.log(data);
      })
    },[])
    function selectedCountries(name) {
        console.log('selecntrs',name);
        let newcont=[...selectedCont,name]
            setIsSelectedCont(newcont)
        
//         let r= selectedCont.push(name)
//    console.log(r);
//         setIsSelectedCont(r)
//         console.log(selectedCont);
    }

    function selectedImage(image) {
        let newcont3=[...selImage,image]
        setImage(newcont3)  
    }
    return (
        <>      
        <div>
            <div>
                {selImage.map(v=> <img style={{width:100 +'px',objectFit:'cover',height:`${100}px`}} src={v}></img>)}
            </div>
            <h1>countries:{countries.length}</h1>

            <div>
                <h3>Selected Countries : {selectedCont.length}</h3>
                <ul>
                    {selectedCont.map(v=> <li>{v}</li> )}
                </ul>
            </div>
        </div>

        <div className='countries'>
        {
            countries.map(country=> <Country key={country.cca3} selectedImage={selectedImage} selectedCountries={selectedCountries} country={country}></Country>)
        }
        </div>
        </>
    );
};

export default Countries;