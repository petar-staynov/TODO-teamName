import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Dreboliiobmenqlnik</h1>
                <div>{this.props.children}</div>
            </div>
        );
    }
}