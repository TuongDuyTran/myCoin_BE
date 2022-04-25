let IException = require('./IException');

class CustomException extends IException{
    constructor(message, code) {
        super();
        this.message = message;
        this.code = code;
    }
}

module.exports = CustomException;