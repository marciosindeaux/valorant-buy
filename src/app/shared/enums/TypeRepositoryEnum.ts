export class TypeRepositoryEnum {

    public OFICIAL : TypeRepository = new TypeRepository("Oficial", "OFICIAL", "./src/app/shared/bff/data/oficialValues.json");

    static values() : TypeRepositoryEnum {
        return {
            OFICIAL: new TypeRepository("Oficial", "OFICIAL", "./src/app/shared/bff/data/oficialValues.json")
        }
    }

    
}

export class TypeRepository {
    name: string;
    url: string;
    uriData:string
    constructor(name: string,
        url: string,
        uriData:string) {
            this.name= name;
            this.url= url;
            this.uriData= uriData;
    }
} 