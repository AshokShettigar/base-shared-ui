import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from 'platform-common-ui';

class Searcher extends Component {
    constructor(props) {
        super(props);

        this.classForInput = classNames('search__input');

        this.state = {
            value: this.props.searchText || ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.clearSearchInput = this.clearSearchInput.bind(this);
    }

    componentDidMount() {
        this.inputRef.focus();
    }

    clearSearchInput() {
        this.inputRef.value = '';
        this.setState({ value: '' });
        this.props.onChange('');
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange(this.inputRef.value);
    }

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    className={this.classForInput}
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder={this.props.isStatic ? 'Search...' : 'Start typing...'}
                    ref={ref => { this.inputRef = ref; }}
                />
                {this.state.value ?
                    <Icon className="search__icon search__icon--clear" icon="close" onClick={this.clearSearchInput} />
                    :
                    <Icon className="search__icon" icon="search" />
                }
            </div>
        );
    }
}

Searcher.propTypes = {
    onChange: PropTypes.func,
    isStatic: PropTypes.bool,
    searchText: PropTypes.string
};

export default Searcher;
