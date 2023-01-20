import { NavLink, Outlet } from "react-router-dom";

const Template = () => {
    return ( 
        <div className="row">
            <div className="col-3">
                <h2>Espace de Gestion</h2>
                <ul className="list-group">
                    <NavLink to="/admin" className={({isActive}) => {
                        return isActive ? "list-group-item active" : "list-group-item"
                    }} exact> gestion des articles </NavLink>
                    <NavLink to="/admin/users" className={({isActive}) => {
                        return isActive ? "list-group-item active" : "list-group-item"
                    }}> gestion des users </NavLink>
                </ul>
            </div>
            <div className="col">
                <Outlet />
            </div>
        </div>
     );
}
 
export default Template;