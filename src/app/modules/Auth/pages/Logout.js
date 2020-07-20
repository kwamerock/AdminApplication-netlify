import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import {injectIntl } from "react-intl";

function Logout() {
  const { logout } = useAuth0();
  logout();

  return(<></>);
}

export default injectIntl(Logout);
