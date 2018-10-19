import { Component } from 'react';
import Section from 'app/components/section';

export default class BaseComponentView extends Component {
    getOptions() {
        return null;
    }

    renderComponent() {
        return null;
    }

    render() {
        return (
            <div className="sections">
                <Section title="Options" className="sections__options">
                    {this.getOptions()}
                </Section>
                <Section title="Rendered Output" className="sections__render-view">
                    {this.renderComponent()}
                </Section>
            </div>
        );
    }
}
