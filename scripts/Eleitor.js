class Eleitor {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.votou = false;
    }
  
    votar(candidato) {
      if (this.votou) {
        throw new Error('Você já votou nesta eleição.');
      }
  
      candidato.votos++;
      this.votou = true;
    }
  }
  