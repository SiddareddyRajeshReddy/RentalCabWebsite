import React from "react";
import GoogleLogin from './googleLogin'
import { GoogleOAuthProvider } from "@react-oauth/google";

function Login() {

    return (
        <>
            <div className="w-full flex justify-center items-center my-[20px]">
                <div className="w-full bg-[#fde0e0] h-[90%] flex flex-col justify-around items-center p-[20px]">
                    <div className="flex justify-around w-full items-center">
                        <GoogleOAuthProvider clientId="454588527993-vuo13jpg3s9vc78c5gjnjn2a6f7baifj.apps.googleusercontent.com">
                            <GoogleLogin/>
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;