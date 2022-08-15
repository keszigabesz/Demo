const patientService = jest.mock('./patient.service');

let mockData;

patientService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);


patientService.__setMockData = data => mockData = data;

module.exports = patientService;
