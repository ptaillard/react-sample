import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    click = () => {
        alert('alter box');
    };

    render() {
        return <button type="button" onClick={this.click} className="Button" style={{'background-color':'green'}}>Alert {this.props.color}</button>;
    };
}

export default Button;
