import React, { Component } from "react";

class Navbar extends Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        Navbar
                        &nbsp;
                        <span className="badge badge-primary">{this.props.all}</span>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;