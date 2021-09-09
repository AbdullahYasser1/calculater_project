import React, { Component } from 'react';


class Display extends Component {
    render() {
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}

export default Display;