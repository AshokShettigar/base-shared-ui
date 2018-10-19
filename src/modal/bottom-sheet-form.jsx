import PropTypes from 'prop-types';
import BottomSheet from 'platform-common-ui/modal/bottom-sheet';
import ModalControls, { modalControlsPropType } from 'platform-common-ui/modal/controls';
import Sidebar from 'platform-common-ui/modal/sidebar';

export const Form = ComposedComponent => {
    const FormComponent = props => (
        <div className="cn-bottom-sheet-form">
            <div className="cn-bottom-sheet-form__body">
                <div className="cn-modal__content">
                    <ComposedComponent {...props} />
                </div>
                {props.sidebar && <Sidebar>{props.sidebar}</Sidebar>}
            </div>
            {props.subControl &&
                <div className="cn-modal-sub-controls">
                    {props.subControl}
                </div>
            }
            <ModalControls controls={props.formControls} />
        </div>
    );

    FormComponent.displayName = 'BottomSheetForm';

    FormComponent.propTypes = {
        formControls: modalControlsPropType.isRequired,
        sidebar: PropTypes.node,
        subControl: PropTypes.node
    };

    return FormComponent;
};

export default ComposedComponent => BottomSheet(Form(ComposedComponent));
