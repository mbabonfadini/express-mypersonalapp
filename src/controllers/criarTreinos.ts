import { Aparelho } from "../interfaces/aparelho";
import { Aula } from "../interfaces/aulas";

export class CriarTreinos {
  constructor() {}

  static criarTreino(aparalhosDisponiveis: Aparelho[], diasDeTreino: Aula[]): Aula[] {
    let aparelhosTreinados: Aparelho[] = [];

    const aparelhoDeCadaDia: Aula[] = diasDeTreino.map((aula: Aula) => {
      if (aparalhosDisponiveis.length === aparelhosTreinados.length) {
        aparelhosTreinados = [];
      }

      const newAparelho = aparalhosDisponiveis.filter(
        (aparelho) => !aparelhosTreinados.includes(aparelho)
      );

      aparelhosTreinados.push(newAparelho[0]);
      aula.aparelhoDia = newAparelho[0].nome;

      return aula;
    });

    return aparelhoDeCadaDia;
  }
}
