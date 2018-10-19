import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledNavDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class NavbarExample extends BaseComponentView {
    getOptions() {
        return null;
    }
    renderComponent() {
        return (
            <Navbar inverse>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="ml-auto">
                    <NavItem>
                        <NavLink href="/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                    </NavItem>
                    <UncontrolledNavDropdown>
                        <DropdownToggle caret>Options</DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledNavDropdown>
                </Nav>
            </Navbar>
        );
    }
}
