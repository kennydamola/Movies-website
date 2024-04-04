import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js"

function Module(){
    return(
        <div className="bg-pimary">
            <FaWhatsapp size={32} color="green" />
            <FaFacebookMessenger size={32} color="black" />
            <FaInstagramSquare size={32} color="red" />
            <FaHouseDamage size={32} color="blue" />
            <h1 className="text-dark bg-danger">This is a Module component</h1>
            <h3 className="text-primary bg-dark"> Welcome To React Js</h3>
            <h3></h3>
        </div>
    )
}

export default Module