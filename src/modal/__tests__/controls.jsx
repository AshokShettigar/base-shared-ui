import { shallow } from 'enzyme';
import { BUTTON_VARIATION } from 'platform-common-ui';
import Footer from 'platform-common-ui/modal/controls';

describe('modal/controls', function () {
    it('should render without controls', function () {
        const wrapper = shallow(<Footer />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render the controls', function () {
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
        const wrapper = shallow(<Footer controls={controls} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render the controls with state loading', function () {
        const handler = () => true;
        const controls = [{
            label: 'Save',
            onClick: handler,
            variation: BUTTON_VARIATION.PRIMARY,
            isLoading: true
        }, {
            label: 'Cancel',
            onClick: handler,
            variation: BUTTON_VARIATION.SECONDARY
        }];
        const wrapper = shallow(<Footer controls={controls} />);

        expect(wrapper).toMatchSnapshot();
    });
});
