const {
    mockRequest,
    mockResponse
} = require('jest-mock-req-res');
const createError = require('http-errors');

const labtestController = require('./labtest.controller');
const labtestService = require('./labtest.service');

jest.mock('./labtest.service');

describe("labtest controller", () => {
    const mockData = [{
        "id": 1,
        "name": "LABTEST",
        "price": 12,
        "point": 12,
        "description": "DESCRIPTION",
    }, {
        "id": 2,
        "name": "LABTEST",
        "price": 23,
        "point": 23,
        "description": "DESCRIPTION",
    }, {
        "id": 3,
        "name": "LABTEST",
        "price": 34,
        "point": 34,
        "description": "DESCRIPTION",
    }, {
        "id": 4,
        "name": "LABTEST",
        "price": 45,
        "point": 45,
        "description": "DESCRIPTION",
    }, {
        "id": 5,
        "name": "LABTEST",
        "price": 56,
        "point": 56,
        "description": "DESCRIPTION",
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        labtestService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", async () => {
        const LABTEST_ID = 1;

        const request = mockRequest({
            params: {
                id: LABTEST_ID
            }
        });

        await labtestController.findOne(request, response, nextFunction);
        expect(labtestService.findOne).toBeCalledWith(LABTEST_ID);
        expect(response.json).toBeCalledWith(
            mockData.find(p => p.id === LABTEST_ID)
        );
        expect(labtestService.findOne).toHaveLength(1);
    });

});