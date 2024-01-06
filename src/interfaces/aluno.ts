import { DiasDaSemana } from "../enums/dias-da-semana"

export interface AlunoSchema {
    nome: string
    dataInscricao: Date
    diasDeTreino: DiasDaSemana[]
    
}