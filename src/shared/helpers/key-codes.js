export const KEY_CODES = {
    A: 65,
    ARROW_DOWN: 40,
    ARROW_RIGHT: 39,
    ARROW_UP: 38,
    ALT: 18,
    ARROW_LEFT: 37,
    BACKSPACE: 8,
    C: 67,
    CTRL: 17,
    DASH: 189,
    DELETE: 46,
    DECIMAL_POINT: 110,
    END: 35,
    ENTER: 13,
    ESC: 27,
    SUBTRACT: 109,
    HOME: 36,
    PERIOD: 190,
    COMMA: 188,
    SPACE: 32,
    TAB: 9,
    V: 86,
    SHIFT: 16
};

export const isKeyCodeNumber = keyCode =>
    (keyCode > 47 && keyCode < 58) || (keyCode > 95 && keyCode < 106);

