import { multiply } from "../Scripts/app";


const Hisab = (props) => {
    let {sum,keep}=props
    let multiplying=multiply(9,44)
    let adding=sum+multiplying

    function passing() {
        keep(adding)
    }
    // console.log(sum,keep);
    return (
        <div>
            {/* <button onClick={()=> keep(adding)}>click me</button> */}
            <button onClick={passing}>click me</button>

        </div>
    );
};

export default Hisab;