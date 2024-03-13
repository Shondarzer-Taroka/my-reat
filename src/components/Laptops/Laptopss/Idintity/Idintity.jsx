

const Idintity = ({idintity,holdingNumber}) => {
    const style={
        width:'200px',
        border:'1px solid blue',
        padding:'10px',
        margin:'10px'

    }

    function holdId(e) {
        // console.log(e.target.previousElementSibling.innerText);
        let holdId=e.target.previousElementSibling.innerText
        let holdIdNumber=parseInt(holdId)
        holdingNumber(holdIdNumber)
        // console.log(typeof holdIdNumber);
    }
    return (
        <div>
          <div style={style}>
            <p>{idintity}</p>
            <button onClick={holdId}>remove</button>
          </div>
        </div>
    );
};

export default Idintity;