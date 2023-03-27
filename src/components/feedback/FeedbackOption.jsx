import { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOption extends Component {
    static defaultProps = {
        options: [],
    }
    static propTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    }
render() {
    return( 
        <div>
            <h2>Please, leave feedback</h2>
            <div>
                {this.props.options.map(btn => (
                    <button 
                        value={btn} 
                        key = {btn} 
                        type='button' 
                        onClick= {
                        (event) => this.props.onLeaveFeedback(event)
                        }
                    >{btn}
                    </button>
                ))}
            </div>
        </div>
    )
}
}

export default FeedbackOption;