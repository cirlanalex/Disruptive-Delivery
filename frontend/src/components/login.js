import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function handleClick (user, password, history, setStatus) {
    if (user === '' || user === null) {
        setStatus("Enter a user");
        return;
    }
    if (password === '' || password === null) {
        setStatus("Enter a password");
        return;
    }
    axios.get('http://localhost:3000/login/' + user)
    .then((response) => {
        if (response.data.password === password) {
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('employee_type', response.data.employee_type);
            if (response.data.employee_type === 'manager') {
                history.push('/manager');
            } else if (response.data.employee_type === 'driver') {
                history.push('/driver');
            } else if (response.data.employee_type === 'warehouseEmployee') {
                history.push('/warehouse');
            } else if (response.data.employee_type === 'callcenterOperator') {
                history.push('/callcenter');
            } else {
                localStorage.setItem('employee_type', 'customer');
                history.push('/');
            }
            window.location.reload(true);
        } else {
            setStatus("Wrong password");
        }
    }).catch((error) => {
        setStatus('Error: ' + error.response.data.message);
    });
}

const Login = () => {
    const history = useHistory();
    const [user, setUser] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [status, setStatus] = React.useState(null);

    return (
        <center>
        <h1 className='Title'>Log into your account.</h1>
        <br/>
        <input type="text" placeholder="user" onChange={(e) => { setUser(e.target.value) }}></input>
        <br/><br/>
        <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value); }}></input>
        <br/><br/>
        <div className="special">
        <button className="Button" onClick={ () => {
            handleClick(user, password, history, setStatus);
        }}>Login</button>
        </div>
        <h2>{status}</h2>
        </center>
    );
}

export default Login;