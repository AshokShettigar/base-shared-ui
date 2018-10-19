import { string, object, func, arrayOf, oneOf } from 'prop-types';
import classnames from 'classnames';

import { List } from '../index';
import styles from './component.scss';

const SubList = props => (
    <List
        isSubList
        title={props.title}
        className={classnames(props.position === 'right' ? styles.toRight : styles.toLeft, props.className)}
        listClassName={styles.list}
        list={props.list}
        onSelect={props.onSelect}
    />
);

SubList.propTypes = {
    className: string,
    title: string,
    position: oneOf(['right', 'left']),
    list: arrayOf(object).isRequired,
    onSelect: func.isRequired
};

SubList.defaultProps = {
    className: undefined,
    title: undefined,
    position: 'right'
};

export default SubList;
