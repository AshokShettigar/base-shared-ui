import Toggle from 'react-toggle';
import * as shared from './shared';

require('../styles/main.scss');

if (process.env.NODE_ENV !== 'test') { // doesn't load svg on run tests
    const requireAll = r => r.keys().forEach(r);
    requireAll(require.context('./shared/icon/svg', false, /\.svg$/)); // help to load all svg
}

export {
    Alert,
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavDropdown,
    NavLink,
    Breadcrumb,
    BreadcrumbItem,
    Button as CnButton,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Badge,
    Card,
    CardLink,
    CardGroup,
    CardDeck,
    CardColumns,
    CardBlock,
    CardFooter,
    CardBody,
    CardHeader,
    CardImg,
    CardImgOverlay,
    CardSubtitle,
    CardText,
    CardTitle,
    Popover,
    PopoverContent,
    PopoverTitle,
    Progress,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    TetherContent,
    Tooltip,
    ListGroup,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input as CnInput,
    InputGroup,
    InputGroupAddon,
    Label,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    TabContent,
    TabPane,
    Jumbotron,
    Collapse,
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading,
    UncontrolledAlert,
    UncontrolledButtonDropdown,
    UncontrolledDropdown,
    UncontrolledNavDropdown,
    UncontrolledTooltip
 } from 'reactstrap';

export { default as agGridDefaultProps } from 'platform-common-ui/ag-grid/ag-grid-default-props';
export { AgGridReact, reactCellRendererFactory, reactFilterFactory } from 'ag-grid-react';
export { default as BottomSheet } from 'platform-common-ui/modal/bottom-sheet';
export { default as BottomSheetForm } from 'platform-common-ui/modal/bottom-sheet-form';
export { default as Button, BUTTON_SIZE, BUTTON_VARIATION } from 'platform-common-ui/button';
export { default as Chart } from 'platform-common-ui/chart';
export { CheckBox } from 'platform-common-ui/checkbox';
export { default as Slider } from 'platform-common-ui/slider';
export { ConnectedDatePicker as DatePicker } from 'platform-common-ui/datepicker';
export { default as DialogModal } from 'platform-common-ui/modal/dialog-modal';
export { default as InlineNotification } from 'platform-common-ui/shared/inline-notification';
export { Field } from 'platform-common-ui/field';
export { default as Icon } from 'platform-common-ui/icon';
export { Input } from 'platform-common-ui/input';
export { Coachmark } from 'platform-common-ui/coachmark';
export { MenuButton } from 'platform-common-ui/menu-button';
export { default as OneTimeRender } from 'platform-common-ui/one-time-render';
export { Radio } from 'platform-common-ui/radio';
export { Select } from 'platform-common-ui/select';
export { Sidebar } from 'platform-common-ui/sidebar';
export { Group as SidebarGroup } from 'platform-common-ui/sidebar/group';
export { Item as SidebarGroupItem } from 'platform-common-ui/sidebar/group-item';
export { default as Spinner } from 'platform-common-ui/spinner';
export { DefaultTab as Tab, HigherOrderTabComponent } from 'platform-common-ui/tab';
export { TabGroup } from 'platform-common-ui/tab-group';
export { Table } from 'platform-common-ui/table';
export { default as CnDropdown } from 'platform-common-ui/dropdowns/cn-dropdown';
export { default as CnDropdownBasic } from 'platform-common-ui/dropdowns/cn-dropdown-basic';
export { default as CnFormSelectAdvanced } from 'platform-common-ui/dropdowns/cn-form-select-advanced';
export { Toggle };
export { Toast, toast } from 'platform-common-ui/shared/toast';
export { Textarea } from 'platform-common-ui/textarea';
export { Utils } from 'platform-common-ui/utils';
export { shared };
export { default as SignalPopupWrapper } from 'platform-common-ui/signal-popup';
