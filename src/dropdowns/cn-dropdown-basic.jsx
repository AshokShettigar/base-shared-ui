import { Component } from 'react';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Icon } from 'platform-common-ui';

class CnDropdownBasic extends Component {
    getSites() {
        const { options, isFormatted } = this.props;

        return options.map((option, index) => (
            <div
                role="presentation"
                key={option.name}
                className="cn-dropdown-sites__list__item"
                onClick={option.onClick}
            >
                <span>{ isFormatted && `${this.formatZero(index + 1)} ` }</span>
                <span>{ option.name }</span>
            </div>
        ));
    }

    getOptions() {
        const { options } = this.props;

        const itemsList = options.map(option => (
            <DropdownItem
                key={option.name}
                onClick={option.onClick}
            >
                { option.name }
            </DropdownItem>
        ));

        return itemsList;
    }

    formatZero(num) {
        const numLength = num.toString().length;
        const zeroMap = [`000${num}`, `00${num}`, `0${num}`];

        if (numLength < 4) {
            return zeroMap[numLength - 1];
        }

        return num;
    }

    render() {
        const { label, type, options, pullRight } = this.props;
        const optionsLength = options.length;

        const contextMenu = (
            <UncontrolledDropdown id="cn-dropdown-basic-context" className="cn-dropdown-context">
                <DropdownToggle>
                    <span className="cn-dropdown__caret">
                        <Icon icon={label} />
                    </span>
                </DropdownToggle>
                <DropdownMenu
                    right={pullRight}
                    className="items-list cn-dropdown-context__list"
                >
                    { this.getOptions() }
                </DropdownMenu>
            </UncontrolledDropdown>
        );

        const listOfSites = (
            <UncontrolledDropdown
                id="cn-dropdown-basic-sites"
                className="cn-dropdown-sites"
            >
                <DropdownToggle>
                    {
                        optionsLength > 1
                        ? `${optionsLength} sites`
                        : `${optionsLength} site`
                    }
                    <span className="cn-dropdown__caret">
                        <Icon icon={label} />
                    </span>
                </DropdownToggle>
                <DropdownMenu
                    right={pullRight}
                    className="items-list cn-dropdown-sites__list"
                >
                    { this.getSites() }
                </DropdownMenu>
            </UncontrolledDropdown>
        );

        const dropDowns = {
            context: contextMenu,
            sites: listOfSites
        };

        return (
            <div className="cn-dropdown">
                { dropDowns[type] }
            </div>
        );
    }
}

CnDropdownBasic.propTypes = {
    type: PropTypes.oneOf(['sites', 'context']).isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            onClick: PropTypes.func
        })
    ).isRequired,
    isFormatted: PropTypes.bool,
    label: PropTypes.string,
    pullRight: PropTypes.bool
};

CnDropdownBasic.defaultProps = {
    isFormatted: false,
    options: []
};

export default CnDropdownBasic;

