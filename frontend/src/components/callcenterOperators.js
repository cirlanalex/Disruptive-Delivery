import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ShowAccounts(status) {
    const history = useHistory();
    function edit(id) {
        history.push('/editaccount/' + id);
    }
    function remove(id) {
        axios.delete('http://localhost:3000/callcenteroperators/' + id)
        .then((response) => {
            window.location.reload(true);
        }).catch((error) => {
            console.log(error.response.data.message)
        });
    }
    return (
        console.log(status),
        <div>
            <h2>User Id</h2>
            {Array.from(status.status).map((item) => (
                <div key={item._id}>
                    <h3>{item.user_id}</h3>
                    {localStorage.getItem('employee_type') === 'manager' ? <button onClick={() => {remove(item._id)}}>Delete</button> : null}
                </div>)
            )}
        </div>
    )
}

function handleClick (setStatus) {
    axios.get('http://localhost:3000/callcenteroperators/')
    .then((response) => {
        setStatus(response.data);
    }).catch((error) => {
        setStatus('Error: ' + error.response.data.message);
    });
}

function CallcenterOperators() {
    const history = useHistory();
    const [status, setStatus] = React.useState([]);
    return (
        <center>
        {localStorage.getItem('employee_type') === 'manager' ? 
        <div>
            <h1>Callcenter Operators</h1>
            <div className="special"><button onClick={() => {handleClick(setStatus)}}>Search callcenter operators</button></div>
            <ShowAccounts status={status}></ShowAccounts>
        </div>
        : <h1>You do not have permission to use this page!</h1>}
        </center>
    );
}

export default CallcenterOperators;