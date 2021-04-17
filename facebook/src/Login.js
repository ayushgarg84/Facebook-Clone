import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth } from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const provider = new firebase.auth.GoogleAuthProvider();


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn= () => {

       // sign  In...
       auth
       .signInWithPopup(provider)
       .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
       })
       .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
               <img
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
                 alt=""
                 />
                <img
                  src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                  alt=""
                  />
            </div>
            <Button type="submit" onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    );
}

export default Login;
