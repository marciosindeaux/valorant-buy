export class Value { 

    quantidadeVP: number;
    preco: number;
    razao: number = 0;

    constructor (qtdVp: number, preco: number) {
        this.quantidadeVP = qtdVp;
        this.preco = preco;
        this.reclaculateRazao();
    }

    reclaculateRazao() {
        this.razao = this.quantidadeVP/this.preco
    }

}