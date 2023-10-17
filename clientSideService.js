const fs  = require('fs');

const clientSideFile = 'clientside.json';

var clientSideRegisters = [];


fs.readFile(clientSideFile, 'utf8', (err, data) => {
    if (err) {  
        console.log(err);
        return;
    }else{
        clientSideRegisters = JSON.parse(data);
    }
});

const findAll = () => {
    return clientSideRegisters;
}

const find = (id) => {

    let clientSideRegister = clientSideRegisters.find(clientSideRegister => clientSideRegister.id == id);
    if (!clientSideRegister) return false;

    return clientSideRegister;
    
};

const writeclientSideRegisters = () => {
    fs.writeFile(clientSideFile, JSON.stringify(clientSideRegisters), (err) => {
        if (err) {
            throw err;
        }
    });
};

module.exports = {
    findAll,
    find
}