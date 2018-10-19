/* eslint-disable react/no-unused-prop-types */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function HigherOrderTabComponent(ComposedComponent) {
    const HOCTab = props => {
        const tabClassName = classNames({
            'cn-tab': true,
            'cn-tab--active': props.isActive
        }, props.tabClassName);
        const className = classNames('cn-tab__link', props.className);
        return (
            <li className={tabClassName}>
                <ComposedComponent {...props} className={className} />
            </li>
        );
    };

    HOCTab.propTypes = {
        className: PropTypes.string,
        isActive: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        tabClassName: PropTypes.string
    };

    HOCTab.defaultProps = {
        isActive: false
    };

    return HOCTab;
}

export const DefaultTab = HigherOrderTabComponent(
    props => (
        <Link to={props.href} className={props.className}>
            {props.label}
        </Link>
        )
    );

DefaultTab.propTypes = {
    ...DefaultTab.propTypes,
    href: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            pathname: PropTypes.string,
            search: PropTypes.string,
            hash: PropTypes.string
        })
    ]).isRequired
};
