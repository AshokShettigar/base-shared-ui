import { node, string } from 'prop-types';
import classNames from 'classnames';
import styles from './component.scss';

const Badge = props => (
    <span className={classNames(styles.root, props.className, styles[props.color])}>
        {props.children}
    </span>
);

Badge.propTypes = {
    children: node.isRequired,
    className: string,
    color: string,
    href: string
};

Badge.defaultProps = {
    className: undefined,
    color: 'secondary'
};

export default Badge;
