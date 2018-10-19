import { shallow } from 'enzyme';

import Spinner from '../component';

describe('Spinner component', () => {
    it('should render component with default props', () => {
        const wrapper = shallow(<Spinner />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with class names props', () => {
        const wrapper = shallow(<Spinner className="className" spinnerClassName="spinnerClassName" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with centered prop', () => {
        const wrapper = shallow(<Spinner centered />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with color prop', () => {
        const wrapper = shallow(<Spinner color="azure" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with size prop', () => {
        const wrapper = shallow(<Spinner size="small" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with required prop', () => {
        const wrapper = shallow(<Spinner required />);

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<Spinner rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render hidden component', () => {
        const wrapper = shallow(<Spinner hidden />);

        expect(wrapper).toMatchSnapshot();
    });
});
