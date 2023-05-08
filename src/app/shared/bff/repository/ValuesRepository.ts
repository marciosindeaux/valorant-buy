import { readFileSync  } from 'node:fs'
import { TypeRepository } from '../../enums/TypeRepositoryEnum';
import { Value } from '../../models/ValueModel';
export class ValuesRepository {

    constructor(){}

    getValues(type : TypeRepository) : Array<Value> {
        const file = readFileSync(type.uriData);
        const vals = JSON.parse(file.toString());
        return vals.map((i: { quantidadeVP: any; preco: any; }) => new Value( Number(i.quantidadeVP), Number(i.preco)));
   }
}