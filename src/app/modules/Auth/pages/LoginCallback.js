import React, { useEffect } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import auth0 from '../../../../plugins/auth0'

function LoginCallback(props) {
  useEffect(() => {
    const loginFunc = async () => {
        await auth0.handleRedirectCallback();
        const user = await auth0.getUser();
        console.log(user)
        props.fulfillUser(user);
    }

    loginFunc();
  }, []); 
  
//<Redirect to="/auth/login" />
  return (
    <div>
      
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(LoginCallback));
