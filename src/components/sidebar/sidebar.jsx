import "./sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="name"><span className="dev">Dev</span><span className="hire">Hire</span></div>

            <div className="nav">
                <NavLink className={(navData) => navData.isActive ? "nav-item active" : "nav-item" } to="/"><i className="fas fa-search"></i><span>Home</span></NavLink>
                <NavLink className={(navData) => navData.isActive ? "nav-item active" : "nav-item" } to="/favorites"><i className="fas fa-heart"></i><span>Favorites</span></NavLink>
            </div>
            
        </div>
    ) 
}

export default Sidebar;