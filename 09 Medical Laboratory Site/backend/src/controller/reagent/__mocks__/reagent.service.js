const reagentService = jest.mock('./reagent.service');

let mockData;

reagentService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);


reagentService.__setMockData = data => mockData = data;

module.exports = reagentService;
