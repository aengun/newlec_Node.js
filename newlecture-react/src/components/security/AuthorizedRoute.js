import { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthStore from "../../reducer/AuthStore";
import SecurityContext from "./SecurityContext"

class AuthorizedRoute extends Component {
    render() {

        let store = AuthStore.store.getState();
        let authenticated = store.userName?true:false;
        let { path, component: Target, location } = this.props;
        console.log(location.pathname);

        if (!authenticated) //인증이 된적이 없으면
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