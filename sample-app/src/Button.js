import React, { Component } from 'react';

class Button extends Component {

    click = () => {
        alert('test');
    };

    render() {
        return <div onClick={this.click} className="Button" />;
    };
}

export default Button;
