import StoreName from "./components/store-name";
import Menu from "./components/menu";
import CreditBox from "./components/credit-box";

import "./left-pane.css"
const MENU_ITEMS = [
    { imgLink: '/assets/home-1392-svgrepo-com.svg', menuItem: 'Home' },
    { imgLink: '/assets/clipboard-list-alt-svgrepo-com.svg', menuItem: 'Orders' },
    { imgLink: '/assets/grid-svgrepo-com.svg', menuItem: 'Products' },
    { imgLink: '/assets/delivery-svgrepo-com.svg', menuItem: 'Delivery' },
    { imgLink: '/assets/speaker.png', menuItem: 'Marketing' },
    { imgLink: '/assets/Navbar Icon.png', menuItem: 'Analytics' },
    { imgLink: '/assets/money.png', menuItem: 'Payouts' },
    { imgLink: '/assets/discount-1-svgrepo-com.svg', menuItem: 'Discounts' },
    { imgLink: '/assets/users-svgrepo-com.svg', menuItem: 'Audience' },
    { imgLink: '/assets/palette.png', menuItem: 'Appearance' },
    { imgLink: '/assets/thunder.png', menuItem: 'Plugins' }
  ]
  
  
const LeftPane = ()=> {
    return (
        <div className="pane-container">
            <div className="menu-container">
                <StoreName></StoreName>
                {MENU_ITEMS.map((item, index) => (
                    <Menu key={index} imgLink={item.imgLink} menuItem={item.menuItem}></Menu>
                ))}
            </div>
            <div className="credit-box-container">
                <CreditBox></CreditBox>
            </div>
        </div>
    );
}

export default LeftPane;