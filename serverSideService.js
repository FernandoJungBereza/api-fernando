const fs  = require('fs');

const serverSideFile = 'serverside.json';

var serverSideRegisters = [];


fs.readFile(serverSideFile, 'utf8', (err, data) => {
    if (err) {  
        console.log(err);
        return;
    }else{
        serverSideRegisters = JSON.parse(data);
    }
});

const findAll = () => {
    return serverSideRegisters;
}

const find = (id) => {

    let serverSideRegister = serverSideRegisters.find(serverSideRegister => serverSideRegister.id == id);
    if (!serverSideRegister) return false;

    return serverSideRegister;
    
};

const writeserverSideRegisters = () => {
    fs.writeFile(serverSideFile, JSON.stringify(serverSideRegisters), (err) => {
        if (err) {
            throw err;
        }
    });
};

module.exports = {
    findAll,
    find
}