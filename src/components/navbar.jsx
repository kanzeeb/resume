import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
    return(
            <div className="navbar-container">
                <div className="item-navbar-d contact-txt">contact me</div>
                <div className="item-navbar-a">
                    <a href={'http://linkedin.com/in/sebastian-velazquez-a69b21202'} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a></div>
                <div className="item-navbar-b">
                    <a href="https://api.whatsapp.com/send?phone=5547823179" target='_blank'>
                        <FaWhatsapp />
                    </a>
                </div>
                <div className="item-navbar-c"><MdEmail onClick={(e) => {window.location.href ='mailto:kanzeebastian@gmail.com'}}/></div>
            </div>
    )
}