import PropTypes from 'prop-types';

const Selector = props => (
    <div className="selector">
        <div>
            CHECK:&nbsp;
            <span className="selector__option" onClick={props.onAllSelect} role="presentation">
                ALL
            </span>
            <span className="selector__option" onClick={props.onNoneSelect} role="presentation">
                NONE
            </span>
        </div>
    </div>
);

Selector.propTypes = {
    onAllSelect: PropTypes.func,
    onNoneSelect: PropTypes.func
};

export default Selector;
