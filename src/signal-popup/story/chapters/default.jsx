import { Container, AgGridReact, agGridDefaultProps, SignalPopupWrapper } from 'platform-common-ui';
import { Component } from 'react';
import { GRID_DATA } from './grid-data';
import CountryCell from './country-cell';
import CountryPopup from './country-popup';

// Default
class Default extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                { headerName: 'Athlete', field: 'athlete', width: 150 },
                { headerName: 'Age', field: 'age', width: 90 },
                {
                    headerName: 'Country',
                    field: 'country',
                    width: 120,
                    cellRendererFramework: SignalPopupWrapper,
                    cellRendererParams: {
                        popupConfig: {
                            Component: CountryPopup
                        },
                        buttonConfig: {
                            Component: CountryCell
                        },
                        parentElm: this.agGridRef
                    }
                },
                { headerName: 'Year', field: 'year', width: 90 },
                { headerName: 'Date', field: 'date', width: 110 },
                { headerName: 'Sport', field: 'sport', width: 110 },
                { headerName: 'Gold', field: 'gold', width: 100 },
                { headerName: 'Silver', field: 'silver', width: 100 },
                { headerName: 'Bronze', field: 'bronze', width: 100 },
                { headerName: 'Total', field: 'total', width: 100 }
            ],
            rowData: GRID_DATA,
            getRowNodeId: data => data.id
        };

        this.setAgGridRef = this.setAgGridRef.bind(this);
    }

    setAgGridRef(ref) {
        this.agGridRef = ref;
    }

    render() {
        const containerStyle = {
            height: 300,
            width: '100%'
        };

        return (
            <Container fluid>
                <h4 className="story-title">Signal Popup</h4>
                <h6 className="icon-description">
                    Below grid shows example of signal popup applied on country cell.</h6>
                <div style={containerStyle} className="ag-rmm" id="myGrid">
                    <AgGridReact
                        {...agGridDefaultProps}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        getRowNodeId={this.state.getRowNodeId}
                        ref={this.setAgGridRef}
                    />
                </div>
            </Container>
        );
    }
}

export default Default;
