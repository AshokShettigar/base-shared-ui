import { string } from 'prop-types';
import ReduxToastr from 'react-redux-toastr';

const Toast = props => (
    <ReduxToastr
        position={props.position}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
    />
);

Toast.propTypes = {
    position: string
};

Toast.defaultProps = {
    position: 'top-right'
};

export default Toast;

