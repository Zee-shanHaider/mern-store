import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FacebookLoginCom = () => {
  //97d5ce1c6321b5f8c94a58b758aaa831 secret
  return (
    <FacebookLogin
      appId="1166747791308280"
      onSuccess={(response) => {
        console.log("Login Success!", response);
      }}
      onFail={(error) => {
        console.log("Login Failed!", error);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!", response);
      }}
    />
  );
};

export default FacebookLoginCom;
