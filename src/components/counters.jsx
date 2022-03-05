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
                <ul>
                    {
                        this.state.counters.map(
                            counter => (
                                <Counter key={counter.id} value={counter.value} />
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Counters;