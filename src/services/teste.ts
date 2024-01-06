import { CriarTreinos } from "../controllers/criarTreinos.js";
import { Datas } from "../controllers/datas.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Aparelho } from "../interfaces/aparelho.js";
import { Aluno } from "../models/Athlete.js";

const aluno = new Aluno(
  "Marcos Bonfadini",
  new Date("2024-01-02"),
  [DiasDaSemana.TERCA, DiasDaSemana.QUINTA],
  new Date("2024-01-18")
);

const diasDeTreino = Datas.diasDeTreino(aluno.dataUltimaRenovacao, [
  DiasDaSemana.TERCA,
  DiasDaSemana.QUINTA,
]);

const aparelhos: Aparelho[] = [
  { nome: "ap1", quantidade: 1 },
  { nome: "ap2", quantidade: 1 },
  { nome: "ap3", quantidade: 1 },
];

const treinos = CriarTreinos.criarTreino(aparelhos, diasDeTreino);

console.log(treinos);
