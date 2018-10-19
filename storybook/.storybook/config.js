import { configure, addDecorator } from '@storybook/react';
import { StoryWrapper } from './story-wrapper';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

addDecorator(StoryWrapper);

// Set global defaults of addon-info
setDefaults({
    header: false,
    inline: false
});

// Set options of storybook UI
setOptions({
    name: 'Continuum Storybook',
    url: 'https://github.com/ContinuumLLC/platform-common-ui/tree/master',
    showAddonPanel: true,
    addonPanelInRight: true
});

const loadStories = () => {
    const storiesContext = require.context('../../src', true, /.story.jsx$/);
    storiesContext.keys()
        .forEach(storyFile => storiesContext(storyFile));
};

configure(loadStories, module);