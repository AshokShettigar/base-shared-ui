import { Component } from 'react';
import PropTypes from 'prop-types';

import { isEmpty, remove, find, sortBy, omit } from 'lodash';

import AttributeListItem from './attribute-list-item.jsx';

const ALL = 'ALL';
const SEARCH = 'SEARCH';
const SELECTED = 'SELECTED';

class AttributeList extends Component {
    constructor(props) {
        super(props);

        this.selectedItemsForSend = [];
        this.selectedItemsReceived = [];

        this.state = {
            data: []
        };

        [
            'renderAll',
            'renderList',
            'onClickedItemOfAll',
            'onClickedItemOfList',
            'initAll',
            'initSearch',
            'isItemDisabled'
        ].forEach(func => {
            this[func] = this[func].bind(this);
        });
    }

    componentWillMount() {
        this.init(this.props.list, this.props.selectedList, this.props.typeOfList);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.typeOfList !== nextProps.typeOfList) {
            this.init(nextProps.list, nextProps.selectedList, nextProps.typeOfList);
        } else if (this.props.typeOfList === SEARCH) {
            this.init(nextProps.list, nextProps.selectedList, nextProps.typeOfList);
        }
    }

    onClickedItemOfAll(item, prevVal, ancestorNames) {
        const itemsOfAllBranch = this.findItemsOfSelectedBranch(item, ancestorNames);

        this.setCheckDown(itemsOfAllBranch[itemsOfAllBranch.length - 1], prevVal);
        this.setCheckUp(itemsOfAllBranch);

        this.setState({
            data: this.copyStateData()
        });

        this.onSelected();
    }

    onClickedItemOfList(item, prevVal) {
        const tempStateData = this.copyStateData();

        const len = tempStateData.length;
        for (let i = 0; i < len; i++) {
            if (tempStateData[i].id === item.id) {
                tempStateData[i].isChecked = !prevVal;
                break;
            }
        }

        this.toSelected(item, !prevVal);

        this.setState({
            data: tempStateData
        });

        this.onSelected();
    }

    onSelected() {
        this.props.onChangeSelectedList(this.copyData(this.selectedItemsForSend));
    }

    setCheckDown(selected, prevVal) {
        const selectedItem = selected;
        selectedItem.isChecked = !prevVal;

        const nested = this.nextMembers(selectedItem);

        if (nested) {
            nested.forEach(item => {
                this.setCheckDown(item, prevVal);
            });
        } else {
            this.toSelected(selectedItem, !prevVal);
        }
    }

    setCheckUp(itemsOfAll) {
        const itemsOfAllBranch = itemsOfAll;

        const checkIsAllSibSelected = arr => {
            const result = arr.find(el => el.isChecked === false);
            return !result;
        };

        for (let i = itemsOfAllBranch.length - 2; i >= 0; i--) {
            itemsOfAllBranch[i].isChecked = !!checkIsAllSibSelected(itemsOfAllBranch[i].members);
        }
    }

    getIdOrName(item) {
        return {
            key: item.id ? 'id' : 'name',
            val: item.id ? item.id : item.name
        };
    }

    getItemWithId(item) {
        return {
            ...omit(item, ['isChecked', 'isDisabled']),
            id: item.id ? item.id : item.name
        };
    }

    isItemDisabled(item) {
        return Boolean(
            this.props.disabledItems.filter(disabledItem => disabledItem.id === item.id).length
        );
    }

    copyData(data) {
        return JSON.parse(JSON.stringify(data));
    }

    copyStateData() {
        return JSON.parse(JSON.stringify(this.state.data));
    }

    findItemsOfSelectedBranch(item, ancestorNames) {
        let next = this.state.data;
        const itemsOfBranch = [];
        const attrOfItem = this.getIdOrName(item);

        ancestorNames.forEach(name => {
            const anc = next.find(a => a.name === name);
            itemsOfBranch.push(anc);
            next = anc.members;
        });

        const selected = next.find(members => members[attrOfItem.key] === attrOfItem.val);
        itemsOfBranch.push(selected);

        return itemsOfBranch;
    }

    toSelected(item, isChecked) {
        const selectedData = this.getItemWithId(item);

        if (!isChecked) {
            remove(this.selectedItemsForSend, el => (el.id === selectedData.id));
        } else if (!find(this.selectedItemsForSend, el => (el.id === selectedData.id))) {
            this.selectedItemsForSend.push(selectedData);
            this.selectedItemsForSend = sortBy(
                this.selectedItemsForSend,
                el => el.name.toLowerCase()
            );
        }
    }

    nextMembers(obj) {
        if (!isEmpty(obj.members)) {
            return obj.members;
        }

        return undefined;
    }

    initSearch(data) {
        return data.map(item => ({
            ...item,
            isChecked: !!find(this.selectedItemsReceived, ['id', this.getItemWithId(item).id]),
            isDisabled: this.isItemDisabled(item)
        }));
    }

    initSelected(data) {
        return data.map(item => ({ ...item, isChecked: true }));
    }

    initAll(data) {
        const initializedData = [...data];

        const addData = items => {
            items.forEach(i => {
                const item = i;
                item.isChecked = !!find(this.selectedItemsReceived, ['id', this.getItemWithId(item).id]);
                item.isDisabled = this.isItemDisabled(item);

                const nested = this.nextMembers(item);

                if (nested) {
                    addData(nested);
                }
            });
        };

        addData(initializedData);

        return initializedData;
    }

    init(list, selectedList, typeOfList) {
        const data = JSON.parse(JSON.stringify(list));

        const initSwitcher = {
            [ALL]: this.initAll,
            [SELECTED]: this.initSelected,
            [SEARCH]: this.initSearch
        };

        this.selectedItemsReceived = selectedList;
        this.selectedItemsForSend = this.copyData(selectedList);

        this.setState({
            data: initSwitcher[typeOfList](data)
        });
    }

    triggerSetToAll(trigger) {
        const newStateData = this.copyStateData();
        newStateData.forEach(item => {
            if (!item.isDisabled) {
                this.setCheckDown(item, !trigger);
            }
        });

        this.setState({
            data: newStateData
        });

        this.onSelected();
    }

    renderAll() {
        if (!this.state.data.length) {
            return (
                <ul className="attribute-list__list">
                    <div className="attribute-list__empty">
                        Start typing to search field for searching...
                    </div>
                </ul>
            );
        }

        const renderNodes = (arr, ancestors = []) => {
            const list = arr.map(item => {
                const nested = this.nextMembers(item);

                if (nested) {
                    const anc = ancestors.slice();
                    anc.push(item.name);

                    const el = renderNodes(nested, anc);
                    return (
                        <AttributeListItem
                            ancestors={ancestors}
                            isChecked={item.isChecked}
                            item={item}
                            key={this.getItemWithId(item).id}
                            onClick={this.onClickedItemOfAll}
                            isDisabled={this.isItemDisabled(item)}
                        >
                            { el }
                        </AttributeListItem>
                    );
                }

                return (
                    <AttributeListItem
                        ancestors={ancestors}
                        isChecked={item.isChecked}
                        item={item}
                        key={this.getItemWithId(item).id}
                        onClick={this.onClickedItemOfAll}
                        isDisabled={this.isItemDisabled(item)}
                    />
                );
            });

            return <ul className="attribute-list__list">{list}</ul>;
        };

        return renderNodes(this.state.data);
    }

    renderList() {
        const list = this.state.data.map(item => (
            <AttributeListItem
                isChecked={item.isChecked}
                item={item}
                key={this.getItemWithId(item).id}
                onClick={this.onClickedItemOfList}
                isDisabled={this.isItemDisabled(item)}
            />
        ));

        const empty = (
            <div className="attribute-list__empty">
                {
                    this.props.typeOfList === SEARCH ? 'Nothing found.' : 'Nothing selected yet.'
                }
            </div>
        );

        return <ul className="attribute-list__list">{list.length ? list : empty}</ul>;
    }

    render() {
        const renderSwitcher = {
            [ALL]: this.renderAll,
            [SELECTED]: this.renderList,
            [SEARCH]: this.renderList
        };
        const type = this.props.typeOfList;

        return renderSwitcher[type]();
    }

}

AttributeList.propTypes = {
    typeOfList: PropTypes.oneOf(['ALL', 'SELECTED', 'SEARCH']).isRequired,
    list: PropTypes.arrayOf(PropTypes.any).isRequired,
    onChangeSelectedList: PropTypes.func.isRequired,
    selectedList: PropTypes.arrayOf(PropTypes.any),
    disabledItems: PropTypes.arrayOf(PropTypes.any)
};

AttributeList.defaultProps = {
    selectedList: [],
    disabledItems: []
};

export default AttributeList;
