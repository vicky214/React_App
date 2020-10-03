import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import auth from '../auth/Auth';
// console.log('kk',auth.isAuthenticated())
export const PrivateRoute = ({
	location,
	path,
	userType,
    scope,
    isAuthenticated,
	component: Component,
	...rest
}) => {
    const destinationLocation = location.pathname;
   	if (scope === undefined)
		console.error(
			"this route does not have a scope property, please check AppRouter"
        );

	return (
		<Route
			{...rest}
			component={props =>
				isAuthenticated ? (
					scope.includes(userType) ? (
						<div>
							<Component {...props} />
						</div>
					) : (
						<h1 style={{ textAlign: "center" }}>
							You do not have access to this section.
						</h1>
					)
				) : (
					<Redirect
						to={{
							pathname: "/signin",
							from: destinationLocation
						}}
					/>
				)
			}
		/>
	);
};

const mapStateToProps = state => {
    return {
        userType: state.auth.userType,
	    isAuthenticated: state.auth.isAuthenticated,

    }
};

export default connect(mapStateToProps)(withRouter(PrivateRoute));
