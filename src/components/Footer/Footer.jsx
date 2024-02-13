import { Link } from 'react-router-dom';
import './Footer.css';
import { FaGithub } from "react-icons/fa";
function Footer() {
    return (
        <div 
            style={{marginTop: '10rem'}} 
            className="footer py-3"
        >
            <div className="container d-flex justify-content-center" >
                <Link className='github'><FaGithub/></Link>
            <span className="text">@ShopCart</span>
            </div>
        </div>
    )
}

export default Footer;