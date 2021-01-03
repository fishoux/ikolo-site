
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";
import History from "./components/History";
import Home from "./components/Home";
import Plant from "./components/Plant";

import QRcodes from "./components/QRcodes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/plant/:id" exact component={() => <Plant />} />
          <Route path="/history" exact component={() => <History />} />
          <Route path="/qrcodes" exact component={() => <QRcodes />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/** Sources:
 * AWS Amplify: https://aws.amazon.com/fr/getting-started/hands-on/host-static-website/
 * React Multipages: https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/
 * 
 */