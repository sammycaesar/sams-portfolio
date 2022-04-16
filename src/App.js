import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
