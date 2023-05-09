class Voto {
    constructor(eleitor, candidato) {
      this.eleitor = eleitor;
      this.candidato = candidato;
      this.data = new Date();
    }
  
    exibirDados() {
      console.log(`Eleitor: ${this.eleitor.nome} | Candidato: ${this.candidato.nome} | Data: ${this.data.toLocaleString()}`);
    }
  }
  