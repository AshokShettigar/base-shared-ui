import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BUTTON_VARIATION } from 'platform-common-ui';
import BottomSheetForm, { Form } from 'platform-common-ui/modal/bottom-sheet-form';

const mockStore = configureStore();
describe('modal/bottom-sheet-form', function() {
    const ContentComponent = () => <div>Content</div>;
    const Component = Form(ContentComponent);

    it('should render the component', function() {
        const handler = () => true;
        const controls = [{
            label: 'Save',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY
        }, {
            label: 'Cancel',
            onClick: handler,
            variation: BUTTON_VARIATION.SECONDARY
        }];

        const wrapper = shallow(<Component formControls={controls} sidebar="Sidebar Content" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component without sidebar', function() {
        const handler = () => true;
        const controls = [{
            label: 'Save',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY
        }, {
            label: 'Cancel',
            onClick: handler,
            variation: BUTTON_VARIATION.SECONDARY
        }];

        const wrapper = shallow(<Component formControls={controls} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with sub control', function() {
        const handler = () => true;
        const controls = [{
            label: 'Save',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY
        }, {
            label: 'Cancel',
            onClick: handler,
            variation: BUTTON_VARIATION.SECONDARY
        }];

        const wrapper = shallow(
            <Component
                formControls={controls}
                subControl="Some control"
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the HOC component', function() {
        const handler = () => true;
        const controls = [{
            label: 'Save',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY
        }, {
            label: 'Cancel',
            onClick: handler,
            variation: BUTTON_VARIATION.SECONDARY
        }];
        const BottomSheet = BottomSheetForm(ContentComponent);
        const onClosePopup = () => true;
        const wrapper = mount(
            <Provider store={mockStore()}>
                <BottomSheet
                    formControls={controls}
                    id="defaultBottomSheet"
                    onClosePopup={onClosePopup}
                />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
