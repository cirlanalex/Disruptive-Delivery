import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ShowAccounts(status) {
    const history = useHistory();
    function edit(id) {
        history.push('/editaccount/' + id);
    }
    function remove(id) {
        axios.delete('http://localhost:3000/users/' + id)
        .then((response) => {
            window.location.reload(true);
        }).catch((error) => {
            console.log(error.response.data.message)
        });
    }
    return (
        <div>
            {localStorage.getItem('employee_type') === 'manager' ? <h2>Id, Mail, Password, First Name, Last Name, Employee/Customer, (Type of employee)</h2>
            :
            <h2>Id, Mail, First Name, Last Name, Employee/Customer</h2>
            }
            {status.status.email ? 
                            <div>
                            {localStorage.getItem('employee_type') === 'manager' ? 
                            <>
                                                {status.status.employee === true ? <h3>{status.status._id}, {status.status.email}, {status.status.password}, {status.status.first_name}, {status.status.last_name}, Employee, {status.status.employee_type}</h3> : <h3>{status.status._id}, {status.status.email}, {status.status.password}, {status.status.first_name}, {status.status.last_name}, Customer</h3>}
                                                <button onClick={() => {edit(status.status._id)}}>Edit</button> <></>
                                                <button onClick={() => {remove(status.status._id)}}>Delete</button>
                            </>
                            : 
                            <>
                            {status.status.employee === true ? <h3>{status.status._id}, {status.status.email}, {status.status.first_name}, {status.status.last_name}, Employee, {status.status.employee_type}</h3> : <h3>{status.status._id}, {status.status.email}, {status.status.first_name}, {status.status.last_name}, Customer</h3>}
                            </>}
                            </div>
            : null}
            {Array.from(status.status).map((item) => (
                <div key={item._id}>
                    {localStorage.getItem('employee_type') === 'manager' ? 
                    <>
                                        {item.employee === true ? <h3>{item._id}, {item.email}, {item.password}, {item.first_name}, {item.last_name}, Employee, {item.employee_type}</h3> : <h3>{item._id}, {item.email}, {item.password}, {item.first_name}, {item.last_name}, Customer</h3>}
                                        <button onClick={() => {edit(item._id)}}>Edit</button> <></>
                                        <button onClick={() => {remove(item._id)}}>Delete</button>
                    </>
                    : 
                    <>
                    {item.employee === true ? <h3>{item._id}, {item.email}, {item.first_name}, {item.last_name}, Employee, {item.employee_type}</h3> : <h3>{item._id}, {item.email}, {item.first_name}, {item.last_name}, Customer</h3>}
                    </>}
                </div>)
            )}  
        </div>
    )
}

function handleClick (setStatus, id) {
    axios.get('http://localhost:3000/users/' + id)
    .then((response) => {
        setStatus(response.data);
    }).catch((error) => {
        setStatus([])
    });
}

function Accounts() {
    const history = useHistory();
    const [id, setId] = React.useState('');
    const [status, setStatus] = React.useState([]);

    const handleChange = (e) => {
        e.persist();
        setId(e.target.value);
    }

    return (
        <center>
        {(localStorage.getItem('employee_type') === 'manager' || localStorage.getItem('employee_type') === 'callcenterOperator') ? 
        <div>
            <h1>Accounts</h1>
            <input type="text" name="id" value={id} onChange={handleChange} />
            <br/><br/><br/>
            <div className="special"><button onClick={() => {handleClick(setStatus, id)}}>Search accounts</button></div>
            <ShowAccounts status={status}></ShowAccounts>
            <br/><br/>
            {localStorage.getItem('employee_type') === 'manager' ? <div className="special"><button onClick={() => {history.push('/registeremployee')}}>Create Account</button></div> : null}
            <br/><br/>
        </div>
        : <h1>You do not have permission to use this page!</h1>}
        </center>
    );
}

export default Accounts;