import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ShowAccounts(status) {
    const history = useHistory();
    function edit(id) {
        history.push('/editaccount/' + id);
    }
    function remove(id) {
        axios.delete('http://localhost:3000/orders/' + id)
        .then((response) => {
            window.location.reload(true);
        }).catch((error) => {
            console.log(error.response.data.message)
        });
    }
    return (
        <div>
            <h2>Id, Driver Id, Get Date, Send Date</h2>
            {status.status._id ? <div key={status.status._id}>
                <h3>{status.status._id}, {status.status.driver_id}, {status.status.get_date}, {status.status.send_date}</h3>
                {localStorage.getItem('employee_type') === 'manager' ? <button onClick={() => {remove(status.status._id)}}>Delete</button> : null}
            </div> : null}
            {Array.from(status.status).map((item) => (
                <div key={item._id}>
                    <h3>{item._id}, {item.driver_id}, {item.get_date}, {item.send_date}</h3>
                    {localStorage.getItem('employee_type') === 'manager' ? <button onClick={() => {remove(item._id)}}>Delete</button> : null}
                </div>)
            )}
        </div>
    )
}

function handleClick (setStatus, id) {
    axios.get('http://localhost:3000/orders/' + id)
    .then((response) => {
        setStatus(response.data);
    }).catch((error) => {
        setStatus([]);
    });
}

function Orders() {
    const history = useHistory();
    const [status, setStatus] = React.useState([]);
    const [id, setId] = React.useState('');

    const handleChange = (e) => {
        e.persist();
        setId(e.target.value);
    }

    return (
        <center>
        {(localStorage.getItem('employee_type') === 'manager' || localStorage.getItem('employee_type') === 'callcenterOperator') ? 
        <div>
            <h1>Orders</h1>
            <input type="text" name="id" value={id} onChange={handleChange} />
            <br/><br/><br/>
            <div className="special"><button onClick={() => {handleClick(setStatus, id)}}>Search orders</button></div>
            <ShowAccounts status={status}></ShowAccounts>
        </div>
        : <h1>You do not have permission to use this page!</h1>}
        </center>
    );
}

export default Orders;