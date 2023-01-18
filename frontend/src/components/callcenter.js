import React from 'react';
import { useHistory } from 'react-router-dom';

const Callcenter = () => {
    const history = useHistory();

    return (
        <center>
        {localStorage.getItem('employee_type') === 'callcenterOperator' ? 
        <div>
            <h1>Callcenter Operator page</h1>
            <div className="special"><button onClick={() => {history.push('/accounts')}}>Accounts</button></div>
            <br/><br/>
            <div className="special"><button onClick={() => {history.push('/orders')}}>Orders</button></div>
            <br/><br/>
            <div className="special"><button onClick={() => {history.push('/warehouses')}}>Warehouses</button></div>
            <br/><br/>
        </div>
        : <h1>You do not have permission to use this page!</h1>}
        </center>
    );
}

export default Callcenter;