const {
    mockRequest,
    mockResponse
} = require('jest-mock-req-res');
const createError = require('http-errors');

const reagentController = require('./reagent.controller');
const reagentService = require('./reagent.service');

jest.mock('./reagent.service');

describe("reagent controller", () => {
    const mockData = [{
        "id": 1,
        "name": "REAGENT",
        "manufacturer": "MANUFACTURER",
        "price": 12,
        "stock": 23,
    }, {
        "id": 2,
        "name": "REAGENT",
        "manufacturer": "MANUFACTURER",
        "price": 23,
        "stock": 23,
    }, {
        "id": 3,
        "name": "REAGENT",
        "manufacturer": "MANUFACTURER",
        "price": 34,
        "stock": 23,
    }, {
        "id": 4,
        "name": "REAGENT",
        "manufacturer": "MANUFACTURER",
        "price": 45,
        "stock": 23,
    }, {
        "id": 5,
        "name": "REAGENT",
        "manufacturer": "MANUFACTURER",
        "price": 56,
        "stock": 23,
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        reagentService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", async () => {
        const REAGENT_ID = 1;

        const request = mockRequest({
            params: {
                id: REAGENT_ID
            }
        });

        await reagentController.findOne(request, response, nextFunction);
        expect(reagentService.findOne).toBeCalledWith(REAGENT_ID);
        expect(response.json).toBeCalledWith(
            mockData.find(p => p.id === REAGENT_ID)
        );
        expect(reagentService.findOne).toHaveLength(1);
    });

});