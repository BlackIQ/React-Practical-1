import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <span className={this.badgeClasses()}>{this.state.count === 0 ? 'Zero' : this.state.count}</span>
                <button className="m-2 btn btn-sm btn-secondary">+</button>
                <button className="m-2 btn btn-sm btn-secondary" disabled={this.check()}>-</button>
                <button className="m-2 btn btn-sm btn-danger">Delete</button>
            </div>
        );
    }

    badgeClasses() {
        let classes = "m-2 badge bg-";
        classes += (this.state.count) === 0 ? 'warning' : 'primary';
        return classes;
    }

    check() {
        const count = this.state.count;
        return count === 0 ? true : null;
    }
}

export default Counter;