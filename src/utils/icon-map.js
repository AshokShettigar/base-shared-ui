const ICON_MAP = {
    STATUS: {
        Success: [
            'success',
            'success-alt'
        ],
        Warning: [
            'alert',
            'critical-alert'
        ],
        Error: [
            'error_not_filled',
            'error-alt'
        ],
        'NOC Working': 'noc_working',
        'Pending Resolution': 'pending_resolution',
        Scheduled: 'scheduled',
        'LogMeIn Installed': 'logmein',
        'LogMeIn Not Installed': 'logmein',
        'LogMeIn Installing': 'logmein-installing',
        'LogMeIn Corrupted': 'logmein-corrupted',
        'Tickets(Normal)': [
            'tickets_normal_paper',
            'tickets_normal_checklist',
            'tickets_normal_warning'
        ],
        'Tickets(Site)': 'juno-tasks',
        Alerts: 'juno-alert',
        Online: 'online',
        Offline: 'offline',
        Protected: 'shield',
        Secure: 'keyhole',
        Urgent: 'urgent',
        Medium: 'medium'
    },
    ACTION: {
        Search: 'search',
        Actions: [
            '3dot-horizontal',
            'gear'
        ],
        Settings: 'settings',
        Filter: [
            'funnel',
            'filter'
        ],
        Help: 'help',
        Info: 'info',
        Add: 'add',
        Remove: 'remove',
        Stop: 'stop',
        Delete: 'delete',
        Close: 'close',
        Edit: 'edit',
        Link: 'link',
        Attach: 'attach',
        Change: 'change',
        Refresh: 'refresh',
        Download: 'download',
        Star: 'star',
        Expand: 'expand',
        Collapse: 'collapse',
        Time: 'clock',
        Calendar: 'calendar',
        'Agent install': 'agent_install',
        Escalate: 'escalate',
        Preview: 'preview',
        Reset: 'reset',
        Save: 'save',
        'External Link': 'external_link',
        'Sort descending': 'arrow-down',
        'Sort ascending': 'arrow-up',
        Back: [
            'caret-left',
            'caret-left-circle'
        ],
        Forward: [
            'carat-right',
            'carat-right-circle'
        ],
        'Triangle down': 'triangle-down',
        'Triangle right': 'triangle-right',
        'Triangle left': 'triangle-left',
        'Triangle up': 'triangle-up',
        Play: 'play',
        Pause: 'pause'
    },
    OBJECT: {
        Home: 'home',
        Contact: [
            'contact-card',
            'contact'
        ],
        Admin: 'admin',
        'Software(OS)': 'software',
        'File server': 'file-server',
        Network: 'network',
        Mobile: 'mobile',
        Laptop: 'laptop',
        Desktop: 'desktop',
        Server: 'server',
        Database: 'database',
        Patches: 'juno-patch',
        Processor: 'processor',
        Help: 'book',
        Reference: 'data',
        'Tag(Serial Number)': 'tag',
        Script: [
            'script_paper',
            'script_scroll'
        ],
        Reports: 'reports',
        'World(IP Address)': 'globe',
        'Building(Customer)': 'building',
        Location: 'location',
        Coffee: 'coffee',
        Email: 'email',
        Backup: [
            'backup',
            'cloud_backup'
        ],
        Chat: [
            'chat',
            'chat_headphones'
        ],
        Phone: 'phone',
        Comment: 'comment',
        Messages: 'messages',
        'Partner update': 'announce',
        Columns: 'columns',
        Health: 'health',
        Window: 'window',
        Approvals: 'approved',
        Password: 'key',
        Lock: 'lock',
        'Device Group': 'device_group',
        Windows: 'windows',
        Uncategorized: 'uncategorized'
    },
    PHONE_CALL: {
        'Call incoming': 'call-in',
        'Call outgoing': 'call-out',
        'Call active': 'call-active',
        'Call hold': 'call-hold',
        'Hang up': 'call-hangup',
        Transfer: 'change',
        Hold: 'hold',
        'Mic active': 'microphone',
        Muted: 'mute'
    }
};

export default ICON_MAP;

export const ICONS_WITH_WHITE_STATE = ['search'];

export const ICONS_WITH_FILLED_STATE = {
    star: 'star_active'
};
