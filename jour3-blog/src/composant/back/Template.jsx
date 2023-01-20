import { Outlet } from "react-router-dom";

const Template = () => {
    return ( 
        <div className="row">
            <div className="col-3">
                Barre de menu Latérale

            </div>
            <div className="col">
                <Outlet />
            </div>
        </div>
     );
}
 
export default Template;