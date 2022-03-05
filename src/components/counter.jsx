import React, {Component} from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <h5>Counter #{this.props.id}</h5>
                <span className={this.badgeClasses()}>{this.state.value === 0 ? 'Zero' : this.state.value}</span>
                <button onClick={this.handleIncrement} className="m-2 btn btn-sm btn-secondary">Increment</button>
                <button onClick={this.handleDecrement} className="m-2 btn btn-sm btn-secondary" disabled={this.state.value === 0 ? true : null}>Decrement</button>
                <button onClick={this.deleteProduct} className="m-2 btn btn-sm btn-danger">Delete</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({
            value: this.state.value + 1
        });
    }
    handleDecrement = () => {
        this.setState({
            value: this.state.value - 1
        });
    }

    deleteProduct = () => {
        console.log('Delete');
    }

    badgeClasses() {
        let classes = "m-2 badge badge-";
        classes += (this.state.value) === 0 ? 'warning' : 'primary';
        return classes;
    }
}

export default Counter;