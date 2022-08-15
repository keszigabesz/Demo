const {
    mockRequest,
    mockResponse
} = require('jest-mock-req-res');
const createError = require('http-errors');

const patientController = require('./patient.controller');
const patientService = require('./patient.service');

jest.mock('./patient.service');

describe("patient controller", () => {
    const mockData = [{
        "id": 1,
        "name": "Fiorenze",
        "taj": 12,
        "birth_date": "2000-01-01",
        "mothers_name": "MOTHERS NAME",
    }, {
        "id": 2,
        "name": "Owen",
        "taj": 23,
        "birth_date": "2000-01-01",
        "mothers_name": "MOTHERS NAME",
    }, {
        "id": 3,
        "name": "Terra",
        "taj": 34,
        "birth_date": "2000-01-01",
        "mothers_name": "MOTHERS NAME",
    }, {
        "id": 4,
        "name": "Thomasin",
        "taj": 45,
        "birth_date": "2000-01-01",
        "mothers_name": "MOTHERS NAME",
    }, {
        "id": 5,
        "name": "Lawrence",
        "taj": 56,
        "birth_date": "2000-01-01",
        "mothers_name": "MOTHERS NAME",
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        patientService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", async () => {
        const PATIENT_ID = 1;

        const request = mockRequest({
            params: {
                id: PATIENT_ID
            }
        });

        await patientController.findOne(request, response, nextFunction);
        expect(patientService.findOne).toBeCalledWith(PATIENT_ID);
        expect(response.json).toBeCalledWith(
            mockData.find(p => p.id === PATIENT_ID)
        );
        expect(patientService.findOne).toHaveLength(1);
    });

});