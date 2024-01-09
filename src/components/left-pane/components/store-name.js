
import "./store-name.css"


const StoreName = ()=> {
//can fetch store-name from api storing it in a variable for now
    var storeName = "Nishyan";
    var storeIcon = "https://play-lh.googleusercontent.com/lSo46kw-CobTEIbdYmQeSXaH3JOoMOeYZG-ljahKio3XvupL4eJhFqEPVGyoPPaRVQ";
    return (
        <div className="store-container">
            <div className="store-info">
                <img src={storeIcon} alt="" />
                <div className="store-name">
                    {storeName}
                    <br/>
                    <a classname="store-link" href="">Visit Store</a>
                </div>
            </div>
            <button className="dropdown-btn"><img classname="dropdown-btn-img" src="/assets/down-arrow.svg" /></button>
        </div>
    );
}

export default StoreName;