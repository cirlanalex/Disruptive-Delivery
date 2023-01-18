import React, { Component } from 'react';
import axios from 'axios';

export default class Driver extends Component {
    constructor() {
        super();
        this.state = {
            id : '',
            info : '',
            msg: '',
        };
    }

    render() {
        return (
            <center>
                {(localStorage.getItem('employee_type') === 'driver') ? 
                <div>
                    <h1>Driver page</h1>
                </div>
                : <h1>You do not have permission to use this page!</h1>}
            </center>
        )
    }
}