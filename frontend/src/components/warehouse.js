import React, { Component } from 'react';
import axios from 'axios';

export default class Warehouse extends Component {
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
                {(localStorage.getItem('employee_type') === 'warehouseEmployee') ? 
                <div>
                    <h1>Warehouse Employee page</h1>
                </div>
                : <h1>You do not have permission to use this page!</h1>}
            </center>
        )
    }
}