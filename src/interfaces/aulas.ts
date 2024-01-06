import { DiasDaSemana } from "../enums/dias-da-semana";

export interface Aula {
    data: Date,
    diaDaSemana: number,
    aparelhoDia?: string
}