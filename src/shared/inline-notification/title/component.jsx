import { node, string } from 'prop-types';
import classNames from 'classnames';

import { ROOT_CLASS } from '../constants';

const InlineNotificationTitle = ({ children, className }) => (
    <div className={classNames(`${ROOT_CLASS}__title`, className)}>{children}</div>
);

InlineNotificationTitle.propTypes = {
    className: string,
    children: node.isRequired
};

InlineNotificationTitle.defaultProps = {
    className: undefined
};

export default InlineNotificationTitle;
