import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ShowAccounts(status) {
    const history = useHistory();
    function edit(id) {
        history.push('/editaccount/' + id);
    }
    function remove(id) {
        axios.delete('http://localhost:3000/vehicles/' + id)
        .then((response) => {
            window.location.reload(true);
        }).catch((error) => {
            console.log(error.response.data.message)
        });
    }
    return (
        console.log(status),
        <div>
            <h2>Vehicle Id, Type, Capacity, Capacity Used, Length, Width, Height, License Plate</h2>
            {status.status._id ? <div key={status.status._id}>
                <h3>{status.status._id}, {status.status.type}, {status.status.capacity}, {status.status.capacity_used}, {status.status.length}, {status.status.width}, {status.status.height}, {status.status.license_plate} {status.status.fragile ? <>, Fragile</> : null} {status.status.availability ? <>, Available</> : null} {status.status.needsMaintanace ? <>, Needs maintanance</> : null} </h3>
                {localStorage.getItem('employee_type') === 'manager' ? <button onClick={() => {remove(status.status._id)}}>Delete</button> : null}
            </div> :
            <div>
            {Array.from(status.status).map((item) => (
                <div key={item._id}>
                    <h3>{item._id}, {item.type}, {item.capacity}, {item.capacity_used}, {item.length}, {item.width}, {item.height}, {item.license_plate} {item.fragile ? <>, Fragile</> : null} {item.availability ? <>, Available</> : null} {item.needsMaintanace ? <>, Needs maintanance</> : null} </h3>
                    {localStorage.getItem('employee_type') === 'manager' ? <button onClick={() => {remove(item._id)}}>Delete</button> : null}
                </div>)
            )}
            </div>
            }
        </div>
    )
}

function handleClick (setStatus, id) {
    axios.get('http://localhost:3000/vehicles/' + id)
    .then((response) => {
        setStatus(response.data);
    }).catch((error) => {
        setStatus([]);
    });
}

function Vehicles() {
    const history = useHistory();
    const [status, setStatus] = React.useState([]);
    const [id, setId] = React.useState('');

    const handleChange = (e) => {
        e.persist();
        setId(e.target.value);
    }

    return (
        <center>
        {(localStorage.getItem('employee_type') === 'manager' || localStorage.getItem('employee_type') == 'callcenterOperator') ? 
        <div>
            <h1>Vehicles</h1>
            <input type="text" name="id" value={id} onChange={handleChange} />
            <br/><br/><br/>
            <div className="special"><button onClick={() => {handleClick(setStatus, id)}}>Search vehicles</button></div>
            <ShowAccounts status={status}></ShowAccounts>
        </div>
        : <h1>You do not have permission to use this page!</h1>}
        </center>
    );
}

export default Vehicles;