const labtestService = jest.mock('./labtest.service');

let mockData;

labtestService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);


labtestService.__setMockData = data => mockData = data;

module.exports = labtestService;
