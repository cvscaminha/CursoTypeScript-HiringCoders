//a tipagem deve ser minúscula

// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 25;
const avaliacao: number = 4.5;

//String
const nome: string = "Cristiano Vieira";

//Array de Numbers
const idades: number[] = [24, 28, 50];
const idades2: Array<number> = [45, 85, 65];

//Tuple
let jogadores: [string, number, string, boolean];
jogadores = ["Cristiano", 45, "Maria", true];

// Enum -> mapeamento de informações
enum StatusAprovacao {
  Aprovado = "001",
  Pendente = "002",
  Rejeitado = "003",
}
const statusSituacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any -> tipo pra qualquer coisa | anula a tipagem do ts | usar com atenção
const retornoDaAPI: any[] = [123, "Cris", false];
const retornoDaAPI2: any = {
  // .........
};

// Void | Pouco usado | Informa que função não tem retorno
function printarNaTela(msg: string) {
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
  // ....
}
//criar("cris"); não aceita pq cris não é do tipo object e sim do tipo string
criar({
  propriedade: 1,
});

// Never | Quase nunca é aplicado nos projetos | Função que nunca finaliza

function loopInfinito(): never {
  while (true) {}
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha() {
  return erro("Algo falhou");
}

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string | boolean) {
  console.log(`A nota é ${nota}`);
}
exibirNota("10"); //string
exibirNota(8); //number
exibirNota(true); //booelan

// Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};

//type Funcionarios = Array<string>;
const funcionarios: Funcionario[] = [
  {
    nome: "Cris",
    sobrenome: "Vieira",
    dataNascimento: new Date(),
  },
];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log("Nome do funcionario: ", funcionario.nome);
  }
}

//Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string; //? informa que é opcional
};

const contato: Contato = {
  nome: "Cris",
  telefone1: "898989",
  //telefone2: "444444",
};

// Type Assertion
const minhaIdade: any = 23;
//(minhaIdade as number).toString;
(<number>minhaIdade).toString;

//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
