import './menu.css'


const Menu = (props)=> {
        return (
            <div className="menu-container-item">
                <img src={props.imgLink} className="menu-item-img" alt="" />
                <h3>{props.menuItem}</h3>
            </div>
        );
    }
    
    export default Menu;