import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

export default class TrackOrder extends Component {
    constructor() {
        super();
        this.state = {
            id : '',
            info : '',
            msg: '',
            review: 1,
            reviewMsg: '',
            ok: false,
        };
    }

    handleButtonClick = () => {
        if (this.state.id === '') {
            this.setState({
                msg: 'Please enter an order ID'
            });
            return;
        }
        axios.get('http://localhost:3000/orders/' + this.state.id).then(res => {
            this.checkReview(this.state.id);
            switch (res.data.state) {
                case "1":
                    res.data.state = 'Order is placed';
                    break;
                case "2":
                    res.data.state = 'Order was picked up';
                    break;
                case "3":
                    res.data.state = 'Order is in warehouse';
                    break;
                case "4":
                    res.data.state = 'Order was delivered';
                    break;
                default:
                    res.data.state = 'Unknown';
            }
            this.setState( {
                msg: 'SUCCESS',
                info: res.data
            });
        }).catch(err => {
            this.setState({
                msg: 'Error: ' + err.response.data.message
                });
        });
    };

    handleButtonClickReview = () => {
        axios.get('http://localhost:3000/reviews/' + this.state.id).then(res => {
            this.setState({
                ok: true,
            });
            return false;
        }).catch(err => {
            this.setState({
                ok: false,
            });
        }).then(axios({
            method: 'post',
            url: 'http://localhost:3000/reviews/',
            data: {
                product_id: this.state.info._id,
                rating: this.state.review,
                review: this.state.reviewMsg,
            }
        }).then(res => {
            this.setState({
                msg: 'SUCCESS'
            });
        }).catch(err => {
            this.setState({
                msg: 'Error: ' + err.response.data.message
                });
        }));
    };

    handleChange = e => {
        this.setState({
            id: e.target.value,
        });
    };

    handleChangeReview = e => {
        this.setState({
            reviewMsg: e.target.value,
        });
    };

    handleReview = e => {
        this.setState({ review: e.value });
    }

    checkReview = async (id) => {
        await axios.get('http://localhost:3000/reviews/' + id).then(res => {
            this.setState({
                ok: false,
            });
        }).catch(err => {
            this.setState({
                ok: true,
            });
        });
        return true;
        };

    render() {
        function handleClick (setStatus, id) {
            axios.get('http://localhost:3000/orders/' + id)
            .then((response) => {
                setStatus(response.data);
            }).catch((error) => {
                setStatus([]);
            });
        }
        const options = [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
        ];
        return (
            <center>
                <h1>Track your order.</h1>
                <h2>Put down your order ID.</h2>
                <input type="text" name="id" value={this.state.id} onChange={this.handleChange} />
                <br />
                <br />
                <div className="special"><button onClick={this.handleButtonClick}>Track</button></div>
                {
                    (this.state.msg === '' || this.state.msg === 'SUCCESS') ? null : <h2>{this.state.msg}</h2>
                }
                {
                    (this.state.msg === 'SUCCESS') ? 
                    <>
                        {
                            ((this.state.info.state === 'Order was delivered') && this.state.ok) ? <div>
                                <h2>Leave a Review about your order!</h2>
                                <div className="select">
                                    <Select name="review" options={options} value={options.find(item => item.value === this.state.review)} onChange={this.handleReview}></Select>
                                </div>
                                <input type="text" name="id" value={this.state.reviewMsg} onChange={this.handleChangeReview} />
                                <br />
                                <br />
                                <div className="special"><button onClick={this.handleButtonClickReview}>Leave a Review</button></div>
                            </div> : null
                        }
                        <h2>Order state: {this.state.info.state}</h2>
                        <h2>Length: {this.state.info.x_in_mm}</h2>
                        <h2>Width: {this.state.info.z_in_mm}</h2>
                        <h2>Height: {this.state.info.y_in_mm}</h2>
                        {this.state.info.is_breakable ? <h2>Breakable</h2> : null}
                        {this.state.info.is_perishable ? <h2>Perishable</h2> : null}
                        <h2>Sender: {this.state.info.sender_info.name}, {this.state.info.sender_info.street_and_number}, {this.state.info.sender_info.zipcode}
                        , {this.state.info.sender_info.city}, {this.state.info.sender_info.country}</h2>
                        <h2>Receiver: {this.state.info.receiver_info.name}, {this.state.info.receiver_info.street_and_number}, {this.state.info.receiver_info.zipcode}
                        , {this.state.info.receiver_info.city}, {this.state.info.receiver_info.country}</h2>
                    </>
                    : null
                }
            </center>
        )
    }
}