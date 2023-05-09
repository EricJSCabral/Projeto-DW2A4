class Candidato {
    constructor(nome, partido) {
      this.nome = nome;
      this.partido = partido;
      this.votos = 0;
    }
  
    exibirDados() {
      console.log(`Nome: ${this.nome} | Partido: ${this.partido} | Votos: ${this.votos}`);
    }
  }
  