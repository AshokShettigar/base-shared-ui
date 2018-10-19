import MockDate from '../mock-date';

it('MockDate', () => {
    const mockDate = new MockDate();

    expect(mockDate).toEqual(new Date('2017-06-13T04:41:20'));
});
