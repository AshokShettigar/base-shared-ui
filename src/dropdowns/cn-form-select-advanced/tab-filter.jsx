import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabFilter = props => {
    const isAll = (props.selectedTab).toLowerCase() === 'all';
    const isSelected = (props.selectedTab).toLowerCase() === 'selected';

    const classForMain = classNames('tab-filter__item', { 'tab-filter--selected': isAll });
    const classForNonStatic = classNames('tab-filter__item-count', { 'tab-filter__item--hide': !props.isStatic });
    const classForSelected = classNames('tab-filter__item', { 'tab-filter--selected': isSelected });

    return (
        <div className="tab-filter">
            <ul className="tab-filter__list">
                <li className={classForMain} onClick={props.onMainClick} role="presentation">
                    <span>{ props.isStatic ? 'All' : 'Search' }</span>
                    <span className={classForNonStatic}>
                        { ` (${props.countAll})` }
                    </span>
                </li>
                <li className={classForSelected} onClick={props.onSelectedClick} role="presentation">
                    <span>Selected</span>
                    <span className="tab-filter__item-count">{ ` (${props.countSelected})` }</span>
                </li>
            </ul>
        </div>
    );
};

TabFilter.propTypes = {
    selectedTab: PropTypes.string,
    countAll: PropTypes.number,
    countSelected: PropTypes.number,
    isStatic: PropTypes.bool,
    onMainClick: PropTypes.func,
    onSelectedClick: PropTypes.func
};

TabFilter.defaultProps = {
    countAll: 0,
    countSelected: 0
};

export default TabFilter;
