import { Container } from 'platform-common-ui';
import './styles.scss';
import '../static/sprites.svg';

export const StoryWrapper = (story) => (
    <div style={{padding: '15px'}}>
        {story()}
    </div>
);