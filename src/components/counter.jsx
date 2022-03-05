import React, {Component} from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    render() {
        return (
            <div>
                <h5>Counter #{this.props.counter.id}</h5>
                <span className={this.badgeClasses()}>{this.props.counter.value === 0 ? 'Zero' : this.props.counter.value}</span>
                <button onClick={() => {this.props.onIncrement(this.props.counter)}} className="m-2 btn btn-sm btn-secondary">Increment</button>
                <button onClick={() => {this.props.onDecrement(this.props.counter)}} className="m-2 btn btn-sm btn-secondary" disabled={this.props.counter.value === 0 ? true : null}>Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="m-2 btn btn-sm btn-danger">Delete</button>
            </div>
        );
    }

    badgeClasses() {
        let classes = "m-2 badge badge-";
        classes += (this.props.counter.value) === 0 ? 'warning' : 'primary';
        return classes;
    }
}

export default Counter;