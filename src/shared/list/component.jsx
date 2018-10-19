import { Component } from 'react';
import { Badge } from 'platform-common-ui';
import { string, bool, object, func, arrayOf } from 'prop-types';
import classNames from 'classnames';
import { isEmpty, isEqual } from 'lodash';
import uuid4 from 'uuid';

import { Icon } from '../../shared';
import { SubList } from './sub-list';
import styles from './component.scss';

class List extends Component {
    state = {
        list: []
    };

    componentWillMount() {
        this.setListWithId(this.props.list);
    }

    componentWillReceiveProps({ list }) {
        if (!isEqual(list, this.props.list)) {
            this.setListWithId(list);
        }
    }

    setListWithId = list => {
        this.setState({
            list: this.getListWithId(list)
        }, () => {
            if (this.props.onListReady) {
                this.props.onListReady();
            }
        });
    };

    getListWithId = list => list.map(item => {
        if (!item.id) {
            return { ...item, id: uuid4() };
        }

        return item;
    });

    render() {
        const itemHasSubList = item => this.props.subList && this.props.subList(item);
        return (
            <div className={classNames(styles.root, this.props.className)} data-id="list">
                {this.props.title && <span className={styles.title}>{this.props.title}</span>}
                {!isEmpty(this.state.list)
                && <ul className={classNames(styles.list, this.props.listClassName)}>
                    {this.state.list.map(item => (
                        <li
                            id={item.id}
                            key={item.id}
                            data-id={item.type === 'delimiter' ? 'delimiter' : 'item'}
                            tabIndex="0"
                            className={classNames({
                                [styles.disabledItem]: item.disabled,
                                [styles.enabledItem]: !item.disabled,
                                [styles.active]: this.state.selected === item.id,
                                [styles.delimiter]: item.type === 'delimiter'
                            })}
                            onKeyDown={this.props.onKeyDown}
                            onClick={!item.disabled && !itemHasSubList(item) && (e => this.props.onSelect(item, e))}
                            onMouseEnter={this.props.onMouseEnter && (e => this.props.onMouseEnter(item, e))}
                            onMouseLeave={this.props.onMouseLeave && (e => this.props.onMouseLeave(item, e))}
                            role="presentation"
                        >
                            {
                                item.icon
                                && <Icon
                                    className={styles.bullet}
                                    glyph={item.icon}
                                    glyphClassName={styles.iconGlyph}
                                />
                            }
                            <span className={styles.nameContainer}>
                                <span
                                    className={classNames({ [styles.itemName]: item.label })}
                                    title={item.name}
                                >
                                    {item.component || item.name}
                                </span>
                                {
                                    this.props.showCount
                                    && this.props.subList
                                    && this.props.subList(item)
                                    && ` (${this.props.subList(item).length})`
                                }
                            </span>
                            {
                                item.label
                                && <Badge className={classNames('secondary', styles.itemLabel)}>{item.label}</Badge>
                            }
                            {
                                itemHasSubList(item)
                                && <Icon
                                    className={styles.icon}
                                    glyphClassName={styles.iconGlyph}
                                    glyph="carat-right"
                                    size="tiny"
                                />
                            }
                            {
                                !item.disabled && itemHasSubList(item)
                                && <SubList
                                    list={this.props.subList(item)}
                                    className={this.props.subListClassName}
                                    position={this.props.subListPosition}
                                    title={this.props.showSublistTitle ? item.name : undefined}
                                    onSelect={this.props.onSelect}
                                />
                            }
                        </li>
                    ))}
                </ul>}
            </div>
        );
    }
}

List.propTypes = {
    showSublistTitle: bool,
    showCount: bool,
    isSubList: bool,

    title: string,
    label: string,
    list: arrayOf(object).isRequired,
    subList: func,
    className: string,
    subListPosition: string,
    listClassName: string,
    subListClassName: string,
    onKeyDown: func,
    onSelect: func.isRequired,
    onMouseEnter: func,
    onMouseLeave: func,
    onListReady: func
};

List.defaultProps = {
    title: null,
    isCountShown: true,
    showSublistTitle: true,
    subList: undefined,
    className: undefined,
    listClassName: undefined,
    onKeyDown: undefined,
    onListReady: undefined
};

export default List;
