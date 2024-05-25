import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListPage from './components/ProductListPage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductListPage} />
          <Route path="/product/:productId" component={ProductDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
