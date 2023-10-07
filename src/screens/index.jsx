import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./Home"
import { useAuth } from "../context/auth";
import link from "../data/link";
import Login from "./Login";
// import InitializeClient from "../components/Home/InitializeClient";


function index() {
    //     const {
    // state:{auth}
    //     } = useAuth();  

    return (
        <div className="dark:text-gray-100 bg-gray-200 dark:bg-gray-500 text-gray-400">
            <Router>
                <Routes>
                    <Route
                        path={`${link.home}/:field`}
                        // path={link.home}
                        element={
                            <Home tab={1} />
                        }
                    />
                    <Route path={link.login} element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default index;
