
import './Laptop.css'
const Laptop = ({laptop,purchaseHandled}) => {
    // console.log();
    let {image,title}=laptop
    // console.log(laptop);
    return (
        <div className='laptop'>
            <img style={{width:100+'%'}} src={image} alt="" />
            <div>
                {title}

            </div>
            <button onClick={()=> purchaseHandled(laptop)}>purchase</button>
        </div>
    );
};

export default Laptop;