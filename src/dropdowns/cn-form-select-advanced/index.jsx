import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isFunction, isEqual } from 'lodash';
import PopupSelector from './popup.jsx';

class CnFormSelectAdvanced extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisiblePopup: false,
            previewOfSelected: this.addPreviewOfSelected(props.updateList)
        };

        this.className = classNames('cn-form-select', this.props.className);

        [
            'onSelect',
            'onClosePopup',
            'onChangeData'
        ].forEach(func => {
            this[func] = this[func].bind(this);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!isEqual(this.props.updateList, nextProps.updateList)) {
            this.setState({
                previewOfSelected: this.addPreviewOfSelected(nextProps.updateList)
            });
        }
    }

    onSelect() {
        if (!this.props.isDisabled) {
            if (this.state.isVisiblePopup) {
                this.popupChildRef.onClose();
            } else {
                this.setState({
                    isVisiblePopup: true,
                    sitesFocused: true
                });
            }
        }
    }

    onClosePopup(data) {
        this.setState(prevState => ({
            isVisiblePopup: !prevState.isVisiblePopup,
            hasError: !data.length,
            previewOfSelected: this.addPreviewOfSelected(data),
            sitesFocused: false
        }));

        this.props.onSelectedData(data);

        if (isFunction(this.props.onClosePopup)) {
            this.props.onClosePopup(data);
        }
    }

    onChangeData(data) {
        this.setState({
            hasError: !data.length,
            previewOfSelected: this.addPreviewOfSelected(data)
        });

        this.props.onSelectedData(data);
    }

    getNameById(id) {
        const item = this.props.dataList.find(itemList => itemList.id === id);

        return item.name;
    }

    addPreviewOfSelected(selectedData) {
        const itemsSelectedNum = selectedData.length;
        const allSitesSelected = !!itemsSelectedNum &&
            itemsSelectedNum === this.props.dataList.length;

        return allSitesSelected ? 'All Sites' : `${itemsSelectedNum} selected`;
    }

    render() {
        const classForSelectorInput = classNames('cn-form-select__selector-input', {
            'cn-form-select__selector-input--focus': this.state.sitesFocused,
            'cn-form-select__selector-input--error': this.props.isRequired && this.state.hasError,
            'cn-form-select__selector-input--disabled': this.props.isDisabled
        });

        return (
            <div className="cn-form-select" ref={ref => { this.containerRef = ref; }}>
                <div className="cn-form-select__selector">
                    {
                        <div
                            className={classForSelectorInput}
                            onClick={this.onSelect}
                            role="presentation"
                        >
                            <span className="cn-form-select__selector-input-name">
                                { this.state.previewOfSelected || this.props.name }
                            </span>
                            <span className="cn-form-select__selector-input-icon" />
                        </div>
                    }
                </div>

                {
                    this.state.isVisiblePopup ?
                        <PopupSelector
                            isStaticList={this.props.isStaticList}
                            list={this.props.dataList}
                            onClose={this.onClosePopup}
                            onChangeData={this.onChangeData}
                            onSearch={this.props.onSearch}
                            parentRef={this.containerRef}
                            ref={ref => { this.popupChildRef = ref; }}
                            updateList={this.props.updateList}
                            disabledItems={this.props.disabledItems}
                            isLoading={this.props.isLoading}
                        /> :
                        ''
                }

            </div>
        );
    }
}

CnFormSelectAdvanced.propTypes = {
    className: PropTypes.string,
    dataList: PropTypes.arrayOf(PropTypes.any),
    isStaticList: PropTypes.bool,
    name: PropTypes.string,
    onSearch: PropTypes.func,
    onClosePopup: PropTypes.func,
    onSelectedData: PropTypes.func.isRequired,
    updateList: PropTypes.arrayOf(PropTypes.any),
    disabledItems: PropTypes.arrayOf(PropTypes.any),
    isRequired: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool
};

CnFormSelectAdvanced.defaultProps = {
    dataList: [],
    isStaticList: true,
    updateList: [],
    disabledItems: [],
    isRequired: false,
    isDisabled: false,
    isLoading: false
};

export default CnFormSelectAdvanced;
