import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Rout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Rout;