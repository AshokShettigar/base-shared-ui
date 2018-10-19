import { Component } from 'react';
import { bool, string, func, node } from 'prop-types';
import StaticSideBar from './component';

class StaticSidebarContainer extends Component {
    state = { isExpand: this.props.isExpand };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isExpand !== this.state.isExpand) {
            if (nextProps.isExpand) {
                this.handleExpand();
            } else {
                this.handleCollapse();
            }
        }
    }

    handleCollapse = () => {
        this.setState({ isExpand: false });
        if (this.props.onCollapse) {
            this.props.onCollapse();
        }
    };

    handleExpand = () => {
        this.setState({ isExpand: true });
        if (this.props.onExpand) {
            this.props.onExpand();
        }
    };

    render() {
        return (
            <StaticSideBar
                isExpand={this.state.isExpand}
                title={this.props.title}

                classNames={this.props.classNames}
                backIconClassNames={this.props.backIconClassNames}
                headerClassNames={this.props.headerClassNames}
                titleClassNames={this.props.titleClassNames}
                closeIconClassNames={this.props.closeIconClassNames}
                contentClassNames={this.props.contentClassNames}

                onCollapse={this.handleCollapse}
                onExpand={this.handleExpand}
                onBack={this.props.onBack}
            >
                {this.props.children}
            </StaticSideBar>
        );
    }
}

StaticSidebarContainer.propTypes = {
    isExpand: bool,

    title: node,
    classNames: string,
    backIconClassNames: string,
    headerClassNames: string,
    titleClassNames: string,
    closeIconClassNames: string,
    contentClassNames: string,

    onBack: func,
    onCollapse: func,
    onExpand: func,

    children: node
};

StaticSidebarContainer.defaultProps = {
    isExpand: false,

    title: undefined,
    classNames: undefined,
    backIconClassNames: undefined,
    headerClassNames: undefined,
    titleClassNames: undefined,
    closeIconClassNames: undefined,
    contentClassNames: undefined,

    onBack: undefined,
    onCollapse: undefined,
    onExpand: undefined,

    children: undefined
};

export default StaticSidebarContainer;
