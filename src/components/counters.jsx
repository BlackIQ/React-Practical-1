import React, { Component } from "react";
import Counter from "./counter";
import counter from "./counter";

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="m-4 btn btn-primary">Reset</button>
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
}

export default Counters;