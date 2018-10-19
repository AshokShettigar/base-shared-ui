import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container } from 'platform-common-ui';
import { object, withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumbs from '../component';
import labelReadMe from '../readme.md';

const twoBreadcrumbs = [{
    title: 'previous breadcrumb title',
    link: '/link'
},
{
    title: 'current breadcrumb title'
}];

const threeBreadcrumbs = [{
    title: 'first breadcrumb title',
    link: '/first'
},
{
    title: 'second breadcrumb title'
},
{
    title: 'current breadcrumb title'
}];

// Breadcrumbs
const States = () => (
    <Router>
        <Container fluid>
            <h4 className="story-title">Breadcrumbs</h4>
            <h5>Two Breadcrumbs Example</h5>
            <Breadcrumbs breadcrumbs={twoBreadcrumbs} /><br />
            <h5>Three Breadcrumbs Example</h5>
            <Breadcrumbs breadcrumbs={threeBreadcrumbs} /><br />
        </Container>
    </Router>
);

// Playground
const Playground = () => {
    const value = object('Breadcrumbs Data', twoBreadcrumbs);

    return (
        <Router>
            <Container fluid>
                <h4 className="story-title">Breadcrumbs Playground</h4>
                <Breadcrumbs breadcrumbs={value} /><br />
            </Container>
        </Router>
    );
};

storiesOf('Breadcrumbs', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([labelReadMe]))
    .addDecorator(withKnobs)
    .add('States', withInfo({
        propTablesExclude: [
            Router,
            Container,
            Breadcrumbs
        ]
    })(States))
    .add('Playground', withInfo({
        propTablesExclude: [
            Router,
            Container,
            Breadcrumbs
        ]
    })(Playground));
