import routes from "./routes";
import Home from "containers/Home";
import Summary from "containers/Summary";
import Error from "containers/Error";
import Stores from "containers/Stores";


const routing = [
    { path: routes.home, component: Home, exact: true },
    { path: routes.summary, component: Summary, exact: true },
    { path: routes.redux, component: Stores },
    { path: '*', component: Error, },
];

export default routing;