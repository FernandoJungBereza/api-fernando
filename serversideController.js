const serverSideService = require('./serverSideService');
const serverSideController = require('express').Router();


 serverSideController.get('/', async (request, response) => {
    serverSideRegisters = await serverSideService.findAll();
    return response.json(serverSideRegisters);
});

serverSideController.get('/:id', async (request, response) => {
    serverSideRegister = await serverSideService.find(request.params.id)
    if (!serverSideRegister) return response.status(404).send('Not Found');
    return response.json(serverSideRegister);
});

module.exports = serverSideController;
