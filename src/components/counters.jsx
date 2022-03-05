import React, { Component } from "react";
import Counter from "./counter";
import counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0},
            {id: 6, value: 0},
        ]
    };

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="m-4 btn btn-primary">Reset</button>
                <ul>
                    {
                        this.state.counters.map(
                            counter => (
                                <div id={counter.id}>
                                    <Counter
                                        key={counter.id}
                                        onDelete={this.handleDelete}
                                        onIncrement={this.handleIncrement}
                                        onDecrement={this.handleDecrement}
                                        counter={counter}
                                    />
                                    <br />
                                </div>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value--;
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({
            counters: counters
        });
    }
}

export default Counters;