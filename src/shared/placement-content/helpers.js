export const getOffsetByPosition = (position, offset) => {
    switch (position) {
    case 'top-start': return { marginBottom: offset };
    case 'top': return { marginBottom: offset };
    case 'top-end': return { marginBottom: offset };
    case 'right-start': return { marginLeft: offset };
    case 'right': return { marginLeft: offset };
    case 'right-end': return { marginLeft: offset };
    case 'bottom-end': return { marginTop: offset };
    case 'bottom': return { marginTop: offset };
    case 'bottom-start': return { marginTop: offset };
    case 'left-end': return { marginRight: offset };
    case 'left': return { marginRight: offset };
    case 'left-start': return { marginRight: offset };
    default: return { margin: offset };
    }
};
