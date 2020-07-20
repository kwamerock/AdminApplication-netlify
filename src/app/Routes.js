/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import {Layout} from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { useAuth0 } from "@auth0/auth0-react";

export function Routes() {
    const { isAuthenticated, isLoading } = useAuth0();

    
    if (isLoading) {
        return (<></>);
    }

    if (!isAuthenticated) {
        return (
        <Switch>
            <Route>
                <AuthPage />
            </Route>

            <Redirect to="/auth/login"/>
        </Switch>);
    }

    return (
        <Switch>


            <Route path="/error" component={ErrorsPage}/>
            <Route path="/logout" component={Logout}/>


            <Layout>
                <BasePage/>
            </Layout>
        </Switch>
    );
}
