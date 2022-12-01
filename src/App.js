import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Rocky, Yellow, Glacier } from "./components/Index";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Glacier" exact component={() => <Glacier />} /> 
          <Route path="/Rocky" exact component={() => <Rocky />} />
          <Route path="/Yellow" exact component={() => <Yellow />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
