import { DiasDaSemana } from "../enums/dias-da-semana";
import { AlunoSchema } from "../interfaces/aluno";

export class Aluno implements AlunoSchema {
    constructor(

        public nome: string,
        public readonly dataInscricao: Date,
        public diasDeTreino: DiasDaSemana[],
        public readonly dataUltimaRenovacao: Date,

        ){
    }

    dataVigencia(): Date {
        return new Date(this.dataUltimaRenovacao.getFullYear(),this.dataUltimaRenovacao.getMonth()+1,this.dataUltimaRenovacao.getDate())
    }
}