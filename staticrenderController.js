const staticRenderService = require('./staticRenderService');
const staticRenderController = require('express').Router();


 staticRenderController.get('/', async (request, response) => {
    staticRenderRegisters = await staticRenderService.findAll();
    return response.json(staticRenderRegisters);
});

staticRenderController.get('/:id', async (request, response) => {
    staticRenderRegister = await staticRenderService.find(request.params.id)
    if (!staticRenderRegister) return response.status(404).send('Not Found');
    return response.json(staticRenderRegister);
});

module.exports = staticRenderController;
