import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: [
            'Amir',
            'Ali',
            'Nilo',
            'Nili',
        ],
    };

    constructor() {
        super();
        // this.handleIncrement = this.handleIncrement.bind(this);
        // this.handleDecrement = this.handleDecrement.bind(this);
    }

    render() {
        return (
            <div>
                <span className={this.badgeClasses()}>{this.state.count === 0 ? 'Zero' : this.state.count}</span>
                <button onClick={() => this.handleIncrement} className="m-2 btn btn-sm btn-secondary">Increment</button>
                <button onClick={() => this.handleDecrement} className="m-2 btn btn-sm btn-secondary" disabled={this.state.count === 0 ? true : null}>Decrement</button>
                <button onClick={() => this.deleteProduct} className="m-2 btn btn-sm btn-danger">Delete</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    deleteProduct = () => {
        console.log('Delete');
    }

    badgeClasses() {
        let classes = "m-2 badge badge-";
        classes += (this.state.count) === 0 ? 'warning' : 'primary';
        return classes;
    }
}

export default Counter;