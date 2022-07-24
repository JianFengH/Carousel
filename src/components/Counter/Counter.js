import cx from 'classnames';
import { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 42,
        };
    }

    render() {
        return (
            <>
                <div>
                    <h2 className='counter'>{this.state.count}</h2>
                    <button
                        className='counter-button'
                        onClick={() => this.setState({ count: this.state.count + 1 })}>
                        Click
                    </button>
                </div>
                <style>{`
                    .counter {
                        font-size: 2rem;
                        font-weight: bold;
                    }
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}
