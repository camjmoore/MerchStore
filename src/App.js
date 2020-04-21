import React from 'react';
import './App.css'
import Header from './components/header/header.component'
import signInsignUp from './pages/signIn-signUp/signIn-signUp.jsx'
import Homepage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop.component'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInsignUp} />

      </Switch>
    </div>
  );
}

export default App;
