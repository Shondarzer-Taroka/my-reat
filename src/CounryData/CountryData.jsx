

const CountryData = ({country,selectedCountries,selectedImage}) => {
    console.log(selectedCountries);
    return (
        <div>
            <hr />
            <p>Name: {country.name.common}</p>
        </div>
    );
};

export default CountryData;