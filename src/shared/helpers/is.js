const getType = type => Object.prototype.toString.call(type);

export const is = {
    object: v => getType(v) === '[object Object]',
    array: v => getType(v) === '[object Array]',
    string: v => getType(v) === '[object String]',
    func: v => getType(v) === '[object Function]'
};
