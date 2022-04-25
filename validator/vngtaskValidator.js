import { AbstractValidator, Validator } from "../global_class/abstractValidator.js";
import DBO from 'dbo';
const {dbo} = DBO;

export class VNGTaskValidator extends AbstractValidator{

    _doValid() {
        const validData = dbo.VNG_Task.build(this.value).dataValues;
        for(let name in this.value){
            if(validData[name] === undefined){
                this.error = `${name} is not correct`;
                return false;
            }
        }

        return true;
    }
}

Validator['vngtask'] = VNGTaskValidator;