import {
    AgGridReact,
    agGridDefaultProps
} from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class AgGridExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        };
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        const cols = [];
        for (let i = 0; i < 4; i++) {
            cols.push({ headerName: `Header ${i + 1}`, field: `field_${i + 1}` });
        }
        return cols;
    }

    createRowData() {
        const rows = [];
        for (let i = 0; i < 100; i++) {
            rows.push({
                field_1: `Data ${i + 1}`,
                field_2: `Data ${i + 1}`,
                field_3: `Data ${i + 1}`,
                field_4: `Data ${i + 1}`
            });
        }
        return rows;
    }

    getOptions() {
        return (
            <div />
        );
    }

    renderComponent() {
        const containerStyle = {
            height: 300,
            width: '100%'
        };

        return (
            <div style={containerStyle} className="ag-rmm">
                <AgGridReact
                    {...agGridDefaultProps}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    enableSorting
                    onGridReady={this.onGridReady}
                />
            </div>
        );
    }
}
