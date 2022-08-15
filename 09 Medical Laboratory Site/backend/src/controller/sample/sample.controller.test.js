const {
    mockRequest,
    mockResponse
} = require('jest-mock-req-res');
const createError = require('http-errors');

const sampleController = require('./sample.controller');
const sampleService = require('./sample.service');

jest.mock('./sample.service');

describe("sample controller", () => {
    const mockData = [{
        "id": 1,
        "type": "TYPE",
        "patient_name": "PATIENT NAME",
        "physician_name": "PHYSICIAN NAME",
        "sampling_date": "2222-22-22",
    }, {
        "id": 2,
        "type": "TYPE",
        "patient_name": "PATIENT NAME",
        "physician_name": "PHYSICIAN NAME",
        "sampling_date": "2222-22-22",
    }, {
        "id": 3,
        "type": "TYPE",
        "patient_name": "PATIENT NAME",
        "physician_name": "PHYSICIAN NAME",
        "sampling_date": "2222-22-22",
    }, {
        "id": 4,
        "type": "TYPE",
        "patient_name": "PATIENT NAME",
        "physician_name": "PHYSICIAN NAME",
        "sampling_date": "2222-22-22",
    }, {
        "id": 5,
        "type": "TYPE",
        "patient_name": "PATIENT NAME",
        "physician_name": "PHYSICIAN NAME",
        "sampling_date": "2222-22-22",
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        sampleService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", async () => {
        const SAMPLE_ID = 1;

        const request = mockRequest({
            params: {
                id: SAMPLE_ID
            }
        });

        await sampleController.findOne(request, response, nextFunction);
        expect(sampleService.findOne).toBeCalledWith(SAMPLE_ID);
        expect(response.json).toBeCalledWith(
            mockData.find(p => p.id === SAMPLE_ID)
        );
        expect(sampleService.findOne).toHaveLength(1);
    });

});