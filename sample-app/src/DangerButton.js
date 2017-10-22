import React, { Component } from 'react';
import Button from './Button';

class DangerButton extends Component {
    render() {
        React.createElement("div", { className: "red" }, "Children Text");
        return <Button color="red" />;
    }
}

export default DangerButton;
