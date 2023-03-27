import { Component } from 'react';

import PropTypes from 'prop-types';

import shortid from 'shortid';

class Statistics extends Component {
    static defaultProps = {
        stat: {good: 0, neutral: 0, bad: 0},
        total: 0,
        positiveFeedback: 0,
    }
    static propTypes = {
        stat: PropTypes.object.isRequired,
        total: PropTypes.number,
        positiveFeedback: PropTypes.func,
    }
    render() {
        return(
            <div>
                <h2>Statistics</h2>
                <ul>
                    {Object.entries(this.props.stat).map(([key, value]) => {
                        return (
                            <li key={shortid.generate()}>
                                <span>{key}: {' '}</span>
                                <span>{value}</span>
                            </li>
                        )
                    })}
                    <li>
                        <span>Total:</span>
                        <span>{this.props.total}</span>
                    </li>
                    <li>
                        <span>Positive feedback:</span>
                        <span>{this.props.positiveFeedback()}%</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Statistics;