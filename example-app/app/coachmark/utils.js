export function isAncestor(child, ancestor) {
    if (!child || !ancestor || typeof child !== 'object') {
        return false;
    }

    let currentParentNode = child.parentNode;
    while (currentParentNode) {
        if (currentParentNode === ancestor) {
            return true;
        }
        currentParentNode = currentParentNode.parentNode;
    }
    return false;
}
