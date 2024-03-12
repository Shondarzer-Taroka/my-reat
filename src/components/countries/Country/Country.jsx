import { useState } from 'react';
import './Country.css'
import CountryDetail from '../../../CountryDetails/CountryDetail';

const Country = ({ country ,selectedCountries,selectedImage}) => {
    let { name, flags, area, population } = country
    // console.log(country?.name?.common);
    let [isSelected,setIsSelected]=useState(false)

    function handleClick() {
        setIsSelected(!isSelected)
    }
    // function passWithParamsCountry() {
    //     selectedCountries()
    // }
    return (
        <div style={{color:isSelected ? 'red' : 'green'}}  className={`country ${isSelected ? 'bg' : 'unset'}`} >
            <img style={{ width: 100 + '%' }} src={flags.png} alt="" />
            <p>Country :{country?.name?.common}</p>
            <p>area: {area}</p>
            <p>
            population: {population}</p>
            <button onClick={()=> selectedCountries(country?.name?.common)}>Mark Visited</button>
            <button onClick={()=> selectedImage(flags.png)}>Add img</button>
            <button onClick={handleClick}>{isSelected ? 'visited' : 'Going'}</button>
            <div>{isSelected && 'selected'}</div>
            <hr />
            <div>
                <CountryDetail country={country} selectedCountries={selectedCountries} selectedImage={selectedImage} ></CountryDetail>
            </div>
        </div>
    );
};

export default Country;