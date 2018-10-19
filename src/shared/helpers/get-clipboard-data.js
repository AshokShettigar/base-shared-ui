export const getClipboardData = e => {
    let text;

    if (window.clipboardData && window.clipboardData.getData) {
        text = window.clipboardData.getData('Text');
    } else if (e.clipboardData && e.clipboardData.getData) {
        text = e.clipboardData.getData('text/plain');
    }

    return text;
};
