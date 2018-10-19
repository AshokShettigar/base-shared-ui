import BaseComponentView from 'app/components/base-component-view';
import { connect } from 'react-redux';
import { closePopup, openPopup } from 'react-redux-popup';
import { BUTTON_VARIATION, Button, BottomSheet, BottomSheetForm, Toggle } from 'platform-common-ui';

const ExampleBottomSheet = BottomSheet(
    () => <div className="bottom-sheet-example-content">Example content for a BottomSheet component.</div>
);

const ExampleForm = BottomSheetForm(
    () => <div className="bottom-sheet-example-content">Example form content for a BottomSheet component.</div>
);

class BottomSheetExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.formControls = [{
            label: 'Save',
            onClick: () => props.closePopup('exampleBottomSheetForm'),
            variation: BUTTON_VARIATION.PRIMARY,
            isLoading: true
        }, {
            label: 'Cancel',
            onClick: () => props.closePopup('exampleBottomSheetForm'),
            variation: BUTTON_VARIATION.SECONDARY
        }];

        this.formOptionControls = [{
            label: 'Close',
            onClick: () => props.closePopup('exampleBottomSheetFormWithSubControl'),
            variation: BUTTON_VARIATION.SECONDARY
        }];

        this.formSidebar = (
            <div>
                Sidebar information with long descriptive information about what the form is about.
            </div>
        );

        this.subControl = <Toggle icons={false} />;
    }

    getOptions() {
        return (
            <div>
                <Button onClick={() => this.props.openPopup('exampleBottomSheet')}>
                    Open Bottom Sheet
                </Button>
                <Button onClick={() => this.props.openPopup('exampleBottomSheetForm')}>
                    Open Bottom Sheet Form
                </Button>
                <Button onClick={() => this.props.openPopup('exampleBottomSheetFormWithSubControl')}>
                    Open Bottom Sheet Form With Sub Control
                </Button>
            </div>
        );
    }

    renderComponent() {
        return (
            <div>
                <ExampleBottomSheet
                    id="exampleBottomSheet"
                    onClosePopup={this.props.closePopup}
                    title="Bottom Sheet Title"
                />
                <ExampleForm
                    formControls={this.formControls}
                    id="exampleBottomSheetForm"
                    sidebar={this.formSidebar}
                    onClosePopup={this.props.closePopup}
                    title="Form 1"
                />
                <ExampleForm
                    formControls={this.formOptionControls}
                    subControl={this.subControl}
                    id="exampleBottomSheetFormWithSubControl"
                    sidebar={this.formSidebar}
                    onClosePopup={this.props.closePopup}
                    option={this.formOption}
                    title="Form 1"
                />
            </div>
        );
    }
}

export default connect(null, { closePopup, openPopup })(BottomSheetExample);
