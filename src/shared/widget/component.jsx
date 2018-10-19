import { number, string, bool, func } from 'prop-types';
import classnames from 'classnames';
import Icon from '../../icon';
import styles from './component.scss';

const Widget = props => {
    const rootClassName = classnames({
        disabled: props.isDisabled,
        active: props.isActive && !props.isDisabled,
        normal: !props.isActive && !props.isDisabled
    }, props.className);

    return (
        <div
            tabIndex={0}
            role="presentation"
            className={styles[rootClassName]}
            onClick={props.onToggle}
        >
            <div className={styles.iconContainer} >
                <Icon className={styles.icon} icon={props.icon} />
            </div>
            <div className={styles.info}>
                <div className={styles.counter}>
                    <span className={styles.actualCount}>{props.actualCount}</span>
                    <span className={styles.totalCount}> of {props.totalCount}</span>
                </div>
                <div className={styles.title}>{props.title}</div>
            </div>
        </div>
    );
};
Widget.propTypes = {
    className: string,
    actualCount: number.isRequired,
    totalCount: number.isRequired,
    title: string.isRequired,
    icon: string.isRequired,
    isActive: bool.isRequired,
    isDisabled: bool,
    onToggle: func
};

Widget.defaultProps = {
    className: undefined,
    actualCount: 0,
    totalCount: 0,
    title: '',
    icon: 'alert',
    isActive: false,
    isDisabled: false,
    onToggle: undefined
};

export default Widget;
