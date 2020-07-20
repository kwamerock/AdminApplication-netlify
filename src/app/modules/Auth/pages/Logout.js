import { useAuth0 } from "@auth0/auth0-react";
import {injectIntl } from "react-intl";

function Logout() {
  const { logout } = useAuth0();
  logout();

  return null;

}

export default injectIntl(Logout);
