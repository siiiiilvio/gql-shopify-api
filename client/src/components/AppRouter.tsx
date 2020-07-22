import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import Search from '../pages/Search';
import Cart from '../pages/Cart';
import Container from '../components/UI/Container';
import Profile from '../pages/Profile';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/products">
                        <Products />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </Router>
    );
};

export default AppRouter;
