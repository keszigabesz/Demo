const physicianService = jest.mock('./physician.service');

let mockData;

physicianService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);


physicianService.__setMockData = data => mockData = data;

module.exports = physicianService;
