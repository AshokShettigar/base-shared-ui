import faker from 'faker';

const data = {
    short: {
        title: faker.lorem.sentence(),
        message: faker.lorem.paragraph()
    },
    long: {
        title: faker.lorem.sentences(5),
        message: faker.lorem.paragraphs(10)
    }
};

export default data;
