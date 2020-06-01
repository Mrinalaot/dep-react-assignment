import React from 'react';
import './App.css';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Orders from './components/order/Orders';
import Cart from './components/cart/Cart';
import BookDescription from './components/book_description/BookDescription';
import Page404 from './components/page_not_found/Page404';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/orders" component={Orders}>
          </Route>
          <Route path="/cart" component={Cart}>
          </Route>
          <Route path="/book/:id" component={BookDescription} >
          </Route>
          <Route exact path="/" component={Home} >
          </Route>
          <Route exact path="/*" component={Page404}>
          </Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
