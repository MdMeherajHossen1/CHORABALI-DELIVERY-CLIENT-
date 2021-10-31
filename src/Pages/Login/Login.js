import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    const [error, setError] = useState('')
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';
    const signInGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-11">
                    <form className="p-5 pb-2">
                        {error && <p> <small>{error}</small></p>}
                        <h2>Please Login    </h2>
                        <input type="text" className="form-control d-block mb-3" placeholder="Write your Email" />
                        <input type="text" className="form-control d-block mb-3" placeholder="Write your password" />
                        <button type="submit" class="btn col-12 text-white" style={{ background: "#FF5A00" }} >Login</button>

                    </form>
                    <h6 className="border-bottom mx-5 border-warning mb-3">OR</h6>
                    <button onClick={signInGoogle} class="btn btn-dark col-10 text-white"  > <img src={'https://i.ibb.co/CWPNzBr/Google-Symbol-1.png'} style={{ height: "30px" }} alt="" /> Sign up with Google</button>
                </div>
                <div className="col-md-6 col-11">
                    <img src={'https://i.ibb.co/PzwQNj8/4673526.jpg'} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;