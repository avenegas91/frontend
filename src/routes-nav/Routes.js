import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import ProfileForm from "../profiles/ProfileForm";
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup }) {
    // Debugging console log to show the current state of login and register
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return (
        <div className="pt-5">
            {/* Switch component to render the first matching route */}
            <Switch>

                {/* Route for the homepage */}
                <Route exact path ="/">
                    <Homepage />
                </Route>

                {/* Route for the login form */}
                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                {/* Route for the signup form */}
                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                {/* Private route for listing companies */}
                <PrivateRoute exact path="/companies">
                    <CompanyList />
                </PrivateRoute>

                {/* Private route for displaying a specific company */}
                <PrivateRoute exact path="/companies/:handle">
                    <CompanyDetail />
                </PrivateRoute>

                {/* Private route for listing jobs */}
                <PrivateRoute exact path="/jobs">
                    <JobList />
                </PrivateRoute>

                {/* Private route for profile form */}
                <PrivateRoute path="/profiles">
                    <ProfileForm />
                </PrivateRoute>


                <Redirect to="/" />          
            </Switch>
        </div>
    );
}

export default Routes;