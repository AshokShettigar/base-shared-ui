import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Toast } from 'platform-common-ui';

import store from 'app/store';
import App from 'app/app';

// require style to generate one css file
require('../../styles/main.scss');
require('../styles/example-app.scss');

const rootElement = document.getElementById('main');
if (rootElement) {
    render(
        <IntlProvider locale="en">
            <Provider store={store}>
                <div className="app-container">
                    <App />
                    <Toast />
                </div>
            </Provider>
        </IntlProvider>,
        rootElement
    );
}
