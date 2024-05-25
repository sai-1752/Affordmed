import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ProductListPage} />
                <Route path="/product/:productName" component={ProductDetailPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
