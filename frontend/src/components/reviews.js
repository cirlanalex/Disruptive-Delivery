import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ShowAccounts(status) {
    const history = useHistory();
    let sum = 0;
    let i = 0;
    Array.from(status.status).map((item) => (
        sum += item.rating,
        i++
    ));
    return (
        <div>
            {i != 0 ? <h2>Average rating: {sum/i}</h2> : null}
            <h2>Id Package, Review, Rating</h2>
            {Array.from(status.status).map((item) => (
                <div key={item._id}>
                    <h3>{item._id}, {item.review}, {item.rating}</h3>
                </div>)
            )}
        </div>
    )
}

function handleClick (setStatus, id) {
    axios.get('http://localhost:3000/reviews/')
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
            <h1>Reviews</h1>
            <div className="special"><button onClick={() => {handleClick(setStatus, id)}}>Show reviews</button></div>
            <ShowAccounts status={status}></ShowAccounts>
        </center>
    );
}

export default Orders;