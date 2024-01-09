
import './credit-box.css'

const CreditBox = ()=> {
    const credits = "222.10";
    return (
        <div className="credit-box">
            <img src="/assets/wallet.png" alt="" />
            <div className="credit-info">
                Available Credits
                <br/>
                <span className='no-of-credits-text'>{credits}</span>
            </div>
        </div>
    );
}

export default CreditBox;