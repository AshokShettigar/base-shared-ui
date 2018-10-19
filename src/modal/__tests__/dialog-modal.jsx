import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BUTTON_VARIATION } from 'platform-common-ui';
import DialogModal, { Dialog } from 'platform-common-ui/modal/dialog-modal';

describe('modal/dialog-modal', function() {
    const mockStore = configureStore();

    it('should render the component', function() {
        const handler = () => true;
        const controls = [{
            label: 'OK',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY
        }];

        const wrapper = shallow(
            <Dialog
                formControls={controls}
                id="alert1"
            >
                Alert description
            </Dialog>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with title', function() {
        const handler = () => true;
        const controls = [{
            label: 'OK',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY
        }];

        const wrapper = shallow(
            <Dialog
                formControls={controls}
                id="alert1"
                title="Alert title"
            >
                Alert description
            </Dialog>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with height and width', function() {
        const handler = () => true;
        const controls = [{
            label: 'OK',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY
        }];

        const wrapper = shallow(
            <Dialog
                formControls={controls}
                height="100px"
                id="alert1"
                width="100px"
            >
                Alert description
            </Dialog>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component', function() {
        const handler = () => true;
        const controls = [{
            label: 'OK',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY
        }];

        const wrapper = mount(
            <Provider store={mockStore()}>
                <DialogModal
                    formControls={controls}
                    id="alert1"
                    title="Alert title"
                >
                    Alert description
                </DialogModal>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
