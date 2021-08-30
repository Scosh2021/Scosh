import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Events from "./pages/Events/Events";
import Workshops from "./pages/Workshops/Workshops";
import ScoshDetails from "./pages/ScoshDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/footer";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Route path="/contactpage" exact={true}>
                <Contact />
            </Route>
            <Route path="/" exact={true}>
                <ScoshDetails />
            </Route>
            <Route path="/events" exact={true}>
                <Events />
            </Route>
            <Route path="/workshops" exact={true}>
                <Workshops />
            </Route>
            <Route path="/blogs" exact={true}>
                <Blogs />
            </Route>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
