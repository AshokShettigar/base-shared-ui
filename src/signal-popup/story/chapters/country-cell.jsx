import { string, bool } from 'prop-types';
import { Icon } from 'platform-common-ui';
import classNames from 'classnames';

const CountryCell = props => {
    const buttonClassname = classNames(
        'country-btn',
        { active: props.showPopup }
    );

    return (
        <div className={buttonClassname}>
            {props.value}<Icon icon="triangle-down" />
        </div>
    );
};

CountryCell.propTypes = {
    value: string,
    showPopup: bool
};

export default CountryCell;
