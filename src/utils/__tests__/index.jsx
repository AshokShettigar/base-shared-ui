import { shallow } from 'enzyme';
import { DEFAULT_SPRITE_URL, getSpriteUrl, setSpriteUrl } from 'platform-common-ui/utils';
import { Icon } from 'platform-common-ui';

describe('utils', function() {
    afterEach(function() {
        setSpriteUrl(DEFAULT_SPRITE_URL);
    });

    it('should get the default sprite url', function() {
        expect(getSpriteUrl()).toBe(DEFAULT_SPRITE_URL);

        const wrapper = shallow(<Icon icon="icon1" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should set the custom sprite url', function() {
        setSpriteUrl('someUrl/sprite1.svg');
        const wrapper = shallow(<Icon icon="icon1" />);
        expect(wrapper).toMatchSnapshot();
    });
});
