import { Link } from 'react-router-dom';
import { string, shape, arrayOf } from 'prop-types';
import { upperCase, map, findLast } from 'lodash';
import styles from './component.scss';
import Icon from '../../icon';

const Breadcrumbs = props => {
    const previousBreadcrumb = findLast(props.breadcrumbs, 'link');
    const currentBreadcrumb = findLast(props.breadcrumbs, b => !b.link);

    return (
        <div className={styles.root}>
            <Link to={previousBreadcrumb.link} className={styles.backLink}>
                <Icon icon="caret-left" className={styles.backIcon} />
            </Link>
            <div className={styles.pageHeader}>
                <span className={styles.breadcrumbs}>
                    {map(props.breadcrumbs, breadcrumb => (
                            breadcrumb.link
                                ? <Link to={breadcrumb.link} className={styles.breadcrumb}>
                                    {upperCase(breadcrumb.title)}</Link>

                                : <span className={styles.currentBreadcrumb}>
                                    {` / ${upperCase(breadcrumb.title)}`}</span>
                        )
                    )}
                </span>
                <div className={styles.title}>{currentBreadcrumb.title}</div>
            </div>
        </div>
    );
};

Breadcrumbs.propTypes = {
    breadcrumbs: arrayOf(shape({
        title: string.isRequired,
        link: string
    }))
};

Breadcrumbs.propTypes = {
    breadcrumbs: []
};

export default Breadcrumbs;
