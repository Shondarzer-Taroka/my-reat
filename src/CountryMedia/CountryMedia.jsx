import CountryData from "../CounryData/CountryData";

const CountryMedia = (props) => {
    return (
        <div>
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryMedia;