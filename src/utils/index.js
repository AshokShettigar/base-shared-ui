import Request from './request';

export const DEFAULT_SPRITE_URL = 'sprites.svg';

let SPRITE_URL = DEFAULT_SPRITE_URL;

export function setSpriteUrl(url) {
    SPRITE_URL = url;
}

export function getSpriteUrl() {
    return SPRITE_URL;
}

export const Utils = {
    getSpriteUrl,
    Request,
    setSpriteUrl
};
