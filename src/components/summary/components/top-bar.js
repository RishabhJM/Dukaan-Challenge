import "./top-bar.css"
const TopBar = ()=> {
    return (
        <div className="top-bar">
            <div className="title">
                <p className="title-heading">Payouts</p>
                <img src="/assets/question-mark-circled.svg" alt="" />
                <span className="info-text">How it works</span>
            </div>
            <div class="search-container">
                <img src="/assets/search.png" alt="" />
                <input type="text" class="search-input" placeholder="Search features,tutorials,etc." />
            </div>
            <div className="notifs">
                <img classname="top-bar-icons" src="/assets/Menu.png" />
                <img classname="top-bar-icons" src="/assets/down-arrow-grey.png" />
            </div>
        </div>
    );
}

export default TopBar;