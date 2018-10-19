import uuidv4 from 'uuid';

import Icon from '../component';
import styles from './component.scss';

const ITEMS_PER_ROW = 6;
const glyphItems = [
    '3dot', '3dot-horizontal', 'add', 'admin', 'agent_install', 'alert',
    'announce', 'approved', 'arrow-down', 'arrow-up', 'attach', 'backup',
    'book', 'broadcast', 'bug', 'building', 'bulb-with-question-mark', 'calendar',
    'call-active', 'call-hangup', 'call-hold', 'call-in', 'call-out', 'carat-right',
    'carat-right-circle', 'caret-left-circle', 'change', 'chat', 'chat-contact', 'chat-end',
    'chat-tech', 'chat_bubbles', 'chat_headphones', 'check-all', 'check-none', 'checkmark',
    'clock', 'close', 'cloud_backup', 'coffee', 'collapse', 'columns',
    'comment', 'contact', 'contact-card', 'cpu', 'critical-alert', 'customer',
    'data', 'database', 'delete', 'desktop', 'device_group', 'document',
    'download', 'edit', 'email', 'error-alt', 'error_not_filled', 'escalate',
    'expand', 'external-link', 'external_link', 'file-server', 'filter', 'clear-all-filters', 'flag',
    'flame', 'folder-with-check', 'funnel', 'gear', 'globe', 'group',
    'health', 'help', 'hold', 'home', 'icon_alerts_big', 'info',
    'juno-alert', 'juno-alert-white', 'juno-patch', 'juno-tasks', 'key', 'keyhole',
    'laptop', 'link', 'linux-os', 'loader', 'location', 'lock',
    'lock-close', 'lock-open', 'logmein', 'logmein-corrupted', 'logmein-installing', 'logo-continuum',
    'mac-os', 'medium', 'memory', 'messages', 'microphone', 'microsoft-os',
    'mobile', 'mute', 'network', 'no-results', 'noc_working', 'notification',
    'offline', 'online', 'patch', 'pause', 'pending_revolution', 'phone', 'play', 'preview',
    'processor', 'refresh', 'remove', 'reports', 'reset', 'restart', 'rollback',
    'save', 'scheduled', 'script', 'script_paper', 'script_scroll', 'search', 'server',
    'settings', 'shield', 'software', 'star', 'star_active', 'stop', 'stop_alt', 'success',
    'success-alt', 'tag', 'ticket', 'tickets_normal_paper', 'tickets_normal_warning',
    'time', 'to-do-list', 'triangle-down', 'triangle-left', 'triangle-right', 'triangle-up',
    'ubuntu-os', 'uncategorized', 'urgent', 'user-status', 'user-status-active',
    'wifi', 'window', 'windows', 'device-note', 'site-note', 'global-note'
].sort();

const getGlyphsList = (glyphs = [], elsCount = 0) => {
    const glyphsList = [];
    let rows = Math.floor(glyphs.length / elsCount);

    if (glyphs.length % elsCount) {
        rows += 1;
    }

    for (let row = 0; row < rows; row++) {
        const start = elsCount * row;
        const end = start + elsCount;
        glyphsList.push(glyphs.slice(start, end));
    }

    return glyphsList;
};

export const glyphsList = getGlyphsList(glyphItems, ITEMS_PER_ROW);

const getGlyphsRow = glyphsRow => glyphsRow.map(glyph => (
    <td className={styles.cell} key={uuidv4()}>
        <Icon size="big" glyph={glyph} />
        <div className={styles.signature}>{glyph}</div>
    </td>
));

export const getGlyphs = glyphsRows => glyphsRows.map(glyphsRow => <tr key={uuidv4()}>{getGlyphsRow(glyphsRow)}</tr>);
