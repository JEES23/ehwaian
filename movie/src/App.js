import {
    BrowserRouter as Router,
    Switch,
    Router,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
    return <Router>
        <Switch>
            <Router path="/move/:id">
                <Detail />
            </Router>
            <Router path="/">
                <Home />
            </Router>
        </Switch>
    </Router>;
}

export default App;