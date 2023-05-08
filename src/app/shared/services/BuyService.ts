import { ValuesRepository } from "../bff/repository/ValuesRepository";
import { TypeRepository } from "../enums/TypeRepositoryEnum";
import { Presentation } from "../models/PresentationModel";
import { Value } from "../models/ValueModel";

export class BuyService {
    
    private valuesRepository: ValuesRepository;

    constructor() {
        this.valuesRepository = new ValuesRepository();
    }

    
    verifyBuying(type: TypeRepository, estimateRequest: number, presentValuation: number, discountPercent: number) : Presentation{
        const values = this.valuesRepository.getValues(type).reverse();
        
        let realEstimateRequest: number = estimateRequest - presentValuation;
        const presentBuy: Value[] = [];
        
        while(realEstimateRequest > 0 ){
            for(let value of values) {
                if(realEstimateRequest > value.quantidadeVP){
                    presentBuy.push(value);
                    realEstimateRequest -= value.quantidadeVP;
                    break;
                } else if(value.quantidadeVP == values.at(values.length - 1)?.quantidadeVP) {
                    presentBuy.push(value);
                    realEstimateRequest = 0;
                    break;
                }
            }
        }
        const value : Value = new Value(presentBuy.map(i => i.quantidadeVP).reduce((a,b) => a + b), presentBuy.map(i => i.preco).reduce((a,b) => a + b))
        return new Presentation(presentBuy, value, type);
    }


    
} 