const clientSideService = require('./clientSideService');
const clientSideController = require('express').Router();


 clientSideController.get('/', async (request, response) => {
    clientSideRegisters = await clientSideService.findAll();
    return response.json(clientSideRegisters);
});

clientSideController.get('/:id', async (request, response) => {
    clientSideRegister = await clientSideService.find(request.params.id)
    if (!clientSideRegister) return response.status(404).send('Not Found');
    return response.json(clientSideRegister);
});

module.exports = clientSideController;
