import PropTypes from 'prop-types';

function FeedbackOption({options = [], onLeaveFeedback}) {

    return( 
        <div>
            <h2>Please, leave feedback</h2>
            <div>
                {options.map(btn => (
                    <button 
                        value={btn} 
                        key = {btn} 
                        type='button' 
                        onClick= {onLeaveFeedback}
                    >{btn}
                    </button>
                ))}
            </div>
        </div>
    )
}

FeedbackOption.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOption;