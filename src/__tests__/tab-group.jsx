import { shallow } from 'enzyme';
import { DefaultTab as Tab } from 'platform-common-ui/tab';
import { TabGroup } from 'platform-common-ui/tab-group';

describe('tab-group', function() {
    const tabs = [
        <Tab href="#" label="tab1" />,
        <Tab href="#" label="tab2" />
    ];

    it('should render the tab group', function() {
        const tree = shallow(
            <TabGroup tabs={tabs} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the tab group with class name', function() {
        const tree = shallow(
            <TabGroup className="my-class" tabs={tabs} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the tab group with content', function() {
        const tree = shallow(
            <TabGroup tabs={tabs}>
                Some content
            </TabGroup>
        );
        expect(tree).toMatchSnapshot();
    });
});
