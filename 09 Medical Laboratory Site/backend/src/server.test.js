const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const Test = require('./model/labtest');
const { response } = require('jest-mock-req-res');

describe('REST API integration tests', () => {
    beforeEach(done => {
        const { host, user, pass } = config.get('database');
        mongoose.connect(`mongodb+srv://${host}`, {
            user,
            pass,
        }).then(conn => {
            console.log('Mock database connection success!');
            done();
        })
        .catch(err => {
            throw new Error(err.message);
        });
    });

    afterEach( done => {
        mongoose.connection.close( () => done() );
    });

    test('GET /test-card', done => {
       supertest(app).get('/test-card').expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done();
        });
    });
    test('GET /statistic/patient-count', done => {
       supertest(app).get('/statistic/patient-count').expect(200)
        .then(response => { 
            expect(response.body).toBe(100)        
            done();
        });
    });
    test('GET /statistic/physician-count', done => {
       supertest(app).get('/statistic/physician-count').expect(200)
        .then(response => { 
            expect(response.body).toBe(100)        
            done();
        });
    });
    test('GET /statistic/reagent-count', done => {
       supertest(app).get('/statistic/reagent-count').expect(200)
        .then(response => { 
            expect(response.body).toBe(80)        
            done();
        });
    });
    test('GET /statistic/sample-count', done => {
       supertest(app).get('/statistic/sample-count').expect(200)
        .then(response => { 
            expect(response.body).toBe(100)        
            done();
        });
    });
    test('GET /statistic/test-count', done => {
       supertest(app).get('/statistic/test-count').expect(200)
        .then(response => { 
            expect(response.body).toBe(60)        
            done();
        });
    });
});
