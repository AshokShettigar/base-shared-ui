import BaseComponentView from 'app/components/base-component-view';
import { connect } from 'react-redux';
import { closePopup, openPopup } from 'react-redux-popup';
import { BUTTON_VARIATION, Button, DialogModal } from 'platform-common-ui';

class AlertModalExample extends BaseComponentView {
    constructor(props) {
        super(props);

        this.formControls = [{
            label: 'Save',
            onClick: () => props.closePopup('alert'),
            variation: BUTTON_VARIATION.PRIMARY
        }, {
            label: 'Cancel',
            onClick: () => props.closePopup('alert'),
            variation: BUTTON_VARIATION.SECONDARY
        }];
    }

    getOptions() {
        return (
            <Button onClick={() => this.props.openPopup('alert')}>
                Alert
            </Button>
        );
    }

    renderComponent() {
        return (
            <DialogModal
                formControls={this.formControls}
                id="alert"
                title="Alert"
                onClosePopup={() => this.props.closePopup('alert')}
            >
                Alert description
            </DialogModal>
        );
    }
}

export default connect(null, { closePopup, openPopup })(AlertModalExample);
