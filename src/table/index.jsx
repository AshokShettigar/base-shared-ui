import { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from 'platform-common-ui/table/cell';
import CheckBoxColumn from 'platform-common-ui/table/checkbox-column';
import Column, { SORT_DIRECTION } from 'platform-common-ui/table/column';
import Header from 'platform-common-ui/table/header';
import Row from 'platform-common-ui/table/row';
import SelectRowCell from 'platform-common-ui/table/select-row-cell';

const BOTTOM_MARGIN = 20;

// eslint-disable-next-line import/prefer-default-export
export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 300,
            left: 0,
            top: -36,
            columnWidths: []
        };

        this.resizeHandler = () =>
            window.requestAnimationFrame(() => {
                this.adjustHeight(this.props.height);
                this.adjustColumnWidths();
            });
        this.syncScrollHandler = () => window.requestAnimationFrame(() => this.syncScroll());
    }

    componentDidMount() {
        // make sure that the immediate instructions finish first to draw the component
        // on screen before calling to initailize
        window.setTimeout(() => this.initialize(), 0);
        window.addEventListener('resize', this.resizeHandler);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.height !== nextProps.height) {
            this.adjustHeight(nextProps.height);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState === this.state
            && (this.props.columns !== prevProps.columns
            || this.props.children !== prevProps.children)) {
            // if the component was updated via properties and columns are different,
            // then adjust the column widths
            this.adjustColumnWidths();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    adjustHeight(height) {
        if (height) {
            this.setState({ height: this.props.height });
        }

        const footerHeight = this.footer ? this.footer.getBoundingClientRect().height : 0;
        const newHeight = window.document.body.clientHeight
            - this.tableBody.getBoundingClientRect().top
            - footerHeight
            - BOTTOM_MARGIN;
        this.setState({ height: newHeight });
    }

    adjustColumnWidths() {
        const columnWidths = [];
        // can't use map function on children array
        for (let i = 0; i < this.hiddenHeaders.children.length; i++) {
            columnWidths.push(this.hiddenHeaders.children[i].clientWidth);
        }
        this.setState({ columnWidths });
    }

    initialize() {
        this.initializeTableBodyTop();
        this.adjustHeight(this.props.height);
        this.adjustColumnWidths();
    }

    initializeTableBodyTop() {
        const top = 1 - this.hiddenHeaders.getBoundingClientRect().height;
        this.setState({ top });
    }

    syncScroll() {
        if (this.props.onScroll) {
            this.props.onScroll();
        }
        this.setState({ left: -this.tableBody.scrollLeft });
    }

    renderFooter() {
        return (
            <div className="cn-table__footer" ref={footer => { this.footer = footer; }}>
                {this.props.footer}
            </div>
        );
    }

    render() {
        const tableBodyStyle = {
            height: this.state.height
        };

        return (
            <div className="cn-table">
                <Header
                    columns={this.props.columns}
                    scrollLeft={this.state.left}
                    widths={this.state.columnWidths}
                />
                <div
                    className="cn-table__body"
                    onScroll={this.syncScrollHandler}
                    ref={tableBody => { this.tableBody = tableBody; }}
                    style={tableBodyStyle}
                >
                    <div
                        className="cn-table__body__container"
                    >
                        <table
                            className="cn-table__rows"
                            style={{ top: this.state.top }}
                        >
                            <thead className="cn-table__header">
                                <tr ref={headers => { this.hiddenHeaders = headers; }}>
                                    {this.props.columns}
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.props.footer && this.renderFooter()}
            </div>
        );
    }
}

Table.propTypes = {
    children: PropTypes.node.isRequired,
    footer: PropTypes.node,
    columns: PropTypes.node.isRequired,
    height: PropTypes.number,
    onScroll: PropTypes.func
};

Table.SORT_DIRECTION = SORT_DIRECTION;
Table.Cell = Cell;
Table.CheckBoxColumn = CheckBoxColumn;
Table.Column = Column;
Table.Row = Row;
Table.SelectRowCell = SelectRowCell;
