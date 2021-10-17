import { ISession } from '../../shared/models/session.model';
import { CONSTANTS } from '../utils/constants';

export const userAdminC: ISession = {
    email: 'catauroni@atsistemas.com',
    isValid: true,
    name: 'Carlos Alberto Tauroni Hernández',
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5AbG9wZXouY29tIiwibmFtZSI6Ikp1YW4gTMOzcGV6IEzDs3BleiIsImlhdCI6MTUxNjIzOTAyMn0.na1JmtvzqVjY-q6k3TLxOMekS-S86UnhCGP-x--SeIk',
    role: [CONSTANTS.ROLE_ADMIN],
};

export const userAdminJ: ISession = {
    email: 'jisegura@atsistemas.com',
    isValid: true,
    name: 'Jonas Segura Javier',
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZ3VlbEBhbGFyY29uLmNvbSIsIm5hbWUiOiJNaWd1ZWwgQWxhcmNvbiBTYW5jaG8iLCJpYXQiOjE1MTYyMzkwMjJ9.touYHs242Pd1_lGLY-qMxR-EB6HiE05svxuFQBhaJA0',
    role: [CONSTANTS.ROLE_ADMIN],
};

export const userAdminE: ISession = {
    email: 'echuecos@atsistemas.com',
    isValid: true,
    name: 'Eduardo Chuecos Sancho',
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZ3VlbEBhbGFyY29uLmNvbSIsIm5hbWUiOiJNaWd1ZWwgQWxhcmNvbiBTYW5jaG8iLCJpYXQiOjE1MTYyMzkwMjJ9.touYHs242Pd1_lGLY-qMxR-EB6HiE05svxuFQBhaJA0',
    role: [CONSTANTS.ROLE_ADMIN],
};

export const userReader: ISession = {
    email: 'testuser@test.com',
    isValid: true,
    name: 'Miguel Alonso Torres',
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZ3VlbEBhbGFyY29uLmNvbSIsIm5hbWUiOiJNaWd1ZWwgQWxhcmNvbiBTYW5jaG8iLCJpYXQiOjE1MTYyMzkwMjJ9.touYHs242Pd1_lGLY-qMxR-EB6HiE05svxuFQBhaJA0',
    role: [CONSTANTS.ROLE_PROPOSAL_READ],
};
