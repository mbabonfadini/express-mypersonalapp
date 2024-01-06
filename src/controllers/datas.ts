import { DiasDaSemana } from "../enums/dias-da-semana";
import { Aula } from "../interfaces/aulas";

export class Datas {
    constructor(){}

    static dataVigencia(dataInicio: Date): Date {
        return new Date(dataInicio.getFullYear(),dataInicio.getMonth()+1,dataInicio.getDate())
    }

    static dataDiff(dataInicial: Date, dataFinal: Date): number {
        return Math.abs(dataFinal.getTime() - dataInicial.getTime()) / (1000 * 3600 * 24)
    }

    static diasDeTreino(dataInicial: Date, diasDaSemana: DiasDaSemana[]): Aula[]{
        
        const diasDeTreino: Aula[] = []

        for(let i = 0; i < this.dataDiff(dataInicial, this.dataVigencia(dataInicial)); ++i){

            const data: Date = new Date()
            data.setDate(dataInicial.getDate() + i)

            const aula: Aula = {
              data: data,
              diaDaSemana: data.getDay()
            }
          
            if(diasDaSemana.includes(aula.diaDaSemana)){
              diasDeTreino.push(aula)
            }
          
          }

          return diasDeTreino
    }

}