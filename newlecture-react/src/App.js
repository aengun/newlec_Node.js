import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import IndexContent from "./components/IndexContent"
import CustomerLayout from "./components/customer/Layout"
import MemberLayout from "./components/member/Layout"
import AdminLayout from "./components/admin/Layout"
import AuthorizedRoute from "./components/security/AuthorizedRoute"

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={IndexContent} />
          <Route path="/customer" component={CustomerLayout} />
          <Route path="/member" component={MemberLayout} />
          {/* <Route path="/admin" component={AdminLayout} /> */}
          <AuthorizedRoute path="/admin" component={AdminLayout} />
        </Switch>
        {/* <Body />
      <CustomerLayout /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;