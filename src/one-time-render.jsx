import { node, string } from 'prop-types';

const OneTimeRenderWrapper = props => {
    const keyToCheck = props.keyToCheck;
    const isKeyPresentInLocalStorage = Boolean(localStorage.getItem(keyToCheck));
    const shouldRender = !isKeyPresentInLocalStorage;
    return (
        shouldRender &&
        <div className="display-flex">
            {props.children}
        </div>
    );
};

OneTimeRenderWrapper.displayName = 'OneTimeRenderWrapper';

OneTimeRenderWrapper.propTypes = {
    children: node,
    keyToCheck: string
};

export default OneTimeRenderWrapper;
