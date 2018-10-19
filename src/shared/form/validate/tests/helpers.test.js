import { getIPRegExpByDotsCount } from '../helpers';

it('should return IP regular expression by dots count for validation IP', () => {
    const IPRegExpBlock = '(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

    expect(getIPRegExpByDotsCount(0)).toEqual(IPRegExpBlock);
    expect(getIPRegExpByDotsCount(1)).toEqual(`^(?:${IPRegExpBlock}.){1}${IPRegExpBlock}$`);
    expect(getIPRegExpByDotsCount(2)).toEqual(`^(?:${IPRegExpBlock}.){2}${IPRegExpBlock}$`);
    expect(getIPRegExpByDotsCount(3)).toEqual(`^(?:${IPRegExpBlock}.){3}${IPRegExpBlock}$`);
});
