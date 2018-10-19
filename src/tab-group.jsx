import classNames from 'classnames';
import { cloneElement } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const TabGroup = props => {
    const className = classNames('cn-tabs', props.className);
    return (
        <div>
            <ul className={className}>
                {props.tabs.map(tab => cloneElement(tab, { key: tab.props.label }))}
            </ul>
            {props.children &&
                <div className="cn-tabs__content">
                    {props.children}
                </div>
            }
        </div>
    );
};

TabGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tabs: PropTypes.node.isRequired
};
