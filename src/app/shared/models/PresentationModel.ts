import { TypeRepository } from "../enums/TypeRepositoryEnum";
import { Value } from "./ValueModel"

export class Presentation { 

    values: Array<Value>;
    value: Value;
    type: TypeRepository

    constructor (values: Array<Value>, value: Value, type: TypeRepository) {
        this.type = type
        this.value = value;
        this.values = values
    }

}