import { CheckBox, Input, Table } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

const Cell = Table.Cell;
const CheckBoxColumn = Table.CheckBoxColumn;
const Column = Table.Column;
const Row = Table.Row;
const SelectRowCell = Table.SelectRowCell;

// eslint-disable-next-line no-alert
const onColumnClickHandler = id => alert(`Column: ${id} clicked!`);

export default class TableExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            height: 200,
            isAllSelected: false,
            isShowFooter: true,
            isShowSelectColumn: true,
            numCols: 3,
            numRows: 3,
            selectedRows: {}
        };

        this.onFixHeightCheckBoxChange =
            () => this.setState({ height: this.state.height ? undefined : 200 });
        this.onHeightChange = value => {
            const height = parseInt(value, 10);
            this.setState({ height });
        };
        this.onNumColsChange = numCols => this.setState({ numCols });
        this.onNumRowsChange = numRows => this.setState({
            numRows,
            isAllSelected: false,
            selectedRows: {}
        });
        this.onSelectRow = index => () => {
            const selectedRows = Object.assign({}, this.state.selectedRows);
            selectedRows[index] = !this.state.selectedRows[index];
            this.setState({ selectedRows });
        };
        this.onShowFooterCheckBoxChange = () => {
            this.setState({ isShowFooter: !this.state.isShowFooter });
            setTimeout(() => this.table.adjustHeight(), 0);
        };
        this.onShowSelectColumnChange =
            () => this.setState({ isShowSelectColumn: !this.state.isShowSelectColumn });
        this.toggleSelectAll = () => {
            if (this.state.isAllSelected) {
                this.setState({
                    isAllSelected: false,
                    selectedRows: {}
                });
                return;
            }

            const selectedRows = {};
            for (let i = 0; i < this.state.numRows; i++) {
                selectedRows[i] = true;
            }
            this.setState({
                selectedRows,
                isAllSelected: true
            });
        };
    }

    getOptions() {
        return (
            <div>
                <Input
                    id="heightInput"
                    label="Table Height"
                    onChange={this.onHeightChange}
                    value={this.state.height || ''}
                >
                    <CheckBox
                        id="ckFixHeight"
                        isChecked={!!this.state.height}
                        onChange={this.onFixHeightCheckBoxChange}
                        value="fixHeight"
                    >
                        Fixed height
                    </CheckBox>
                </Input>
                <Input
                    id="numColInput"
                    label="Number of Columns"
                    onChange={this.onNumColsChange}
                    value={this.state.numCols}
                />
                <Input
                    id="numRowInput"
                    label="Number of Rows"
                    onChange={this.onNumRowsChange}
                    value={this.state.numRows}
                />
                <CheckBox
                    id="ckShowFooter"
                    isChecked={this.state.isShowFooter}
                    onChange={this.onShowFooterCheckBoxChange}
                    value="footer"
                >
                    Show Footer
                </CheckBox>
                <CheckBox
                    id="ckShowSelect"
                    isChecked={this.state.isShowSelectColumn}
                    onChange={this.onShowSelectColumnChange}
                    value="footer"
                >
                    Show Select Check Box Column
                </CheckBox>
            </div>
        );
    }

    getColumns() {
        const cols = [];
        if (this.state.isShowSelectColumn) {
            cols.push(
                <CheckBoxColumn
                    isAllSelected={this.state.isAllSelected}
                    key="col_ck"
                    onClick={this.toggleSelectAll}
                />
            );
        }

        for (let i = 0; i < this.state.numCols; i++) {
            cols.push(
                <Column
                    id={`col_${i}`}
                    isSortable
                    key={`col_${i}`}
                    onClick={onColumnClickHandler}
                    sortDirection={Table.SORT_DIRECTION.ASC}
                >
                    {`Header ${i + 1}`}
                </Column>
            );
        }
        return cols;
    }

    getRows() {
        const rows = [];
        for (let i = 0; i < this.state.numRows; i++) {
            const cells = [];
            if (this.state.isShowSelectColumn) {
                cells.push(
                    <SelectRowCell
                        id={`cb_${i}`}
                        isSelected={this.state.selectedRows[i]}
                        key="c_select"
                        onChange={this.onSelectRow(i)}
                    />
                );
            }
            for (let j = 0; j < this.state.numCols; j++) {
                cells.push(
                    <Cell key={`c_${j}`}>
                        {`Data ${j + 1}`}
                    </Cell>
                );
            }
            rows.push(
                <Row
                    isSelected={this.state.selectedRows[i]}
                    key={`r_${i}`}
                >
                    {cells}
                </Row>
            );
        }
        return rows;
    }

    getFooter() {
        if (!this.state.isShowFooter) return false;
        return (<div>Footer</div>);
    }

    renderComponent() {
        return (
            <Table
                columns={this.getColumns()}
                footer={this.getFooter()}
                height={this.state.height}
                ref={c => { this.table = c; }}
            >
                {this.getRows()}
            </Table>
        );
    }
}
