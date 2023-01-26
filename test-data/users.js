import { faker } from '@faker-js/faker';
const users = {
    stage: {
        login: {
            user: {
                email: 'admin02.nolimit',
                password: '123qweQ!',
            },
            admin: {
                email: 'admin02.nolimit',
                password: '123qweQ!',
            },
        },
        registration:
        {
            email: faker.internet.email(),
            password: 'Tester_123',
            fullName: faker.name.fullName()

        }
    },
    prod: {
        user: {
            email: '',
            password: '',
        },
        admin: {
            email: 'admin02.nolimit',
            password: '123qweQ!',
        },
    },

}
exports.users = users;