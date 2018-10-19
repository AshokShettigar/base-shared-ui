import React from 'react';
import { Portal } from 'react-redux-popup';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';

import InlineNotificationExample from 'app/inline-notification';
import BottomSheetExample from 'app/bottom-sheet';
import ButtonExample from 'app/button';
import ChartExample from 'app/chart';
import CheckBoxExample from 'app/checkbox';
import CoachmarkExample from 'app/coachmark';
import DatePickerExample from 'app/datepicker';
import DialogModalExample from 'app/dialog-modal';
import InputExample from 'app/input';
import SpinnerExample from 'app/spinner';
import MenuButtonExample from 'app/menubutton';
import NavbarExample from 'app/navbar';
import OneTimeRenderExample from 'app/one-time-render';
import RadioExample from 'app/radio';
import SelectExample from 'app/select';
import SidebarExample from 'app/sidebar';
import SidebarGroupExample from 'app/sidebar-group';
import SliderExample from 'app/slider';
import TabGroupExample from 'app/tabgroup';
import TableExample from 'app/table';
import TextareaExample from 'app/textarea';
import ToggleExample from 'app/toggle';
import CnDropdownBasicExample from 'app/dropdowns/cn-dropdown-basic';
import CnFormSelectAdvancedExample from 'app/dropdowns/cn-form-select-advanced';
import AgGridExample from 'app/ag-grid';
import ToastExample from 'app/toast';
import ModalExample from 'app/shared/modal';
import ProgressTrackerExample from 'app/shared/progress-tracker';
import SharedSidebarExample from 'app/shared/sidebar';
import WidgetExample from 'app/shared/widget';
import BreadcrumbsExample from 'app/shared/breadcrumbs';
import ListExample from 'app/shared/list';
import VerticalNavExample from 'app/shared/vertical-nav';

const App = () => (
    <Router>
        <div className="app">
            <div className="app-menu">
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/ag-grid">AgGridReact</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/bottom-sheet">Bottom Sheet</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/button">Buttons</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/chart">Chart</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/checkbox">Checkbox</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/coachmark">Coachmark</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/datepicker">Date Picker</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/dialog-modal">Dialog Modal</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/inline-notification">Inline Notification</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/input">Inputs</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/menubutton">Menu Button</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/navbar">Nav Bar</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/one-time-render">One time Render</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/radio">Radio</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/select">Select</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/slider">Slider</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/sidebar">Sidebar</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/sidebar-group">Sidebar Group</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/modal">Modal</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/progress-tracker">Progress Tracker</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/shared-sidebar">Shared Sidebar</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/spinner">Spinner</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/tabgroup">Tab Group</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/table">Table</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/textarea">Textarea</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/toggle">Toggle</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/cn-dropdown-basic">Dropdown Basic</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/cn-form-select-advanced">Form Select Advanced</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/toast">Toast</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/widget">Widget</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/breadcrumbs">Breadcrumbs</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/list">List</NavLink>
                <NavLink className="app-menu__item" activeClassName="app-menu__item--active" to="/vertical-nav">Vertical Nav</NavLink>
            </div>
            <div className="app-content">
                <Route exact path="/" component={AgGridExample} />
                <Route exact path="/ag-grid" component={AgGridExample} />
                <Route exact path="/bottom-sheet" component={BottomSheetExample} />
                <Route exact path="/button" component={ButtonExample} />
                <Route exact path="/chart" component={ChartExample} />
                <Route exact path="/checkbox" component={CheckBoxExample} />
                <Route exact path="/coachmark" component={CoachmarkExample} />
                <Route exact path="/datepicker" component={DatePickerExample} />
                <Route exact path="/dialog-modal" component={DialogModalExample} />
                <Route exact path="/inline-notification" component={InlineNotificationExample} />
                <Route exact path="/input" component={InputExample} />
                <Route exact path="/menubutton" component={MenuButtonExample} />
                <Route exact path="/navbar" component={NavbarExample} />
                <Route exact path="/one-time-render" component={OneTimeRenderExample} />
                <Route exact path="/radio" component={RadioExample} />
                <Route exact path="/select" component={SelectExample} />
                <Route exact path="/sidebar" component={SidebarExample} />
                <Route exact path="/sidebar-group" component={SidebarGroupExample} />
                <Route exact path="/modal" component={ModalExample} />
                <Route exact path="/progress-tracker" component={ProgressTrackerExample} />
                <Route exact path="/shared-sidebar" component={SharedSidebarExample} />
                <Route exact path="/slider" component={SliderExample} />
                <Route exact path="/spinner" component={SpinnerExample} />
                <Route exact path="/tabgroup" component={TabGroupExample} />
                <Route exact path="/table" component={TableExample} />
                <Route exact path="/textarea" component={TextareaExample} />
                <Route exact path="/toggle" component={ToggleExample} />
                <Route exact path="/cn-dropdown-basic" component={CnDropdownBasicExample} />
                <Route exact path="/cn-form-select-advanced" component={CnFormSelectAdvancedExample} />
                <Route exact path="/toast" component={ToastExample} />
                <Route exact path="/widget" component={WidgetExample} />
                <Route exact path="/breadcrumbs" component={BreadcrumbsExample} />
                <Route exact path="/list" component={ListExample} />
                <Route exact path="/vertical-nav" component={VerticalNavExample} />
            </div>
            <Portal
                modalTransitionEnterTimeout={300}
                modalTransitionLeaveTimeout={300}
                popupTransitionEnterTimeout={100}
                popupTransitionLeaveTimeout={100}
            />
        </div>
    </Router>
);

export default App;
