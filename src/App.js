import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import ScrollTop from "./hoc/ScrollTop";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const routes = [
    {path: "/", element: Home},

];
const RoutesContainer = () => (
    <Router>
        <Layout>
            <Suspense fallback={<Spinner position="full"/>}>
                <Routes>
                    {routes.map((route, key) => {
                        const RouteComponent = ScrollTop(route.element);
                        return (
                            <Route key={key} path={route.path} element={<RouteComponent/>}/>
                        );
                    })}
                    {/*<Route path="*" element={<Navigate to="/404" />} />*/}
                    {/*<Route path="/404" element={<NotFound />} />*/}
                </Routes>
            </Suspense>
        </Layout>
    </Router>
);

export default RoutesContainer;
