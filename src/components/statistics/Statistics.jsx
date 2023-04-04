import PropTypes from 'prop-types';
import shortid from 'shortid';

function Statistics({stat, total, positiveFeedback}) {
        return(
            <div>
                <h2>Statistics</h2>
                <ul>
                    {Object.entries(stat).map(([key, value]) => {
                        return (
                            <li key={shortid.generate()}>
                                <span>{key}: {' '}</span>
                                <span>{value}</span>
                            </li>
                        )
                    })}
                    <li>
                        <span>Total:</span>
                        <span>{total}</span>
                    </li>
                    <li>
                        <span>Positive feedback:</span>
                        <span>{positiveFeedback()}%</span>
                    </li>
                </ul>
            </div>
        )
}

Statistics.propTypes = {
    stat: PropTypes.object.isRequired,
    total: PropTypes.number,
    positiveFeedback: PropTypes.func,
}

export default Statistics;