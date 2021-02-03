import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import IndexContent from "./components/IndexContent"
import CustomerLayout from "./components/customer/Layout"
import MemberLayout from "./components/member/Layout"

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={IndexContent} />
          <Route path="/customer" component={CustomerLayout} />
          <Route path="/member" component={MemberLayout} />
        </Switch>
        {/* <Body />
      <CustomerLayout /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;