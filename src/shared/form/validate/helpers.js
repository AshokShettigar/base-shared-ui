export const emailRegExpPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const IPRegExpBlock = '(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
export const IPv4RegExpPattern =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export const getIPRegExpByDotsCount = (dotsCount = 3) => (dotsCount
    ? `^(?:${IPRegExpBlock}.){${dotsCount}}${IPRegExpBlock}$`
    : IPRegExpBlock);
