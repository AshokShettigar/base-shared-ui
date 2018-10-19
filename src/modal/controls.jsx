import PropTypes from 'prop-types';

import Button, { BUTTON_VARIATION } from 'platform-common-ui/button';


export const modalControlsPropType = PropTypes.arrayOf(
    PropTypes.shape({
        isDisabled: PropTypes.bool,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        isLoading: PropTypes.bool,
        variation: PropTypes.oneOf([
            BUTTON_VARIATION.DEFAULT,
            BUTTON_VARIATION.PRIMARY,
            BUTTON_VARIATION.SECONDARY
        ]).isRequired
    })
);

function ModalControls({ controls }) {
    return (
        <div className="cn-modal-controls">
            {controls.map(control => (
                <Button
                    className="cn-modal-controls__button"
                    isDisabled={control.isDisabled}
                    key={control.label}
                    isLoading={control.isLoading}
                    onClick={control.onClick}
                    variation={control.variation}
                >
                    {control.label}
                </Button>
            ))}
        </div>
    );
}


ModalControls.propTypes = {
    controls: modalControlsPropType.isRequired
};

ModalControls.defaultProps = {
    controls: []
};

export default ModalControls;
