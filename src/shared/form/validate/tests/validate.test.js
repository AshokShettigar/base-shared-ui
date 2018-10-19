import { IPv4 } from '../validate';

describe('IPv4', () => {
    describe('should be invalid with', () => {
        it('one block', () => {
            expect(IPv4()('0')).toBeTruthy();
            expect(IPv4()('1')).toBeTruthy();
            expect(IPv4()('09')).toBeTruthy();
            expect(IPv4()('19')).toBeTruthy();
            expect(IPv4()('99')).toBeTruthy();
            expect(IPv4()('099')).toBeTruthy();
            expect(IPv4()('199')).toBeTruthy();
            expect(IPv4()('255')).toBeTruthy();
            expect(IPv4()('255.')).toBeTruthy();
            expect(IPv4()('256')).toBeTruthy();
            expect(IPv4()('2555')).toBeTruthy();
        });

        it('two blocks', () => {
            expect(IPv4()('0.0')).toBeTruthy();
            expect(IPv4()('1.1')).toBeTruthy();
            expect(IPv4()('09.09')).toBeTruthy();
            expect(IPv4()('19.19')).toBeTruthy();
            expect(IPv4()('99.99')).toBeTruthy();
            expect(IPv4()('099.099')).toBeTruthy();
            expect(IPv4()('199.199')).toBeTruthy();
            expect(IPv4()('255.255')).toBeTruthy();
            expect(IPv4()('255.255.')).toBeTruthy();
            expect(IPv4()('255.0')).toBeTruthy();
            expect(IPv4()('199.1')).toBeTruthy();
            expect(IPv4()('099.09')).toBeTruthy();
            expect(IPv4()('99.19')).toBeTruthy();
            expect(IPv4()('19.99')).toBeTruthy();
            expect(IPv4()('09.099')).toBeTruthy();
            expect(IPv4()('1.199')).toBeTruthy();
            expect(IPv4()('0.255')).toBeTruthy();
            expect(IPv4()('255.255.')).toBeTruthy();
            expect(IPv4()('255.256')).toBeTruthy();
            expect(IPv4()('255.2555')).toBeTruthy();
        });

        it('three blocks', () => {
            expect(IPv4()('0.0.0')).toBeTruthy();
            expect(IPv4()('1.1.1')).toBeTruthy();
            expect(IPv4()('09.09.09')).toBeTruthy();
            expect(IPv4()('19.19.19')).toBeTruthy();
            expect(IPv4()('99.99.99')).toBeTruthy();
            expect(IPv4()('099.099.099')).toBeTruthy();
            expect(IPv4()('199.199.199')).toBeTruthy();
            expect(IPv4()('255.255.255')).toBeTruthy();
            expect(IPv4()('255.255.255.')).toBeTruthy();
            expect(IPv4()('255.0.255')).toBeTruthy();
            expect(IPv4()('199.1.199')).toBeTruthy();
            expect(IPv4()('099.09.099')).toBeTruthy();
            expect(IPv4()('99.19.99')).toBeTruthy();
            expect(IPv4()('19.99.19')).toBeTruthy();
            expect(IPv4()('09.099.09')).toBeTruthy();
            expect(IPv4()('1.199.1')).toBeTruthy();
            expect(IPv4()('0.255.0')).toBeTruthy();
            expect(IPv4()('255.255.255')).toBeTruthy();
            expect(IPv4()('256.255.255')).toBeTruthy();
            expect(IPv4()('255.256.255')).toBeTruthy();
            expect(IPv4()('255.255.256')).toBeTruthy();
            expect(IPv4()('255.255.2555')).toBeTruthy();
        });

        it('four blocks', () => {
            expect(IPv4()('255.255.255.255.')).toBeTruthy();
            expect(IPv4()('256.255.255.255')).toBeTruthy();
            expect(IPv4()('255.256.255.255')).toBeTruthy();
            expect(IPv4()('255.255.256.255')).toBeTruthy();
            expect(IPv4()('255.255.255.256')).toBeTruthy();
            expect(IPv4()('255.255.255.2555')).toBeTruthy();
        });
    });

    it('should be valid', () => {
        expect(IPv4()('0.0.0.0')).toBeUndefined();
        expect(IPv4()('1.1.1.1')).toBeUndefined();
        expect(IPv4()('09.09.09.09')).toBeUndefined();
        expect(IPv4()('19.19.19.19')).toBeUndefined();
        expect(IPv4()('99.99.99.99')).toBeUndefined();
        expect(IPv4()('099.099.099.099')).toBeUndefined();
        expect(IPv4()('199.199.199.199')).toBeUndefined();
        expect(IPv4()('255.255.255.255')).toBeUndefined();
        expect(IPv4()('255.0.255.0')).toBeUndefined();
        expect(IPv4()('199.1.199.1')).toBeUndefined();
        expect(IPv4()('099.09.099.09')).toBeUndefined();
        expect(IPv4()('99.19.99.19')).toBeUndefined();
        expect(IPv4()('19.99.19.99')).toBeUndefined();
        expect(IPv4()('09.099.09.099')).toBeUndefined();
        expect(IPv4()('1.199.1.199')).toBeUndefined();
        expect(IPv4()('0.255.0.255')).toBeUndefined();
        expect(IPv4()('255.255.255.255')).toBeUndefined();
    });
});
