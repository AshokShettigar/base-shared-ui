import classNames from 'classnames';
import PropTypes from 'prop-types';

const Section = props => {
    const className = classNames('section', props.className);

    return (<div className={className}>
        <h4 className="section__title">{props.title}</h4>
        <div className="section__content">
            {props.children}
        </div>
    </div>);
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Section;
