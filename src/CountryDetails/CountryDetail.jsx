import CountryMedia from "../CountryMedia/CountryMedia";

const CountryDetail = (props) => {
    // let a= {country,selectedCountries,selectedImage}
    console.log(props);
    // let {}=props
    // console.log(a);
    return (
        <div>
            <CountryMedia {...props}></CountryMedia>
        </div>
    );
};

export default CountryDetail;