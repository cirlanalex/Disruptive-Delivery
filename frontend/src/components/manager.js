import React from 'react';
import { useHistory } from 'react-router-dom';

const Manager = () => {
    const history = useHistory();

    return (
        <center>
        {localStorage.getItem('employee_type') === 'manager' ? 
        <div>
            <h1>Manager page</h1>
            <div className="special"><button onClick={() => {history.push('/accounts')}}>Accounts</button></div>
            <br/><br/>
            <div className="special"><button onClick={() => {history.push('/orders')}}>Orders</button></div>
            <br/><br/>
            <div className="special"><button onClick={() => {history.push('/drivers')}}>Drivers</button></div>
            <br/><br/>
            <div className="special"><button onClick={() => {history.push('/callcenteroperators')}}>CallcenterOperators</button></div>
            <br/><br/>
            <div className="special"><button onClick={() => {history.push('/warehouseemployees')}}>WarehouseEmployees</button></div>
            <br/><br/>
            <div className="special"><button onClick={() => {history.push('/warehouses')}}>Warehouses</button></div>
            <br/><br/>
            <div className="special"><button onClick={() => {history.push('/vehicles')}}>Vehicles</button></div>
            <br/><br/>
        </div>
        : <h1>You do not have permission to use this page!</h1>}
        </center>
    );
}

export default Manager;