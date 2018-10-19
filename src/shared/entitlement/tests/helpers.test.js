import { getPermissions, hasEntitlement } from '../helpers';

describe('Entitlement helpers', () => {
    it('getPermissions', () => {
        expect(getPermissions(['TASKING_BASIC'], ['TASKING_BASIC'])).toEqual({ TASKING_BASIC: true });
        expect(getPermissions([], ['TASKING_BASIC'])).toEqual({});
        expect(getPermissions(['TASKING_DYNAMIC_GROUPS'], ['TASKING_BASIC'])).toEqual({ TASKING_DYNAMIC_GROUPS: false });

        expect(getPermissions(['TASKING_BASIC', 'TASKING_DYNAMIC_GROUPS'], ['TASKING_BASIC']))
            .toEqual({ TASKING_BASIC: true, TASKING_DYNAMIC_GROUPS: false });
        expect(getPermissions(['TASKING_BASIC'], ['TASKING_DYNAMIC_GROUPS'])).toEqual({ TASKING_BASIC: false });
    });

    it('hasEntitlement', () => {
        expect(hasEntitlement({ TASKING_BASIC: true, TASKING_DYNAMIC_GROUPS: false }, 'TASKING_BASIC')).toBeTruthy();
        expect(hasEntitlement({ TASKING_BASIC: false }, 'TASKING_BASIC')).toBeFalsy();
    });
});
