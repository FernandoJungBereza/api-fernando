const fs  = require('fs');

const staticRenderFile = 'staticrender.json';

var staticRenderRegisters = [];


fs.readFile(staticRenderFile, 'utf8', (err, data) => {
    if (err) {  
        console.log(err);
        return;
    }else{
        staticRenderRegisters = JSON.parse(data);
    }
});

const findAll = () => {
    return staticRenderRegisters;
}

const find = (id) => {

    let staticRenderRegister = staticRenderRegisters.find(staticRenderRegister => staticRenderRegister.id == id);
    if (!staticRenderRegister) return false;

    return staticRenderRegister;
    
};

const writestaticRenderRegisters = () => {
    fs.writeFile(staticRenderFile, JSON.stringify(staticRenderRegisters), (err) => {
        if (err) {
            throw err;
        }
    });
};

module.exports = {
    findAll,
    find
}