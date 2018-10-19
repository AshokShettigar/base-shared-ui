import {
    Button,
    OneTimeRender
} from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class OneTimeRenderExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            isEnable: true
        };
        this.OnClearClick = this.OnClearClick.bind(this);
        this.OnCloseClick = this.OnCloseClick.bind(this);
    }

    OnClearClick() {
        localStorage.clear('key-in-local-storage');
        this.setState({
            isEnable: true
        });
    }

    OnCloseClick() {
        localStorage.setItem('key-in-local-storage', true);
        this.setState({
            isEnable: false
        });
    }

    renderComponent() {
        return (
            <div>
                <Button
                    onClick={this.OnClearClick}
                >
                    Render Again
                </Button>
                <Button
                    onClick={this.OnCloseClick}
                >
                    Close
                </Button>
                { this.state.isEnable &&
                    <OneTimeRender key="key-in-local-storage">
                        <div>I am rendering</div>
                    </OneTimeRender>
                }
            </div>
        );
    }
}
