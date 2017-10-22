import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    click = () => {
        alert('test');
    };

    render() {
        return <button type="button" onClick={this.click} className="Button">Alert</button>;
    };
}

export default Button;
