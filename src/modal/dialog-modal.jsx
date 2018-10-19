import PropTypes from 'prop-types';
import { Modal } from 'react-redux-popup';
import BaseModal from 'platform-common-ui/modal/base-modal';
import ModalControls, { modalControlsPropType } from 'platform-common-ui/modal/controls';

export const Dialog = props => (
    <BaseModal
        height={props.height}
        id={props.id}
        title={props.title}
        width={props.width}
        onClosePopup={props.onClosePopup}
    >
        <div className="cn-modal__content">
            {props.children}
        </div>
        <ModalControls controls={props.formControls} />
    </BaseModal>
);

Dialog.displayName = 'DialogModal';

Dialog.propTypes = {
    children: PropTypes.node,
    formControls: modalControlsPropType.isRequired,
    height: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    onClosePopup: PropTypes.func
};

Dialog.defaultProps = {
    height: '150px',
    title: 'Alert',
    width: '450px'
};

const DialogModal = Modal(Dialog);
DialogModal.defaultProps = {
    layoverClassName: 'cn-modal-layover',
    popupClassName: 'cn-modal cn-alert-modal'
};

export default DialogModal;
