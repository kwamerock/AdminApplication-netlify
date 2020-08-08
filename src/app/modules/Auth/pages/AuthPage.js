/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link, Switch, Redirect} from "react-router-dom";
import {ContentRoute} from "../../../../_metronic/layout"
import Login from "./Login";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";

export function AuthPage() {
  return (
      <>
        <div className="d-flex flex-column flex-root">
            {/* begin::Content body */}
            <div>
              <Switch>
              <ContentRoute path="/auth/login" component={Login}/>
              <Redirect from="/auth" exact={true} to="/auth/login"/>
              <Redirect to="/auth/login"/>
            </Switch>
            </div>
            {/*end::Content body*/}

            {/* begin::Mobile footer */}
            <div
                className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2020 Metronic
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <Link to="/terms" className="text-dark-75 text-hover-primary">
                  Privacy
                </Link>
                <Link
                    to="/terms"
                    className="text-dark-75 text-hover-primary ml-4"
                >
                  Legal
                </Link>
                <Link
                    to="/terms"
                    className="text-dark-75 text-hover-primary ml-4"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* end::Mobile footer */}
          </div>
      </>
  );
}
