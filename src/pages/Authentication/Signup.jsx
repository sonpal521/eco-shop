import { Link, useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import './Auth.css';
import axios from "axios";
import { signup } from "../../apis/fakeStoreProdApis";
import toast from "react-hot-toast";
function Signup() {

    const navigate = useNavigate();

    async function onAuthFormSubmit(authArguments, resetForm) {
        try {
            await axios.post(signup(), {
                username: authArguments.username,
                email: authArguments.email,
                password: authArguments.password
            });
            toast.success("Signup Successfully");
            navigate('/signin');
        } catch(error) {
            console.log(error);
            toast.error("Write Currect Information");
            resetForm();
        }
    }

    return (
        <div className="container">
           
                <h2 className="title text-center">
                    Welcome to Shop Cart
                </h2>
           
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Signup</h4>
                <Auth 
                    onSubmit={onAuthFormSubmit}
                />
                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link  to="/signin">
                        Already have an Account? Sign In Here
                    
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Signup;