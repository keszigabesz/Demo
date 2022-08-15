const sampleService = jest.mock('./sample.service');

let mockData;

sampleService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);


sampleService.__setMockData = data => mockData = data;

module.exports = sampleService;
