import { any, bool } from 'prop-types';

import { MockDate } from '../../helpers';
import { partnerId } from '../constants';
import * as helpers from '../helpers';

describe('helpers', () => {
    it('partnerId', () => {
        expect(partnerId).toEqual('0');
    });

    it('defaultInitialState', () => {
        expect(helpers.defaultInitialState).toEqual({
            loading: false,
            loaded: false,
            error: null
        });
    });

    it('defaultPropTypes', () => {
        expect(helpers.defaultPropTypes).toEqual({
            loading: bool.isRequired,
            loaded: bool.isRequired,
            error: any
        });
    });

    it('getUrlById', () => {
        const url = 'http://url-example.com';
        const id = '386';

        expect(helpers.getUrlById(url)).toEqual(url);
        expect(helpers.getUrlById(url, { id })).toEqual(`${url}/${id}`);
    });

    it('getUrlByTemplate', () => {
        const template = 'http://url-example.com/{{p1}}/example/{{p2}}/{{p3}}';
        const p1 = '386';
        const p2 = '86';
        const p3 = '';

        expect(helpers.getUrlByTemplate(template, { p1, p2, p3 })).toEqual(`http://url-example.com/${p1}/example/${p2}/${p3}`);
        expect(helpers.getUrlByTemplate(template, { p1, p2 })).toEqual(`http://url-example.com/${p1}/example/${p2}/{{p3}}`);
        expect(helpers.getUrlByTemplate(template)).toEqual(template);
    });

    it('getParams', () => {
        const mockDate = new MockDate();

        global.window.Date = MockDate;

        const params = {
            param1: 10,
            param2: {
                param3: {
                    param4: 30
                }
            }
        };

        expect(helpers.getParams(params)).toEqual({
            ...params,
            params: {
                noCache: mockDate,
                ...params.params
            }
        });
    });
});
