import { Component } from 'react';
import { string } from 'prop-types';

class CountryPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 1
        };
    }

    render() {
        return (
            <div className="country-popup">
                <h6>{this.props.value}</h6>
                <div>
                    Lorem ipsum dolor sit amet, mundi dolore gubergren nam te,
                    dicta doctus in eos, id vel exerci delicata.
                </div>
            </div>
        );
    }
}

CountryPopup.propTypes = {
    value: string
};

export default CountryPopup;
