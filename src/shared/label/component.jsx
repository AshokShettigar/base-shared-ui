import { node, string, bool } from 'prop-types';
import classNames from 'classnames';
import { Badge } from 'reactstrap';
import styles from './component.scss';

const Label = props => {
    const labelClassName = classNames(
        props.className,
        styles.label,
        styles[props.color]
    );

    return (
        <Badge
            className={labelClassName}
            color={props.color}
            pill={props.pill}
        >
            {props.children}
        </Badge>
    );
};

Label.propTypes = {
    children: node.isRequired,
    className: string,
    color: string,
    pill: bool
};

Label.defaultProps = {
    className: undefined,
    color: 'secondary',
    pill: false
};

export default Label;
