import PropTypes from 'prop-types';

const Sidebar = props => <div className="cn-modal-sidebar">{props.children}</div>;

Sidebar.displayName = 'ModalSidebar';

Sidebar.propTypes = {
    children: PropTypes.node.isRequired
};

export default Sidebar;
