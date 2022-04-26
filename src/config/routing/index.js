import routes from "./routes";
import Home from "containers/Home";
import Summary from "containers/Summary";
import Error from "containers/Error";
import ReduxContainers from "containers/ReduxContainers";
import ReduxCounter from "containers/ReduxContainers/ReduxCounter";
import Counter from "containers/Counter";


const routing = [
    { path: routes.home, component: Home, exact: true },
    { path: routes.summary, component: Summary, exact: true },
    { path: routes.redux, component: ReduxContainers },
    { path: routes.counter, component: Counter },
    { path: routes.reduxCounter, component: ReduxCounter },
    { path: '*', component: Error, },
];

export default routing;