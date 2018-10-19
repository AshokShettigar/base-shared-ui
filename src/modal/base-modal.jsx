import PropTypes from 'prop-types';
import { Icon, Nav, NavItem, Navbar, NavbarBrand } from 'platform-common-ui';

const BaseModal = props => (
    <div
        className="cn-modal__container"
        style={{ width: props.width, height: props.height }}
    >
        <Navbar className="cn-modal__navbar" color="dark" full>
            <NavbarBrand>{props.title}</NavbarBrand>
            {
                props.onClosePopup &&
                <Nav>
                    <NavItem
                        className="cn-modal__navbar__close"
                        onClick={() => props.onClosePopup(props.id)}
                    >
                        <span className="a11y">Close</span>
                        <Icon className="cn-modal__navbar__icon" icon="close" />
                    </NavItem>
                </Nav>
            }
        </Navbar>
        {props.children}
    </div>
);

BaseModal.displayName = 'BaseModal';

BaseModal.defaultProps = {
    height: '450px',
    width: '600px'
};

BaseModal.propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClosePopup: PropTypes.func,
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
};

export default BaseModal;
