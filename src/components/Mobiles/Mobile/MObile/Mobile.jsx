
 import '../STYLE/Mobile.css'
const Mobile = ({mobile,handledPurchase}) => {
       let {image,amount,title,spectacle,processor,feature}=mobile
    //    console.log(image);

       function holdPassingFunc(params) {
       
       }
    return (
        <div className="mobile">
            <div>
                 <img style={{width:100+'%'}} src={image} alt="" />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{spectacle}</p>
              <p>{processor}</p>
              <p>{feature}</p>
              <h5>{amount}</h5>
            </div>
            <button onClick={()=>  handledPurchase(mobile)}>purchase</button>
        </div>
    );
};

export default Mobile;