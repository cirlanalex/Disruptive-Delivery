import React from 'react';
import Main from './components/main';
import Login from './components/login';
import Manager from './components/manager';
import Driver from './components/driver';
import TrackOrder from './components/trackorder';
import Warehouse from './components/warehouse';
import Warehouses from './components/warehouses';
import WarehouseEmployees from './components/warehouseemployees';
import Callcenter from './components/callcenter';
import CallcenterOperators from './components/callcenterOperators';
import Accounts from './components/accounts';
import Review from './components/reviews';
import Orders from './components/orders';
import Drivers from './components/drivers';
import Vehicles from './components/vehicles';
import Navbar from './Navbar';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
      <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/trackorder" component={TrackOrder}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/manager" component={Manager}/>
        <Route exact path="/driver" component={Driver}/>
        <Route exact path="/warehouse" component={Warehouse}/>
        <Route exact path="/callcenter" component={Callcenter}/>
        <Route exact path="/accounts" component={Accounts}/>
        <Route exact path="/orders" component={Orders}/>
        <Route exact path="/drivers" component={Drivers}/>
        <Route exact path="/callcenteroperators" component={CallcenterOperators}/>
        <Route exact path="/warehouseemployees" component={WarehouseEmployees}/>
        <Route exact path="/warehouses" component={Warehouses}/>
        <Route exact path="/vehicles" component={Vehicles}/>
        <Route exact path="/reviews" component={Review}/>
      </Switch>
      </>
  );
};

export default App;