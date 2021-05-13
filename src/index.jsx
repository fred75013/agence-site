import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import GlobalContext from "./GlobalContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import StudyCase from "components/StudyCase";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <body className="App" data-theme={localStorage.client}>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/work/:caseSlug">
                <StudyCase />
              </Route>
              <Route path="/work/">
                <Work />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </main>
        </Router>
      </body>
    </GlobalContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
