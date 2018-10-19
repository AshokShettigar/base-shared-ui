const constantDate = new Date('2017-06-13T04:41:20');

class MockDate extends Date {
    constructor() {
        super();
        return constantDate;
    }
}

export default MockDate;
