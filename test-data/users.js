import { faker } from '@faker-js/faker';
const users = {
    stage: {
        user: {
            email: 'admin02.nolimit',
            password: '123qweQ!',
        },
        admin: {
            email: 'admin02.nolimit',
            password: '123qweQ!',
        },
        // todo move the user creation process to a separate file where data about all new users will be generated
        registration:
        {
            email: faker.internet.email(),
            password: 'Tester_123',
            fullName: faker.name.fullName()
        }
    },
    prod: {
        user: {
            email: 'admin02.nolimit',
            password: '123qweQ!',
        },
        admin: {
            email: 'admin02.nolimit',
            password: '123qweQ!',
        },
    },
}
exports.users = users;