import faker from 'faker';

const data = {
    short: {
        title: faker.lorem.sentence(),
        message: faker.lorem.paragraph()
    },
    long: {
        title: faker.lorem.sentences(5),
        message: faker.lorem.paragraphs(10)
    },
    img: {
        url: faker.random.image(),
        alt: faker.random.word()
    }
};

export default data;
