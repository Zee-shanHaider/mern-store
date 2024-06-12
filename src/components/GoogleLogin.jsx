import React from "react";
import {
  GoogleOAuthProvider,
  GoogleButton,
  GoogleLogin,
} from "@react-oauth/google";
import * as jwt_decode from "jwt-decode";

const GoogleLoginButton = () => {
  const handleLogin = (userInfo) => {
    // Decode the user details from the ID token
    const decodedUser = jwt_decode(userInfo.tokenObj.id_token);

    // Handle the login response from Google
    console.log(decodedUser);
  };
  return (
    <GoogleOAuthProvider clientId="947826351077-es5qiu16vskulnuct8c2be5g3ndfe2ec.apps.googleusercontent.com">
      <GoogleLogin onLoginSuccess={handleLogin} onLoginFailure={handleLogin} />
    </GoogleOAuthProvider>
  );
};
export default GoogleLoginButton;
