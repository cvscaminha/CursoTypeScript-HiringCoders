class Carro {
  private velocidadeAtual: number = 0;
  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {}

  private alterarVelocidade(aceleracao: number) {
    const novaVelocidade = this.velocidadeAtual + aceleracao;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = aceleracao > 0 ? this.velocidadeMaxima : 0;
    }
  }
  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro("Chevrolet", "Prisma", 250);
carro.acelerar();

// Herança
class Camaro extends Carro {
  private turbo = false;

  constructor() {
    super("Chevrolet", "Camaro", 500);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
