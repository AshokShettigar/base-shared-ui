import { node, string } from 'prop-types';
import classNames from 'classnames';

import { ROOT_CLASS } from '../constants';

const InlineNotificationMessage = ({ children, className }) => (
    <div className={classNames(`${ROOT_CLASS}__message`, className)}>{children}</div>
);

InlineNotificationMessage.propTypes = {
    className: string,
    children: node.isRequired
};

InlineNotificationMessage.defaultProps = {
    className: undefined
};

export default InlineNotificationMessage;
