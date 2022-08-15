const {
    mockRequest,
    mockResponse
} = require('jest-mock-req-res');
const createError = require('http-errors');

const physicianController = require('./physician.controller');
const physicianService = require('./physician.service');

jest.mock('./physician.service');

describe("physician controller", () => {
    const mockData = [{
        "id": 1,
        "name": "PHYSICIAN",
        "reg_number": 12,
        "city": "city",
    }, {
        "id": 2,
        "name": "PHYSICIAN",
        "reg_number": 23,
        "city": "city",
    }, {
        "id": 3,
        "name": "PHYSICIAN",
        "reg_number": 34,
        "city": "city",
    }, {
        "id": 4,
        "name": "PHYSICIAN",
        "reg_number": 45,
        "city": "city",
    }, {
        "id": 5,
        "name": "PHYSICIAN",
        "reg_number": 56,
        "city": "city",
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        physicianService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", async () => {
        const PHYSICIAN_ID = 1;

        const request = mockRequest({
            params: {
                id: PHYSICIAN_ID
            }
        });

        await physicianController.findOne(request, response, nextFunction);
        expect(physicianService.findOne).toBeCalledWith(PHYSICIAN_ID);
        expect(response.json).toBeCalledWith(
            mockData.find(p => p.id === PHYSICIAN_ID)
        );
        expect(physicianService.findOne).toHaveLength(1);
    });

});