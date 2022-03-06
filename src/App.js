import React, { Component } from "react";
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import counter from "./components/counter";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 1},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0},
            {id: 6, value: 0},
        ]
    };

    render() {
        return (
            <React.Fragment>
                <Navbar all={this.state.counters.map(c => c.value)} />
                <div className="container-fluid">
                    <Counters
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    />
                </div>
            </React.Fragment>
        )
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

    calculateAll() {
        let all = 0;
        this.state.counters.map(c => {
            all += counter.value
        });
        return all;
    }
}

export default App;
