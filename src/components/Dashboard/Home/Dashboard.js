// import navbar from "../Home/navbar.css";
// import Adminlogin from "../../login/Adminlogin";
// import Home from "./Home/Home";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";
import OffcanvasNav from "./OffcanvasNav";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <OffcanvasNav />
      </div>
      
      <div className="add-container">
            </div>
      <Home />
    </div>
  );
}
export default Navbar;
