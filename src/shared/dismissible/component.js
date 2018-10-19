import { Component, cloneElement } from 'react';
import { node, bool, func, instanceOf } from 'prop-types';

class Dismissible extends Component {
    static propTypes = {
        isEscape: bool,
        target: instanceOf(HTMLElement),
        context: instanceOf(HTMLElement),
        children: node.isRequired,
        onDismiss: func.isRequired
    };

    static defaultProps = {
        target: null,
        context: null,
        isEscape: true
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);

        if (this.props.isEscape) {
            document.addEventListener('keyup', this.handleCloseOnEscape, true);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);

        if (this.props.isEscape) {
            document.removeEventListener('keyup', this.handleCloseOnEscape, true);
        }
    }

    setChildrenNodeRef = el => {
        this.childrenNode = el;
    };

    childrenNode = null;

    handleCloseOnEscape = e => {
        if (parseInt(e.keyCode, 10) === 27) {
            this.props.onDismiss(e);
        }
    };

    handleClickOutside = e => {
        const isClickedOnChildren = this.childrenNode && this.childrenNode.contains(e.target);
        const isClickedOnTarget = this.props.target && this.props.target.contains(e.target);
        const isClickedOnContext = this.props.context && this.props.context.contains(e.target);

        if (isClickedOnChildren || isClickedOnTarget || isClickedOnContext) {
            return false;
        }

        return this.props.onDismiss(e);
    };

    render() {
        return cloneElement(this.props.children, { ref: this.setChildrenNodeRef });
    }
}

export default Dismissible;
