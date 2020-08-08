import React, { useEffect } from "react";
import { connect } from "react-redux";
import {injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { useAuth0 } from "@auth0/auth0-react";

function Login(props) {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }); 

  return (
    <div>
      
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
