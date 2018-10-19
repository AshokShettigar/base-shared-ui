import { shallow } from 'enzyme';
import CalendarWeekHeader from 'platform-common-ui/datepicker/calendar-week-header';

describe('datepicker/calendar-week-header', function() {
    it('should render the component', function() {
        const wrapper = shallow(<CalendarWeekHeader />);
        expect(wrapper).toMatchSnapshot();
    });
});
