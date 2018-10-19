import { Button } from 'reactstrap';
import classNames from 'classnames';
import {
    node,
    string,
    bool,
    func
} from 'prop-types';
import styles from './component.scss';

const Link = props => {
    const { children, className, ...restProps } = props;
    const linkProps = {
        ...restProps,
        color: 'link'
    };
    const linkStyles = classNames(
        className,
        styles.root,
        {
            [styles.active]: props.active
        }
    );

    return (
        <Button
            {...linkProps}
            className={linkStyles}
        >
            {props.children}
        </Button>
    );
};

Link.propTypes = {
    children: node.isRequired,
    className: string,
    disabled: bool,
    href: string,
    target: string,
    active: bool,
    onClick: func
};

Link.defaultProps = {
    className: undefined,
    disabled: false,
    block: false,
    active: false,
    onClick: undefined
};

export default Link;
