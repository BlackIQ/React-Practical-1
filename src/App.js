import React, { Component } from "react";
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import counter from "./components/counter";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar all="" />
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

    // calculateAll() {
    //     let all = 0;
    //     this.state.counters.map(c => {
    //         all += counter.value
    //     });
    //     return all;
    // }
}

export default App;
