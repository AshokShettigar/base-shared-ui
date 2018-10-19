import { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { Icon, Spinner } from 'platform-common-ui';

import TabFilter from './tab-filter.jsx';
import Searcher from './searcher.jsx';
import Selector from './selector.jsx';
import AttributeList from './attribute-list.jsx';

const ALL = 'ALL';
const SEARCH = 'SEARCH';
const SELECTED = 'SELECTED';

class PopupSelector extends Component {
    constructor(props) {
        super(props);

        this.selectedList = this.props.updateList.slice();

        this.arrList = this.getArrOfAllItems();

        this.state = {
            selectedTab: ALL,
            typeOfList: ALL,
            list: props.isStaticList ? this.props.list : [],
            selectedList: this.selectedList,
            countOfAll: this.countAll(this.props.list),
            showOptions: true,
            searchedList: [],
            searchText: ''
        };

        [
            'showMain',
            'showSelected',
            'selectAll',
            'selectNone',
            'onSelectedList',
            'onInnerSearch',
            'onOuterSearch',
            'onClickOutside',
            'onClose'
        ].forEach(func => {
            this[func] = this[func].bind(this);
        });
    }

    componentDidMount() {
        this.popupRef.scrollIntoView({ block: 'start', inline: 'start' });
        document.addEventListener('mousedown', this.onClickOutside);
    }

    componentWillReceiveProps(nextProps) {
        if (!isEqual(nextProps.list, this.props.list)) {
            this.setState({
                selectedTab: ALL,
                typeOfList: SEARCH,
                list: nextProps.list,
                countOfAll: this.countAll(nextProps.list)
            });
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onClickOutside);
    }

    onClickOutside(event) {
        if (this.containerRef &&
            this.props.parentRef &&
            !this.containerRef.contains(event.target) &&
            !this.props.parentRef.contains(event.target)) {
            this.onClose();
        }
    }

    onInnerSearch(inputText) {
        let list;

        this.scrollUp();

        if (inputText) {
            list = this.arrList.filter(item => {
                let text = item.name;
                text += item.friendlyName ? ` (${item.friendlyName})` : '';
                text += item.descriptions ? ` ${item.descriptions.join(' ')}` : '';

                return text.toLowerCase().includes(inputText.toLowerCase());
            });

            this.setState({
                selectedTab: ALL,
                typeOfList: SEARCH,
                searchText: inputText,
                list,
                countOfAll: this.countAll(list)
            });
        } else {
            list = this.props.list;

            this.setState({
                selectedTab: ALL,
                typeOfList: ALL,
                searchText: inputText,
                list,
                countOfAll: this.countAll(list)
            });
        }
    }

    onOuterSearch(inputText) {
        if (inputText.length < 3) {
            this.setState({
                selectedTab: ALL,
                typeOfList: ALL,
                list: [],
                countOfAll: 0
            });
        } else if (inputText) {
            this.props.onSearch(inputText);
        }
    }

    onSelectedList(selectedItems) {
        this.selectedList = selectedItems;

        this.setState({
            selectedList: this.selectedList
        });

        this.props.onChangeData(this.selectedList);
    }

    onClose() {
        this.props.onClose(this.selectedList);
    }

    getArrOfAllItems() {
        const arr = [];
        const getAllItems = items => {
            items.forEach(item => {
                const nested = item.members ? item.members : false;
                if (nested) {
                    getAllItems(nested);
                } else {
                    arr.push(item);
                }
            });
        };

        getAllItems(this.props.list);

        return arr;
    }

    countAll(data) {
        let count = 0;
        const countAllItems = items => {
            items.forEach(item => {
                const nested = item.members ? item.members : false;
                if (nested) {
                    countAllItems(nested);
                } else {
                    count += 1;
                }
            });
        };

        countAllItems(data);

        return count;
    }

    selectAll() {
        this.attributeListChild.triggerSetToAll(true);
    }

    selectNone() {
        this.attributeListChild.triggerSetToAll(false);
    }

    scrollUp() {
        this.popupRef.scrollTop = 0;
    }

    showSelected() {
        this.scrollUp();

        this.setState({
            selectedTab: SELECTED,
            typeOfList: SELECTED,
            list: this.state.selectedList,
            showOptions: false
        });
    }

    showMain() {
        this.scrollUp();

        this.setState({
            selectedTab: ALL,
            typeOfList: this.state.searchText ? SEARCH : ALL,
            list: this.props.isStaticList ? this.props.list : [],
            countOfAll: this.props.isStaticList ? this.countAll(this.props.list) : 0,
            showOptions: true
        });

        // Show filtered list on Main tab.
        if (!this.state.searchText) {
            return;
        }

        if (this.props.isStaticList) {
            this.onInnerSearch(this.state.searchText);
        } else {
            this.onOuterSearch(this.state.searchText);
        }
    }

    render() {
        return (
            <div className="popup-container" ref={ref => { this.containerRef = ref; }}>
                <div className="popup items-list" ref={ref => { this.popupRef = ref; }}>

                    <div
                        className={
                        this.state.showOptions ?
                            'popup__static' :
                            'popup__static popup__static--change-height'
                    }
                    >
                        <div className="popup__header">

                            <TabFilter
                                countAll={this.state.countOfAll}
                                countSelected={this.state.selectedList.length}
                                isStatic={this.props.isStaticList}
                                onMainClick={this.showMain}
                                onSelectedClick={this.showSelected}
                                selectedTab={this.state.selectedTab}
                            />

                            <Icon className="popup__close" onClick={this.onClose} icon="close" />
                        </div>

                        {
                            this.state.showOptions ?
                                <div className="option-container">
                                    <Searcher
                                        isStatic={this.props.isStaticList}
                                        searchText={this.state.searchText}
                                        onChange={this.props.isStaticList ?
                                            this.onInnerSearch : this.onOuterSearch}
                                    />
                                    <Selector
                                        onAllSelect={this.selectAll}
                                        onNoneSelect={this.selectNone}
                                    />
                                </div>
                                : ''
                        }

                    </div>
                    <div
                        className={
                            this.state.showOptions ?
                            'attribute-list' :
                            'attribute-list attribute-list--change-top-padding'
                    }
                    >
                        { this.props.isLoading ?
                            <div className="spinner-container">
                                <Spinner color="azure-radiance" />
                            </div>
                            :
                            <AttributeList
                                ref={ref => {
                                    this.attributeListChild = ref;
                                }}
                                list={this.state.list}
                                onChangeSelectedList={this.onSelectedList}
                                selectedList={this.state.selectedList}
                                typeOfList={this.state.typeOfList}
                                disabledItems={this.props.disabledItems}
                            />
                        }
                    </div>

                </div>
            </div>
        );
    }
}

PopupSelector.propTypes = {
    onClose: PropTypes.func.isRequired,
    isStaticList: PropTypes.bool,
    isLoading: PropTypes.bool,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSearch: PropTypes.func,
    onChangeData: PropTypes.func,
    parentRef: PropTypes.instanceOf(Element),
    updateList: PropTypes.arrayOf(PropTypes.any),
    disabledItems: PropTypes.arrayOf(PropTypes.any)
};

PopupSelector.defaultProps = {
    list: [],
    updateList: [],
    disabledItems: [],
    isLoading: false
};

export default PopupSelector;
