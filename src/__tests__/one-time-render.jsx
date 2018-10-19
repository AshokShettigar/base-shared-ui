import { shallow } from 'enzyme';
import OneTimeRender from 'platform-common-ui/one-time-render';

describe('components/one-time-render-wrapper', function() {
    const localStorageMock = (() => {
        let store = {};

        return {
            getItem (key) {
                return store[key] || null;
            },
            setItem (key, value) {
                store[key] = value.toString();
            },
            clear () {
                store = {};
            }
        };
    })();
    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock
    });
    it('should not render the component', function() {
        const wrapper = shallow(<OneTimeRender keyToCheck="key-To-Check" />);
        expect(wrapper).toMatchSnapshot();
    });
});
