import PropTypes from 'prop-types';
import { Modal } from 'react-redux-popup';
import BaseModal from 'platform-common-ui/modal/base-modal';

export const BottomSheetHOC = ComposedComponent => {
    const BottomSheetComponent = props => (
        <BaseModal
            height={props.height}
            id={props.id}
            onClosePopup={props.onClosePopup}
            title={props.title}
            width={props.width}
        >
            <ComposedComponent {...props} />
        </BaseModal>
    );

    BottomSheetComponent.displayName = 'BottomSheetComponent';

    BottomSheetComponent.propTypes = {
        height: PropTypes.string,
        id: PropTypes.string.isRequired,
        onClosePopup: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        width: PropTypes.string
    };

    return BottomSheetComponent;
};

export default ComposedComponent => {
    const BottomSheetModal = Modal(BottomSheetHOC(ComposedComponent));

    BottomSheetModal.displayName = 'BottomSheetModal';

    BottomSheetModal.defaultProps = {
        layoverClassName: 'cn-modal-layover',
        popupClassName: 'cn-modal cn-bottom-sheet'
    };

    return BottomSheetModal;
};
