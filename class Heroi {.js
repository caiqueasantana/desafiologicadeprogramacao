class Heroi {
  constructor(nome,idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = " marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque genérico";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Exemplo de uso:
const heroi1 = new Heroi("Thor", 30, "guerreiro");
const heroi2 = new Heroi("Gandalf", 150, "mago");

heroi1.atacar(); // Saída: O guerreiro Aragorn atacou usando espada
heroi2.atacar(); // Saída: O mago Gandalf atacou usando magia
