import React, { useEffect } from "react";
import { connect } from "react-redux";
import {injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import auth0 from '../../../../plugins/auth0'


function Login(props) {

  useEffect(() => {
    auth0.loginWithRedirect().catch(() => {
      console.error('error logging in');
    });
  }, []); 

  return (
    <div>
      
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
