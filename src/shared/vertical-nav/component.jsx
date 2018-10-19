import { arrayOf, string, shape, func } from 'prop-types';
import classNames from 'classnames';
import { Nav, NavItem, NavLink } from 'platform-common-ui';

import styles from './component.scss';

const VerticalNav = props => (
    <Nav vertical className={classNames(styles.root, props.className)} >
        { props.title &&
            <span className={classNames(styles.title, props.titleClassName)}>
                { props.title }
            </span>
        }
        { props.items.map(item => (
            <NavItem key={item.id} className={props.itemClassName}>
                <NavLink
                    className={classNames({ active: props.activeId === item.id }, props.linkClassName)}
                    onClick={e => item.onClick({ e, item })}
                >
                    { item.title }
                </NavLink>
            </NavItem>
        ))}
    </Nav>
);

VerticalNav.propTypes = {
    activeId: string.isRequired,
    items: arrayOf(shape({
        id: string.isRequired,
        title: string.isRequired,
        onClick: func.isRequired
    })),
    className: string,
    title: string,
    titleClassName: string,
    itemClassName: string,
    linkClassName: string
};
VerticalNav.defaultProps = {
    items: [],
    className: undefined,
    title: undefined,
    titleClassName: undefined,
    itemClassName: undefined,
    linkClassName: undefined
};

export default VerticalNav;
