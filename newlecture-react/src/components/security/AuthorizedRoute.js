import { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import SecurityContext from "./SecurityContext"

class AuthorizedRoute extends Component {
    render() {

        let { path, component: Target, location } = this.props;
        console.log(location.pathname);

        if (SecurityContext.userName == null) //인증이 된적이 없으면
            return (
                // <Redirect to="/member/login" />
                <Redirect to={{
                        pathname: "/member/login",
                        state: {
                            returnURL: location.pathname
                        }
                    }
                } />
            );
        else
            return (
                <Route path={path} component={Target} />
            );
    }
}

export default AuthorizedRoute;