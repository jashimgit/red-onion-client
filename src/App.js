import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Link path="/">
                    <Home />
                </Link>
            </Switch>
        </Router>
    );
}

export default App;
