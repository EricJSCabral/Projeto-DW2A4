class Eleitor {
    constructor() {
      //this.nome = nome;
      //this.idade = idade;
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
  
  class EleitorController {
    constructor() {
      this.eleitores = [];
    }
  
    adicionarEleitor(nome, idade) {
      const eleitor = new Eleitor(nome, idade);
      console.log("salvando eleitor...")
      this.eleitores.push(eleitor);
    }
  
    exibirEleitores() {
      console.log('Eleitores:');
      this.eleitores.forEach((eleitor) => {
        console.log(`- ${eleitor.nome} (Idade: ${eleitor.idade}, Votou: ${eleitor.votou})`);
      });
    }
  
    atualizarEleitor(nomeAntigo, nomeNovo, idadeNova) {
      const eleitor = this.eleitores.find((eleitor) => eleitor.nome === nomeAntigo);
  
      if (!eleitor) {
        throw new Error(`Não foi encontrado nenhum eleitor com o nome ${nomeAntigo}.`);
      }
  
      eleitor.nome = nomeNovo;
      eleitor.idade = idadeNova;
    }
  
    excluirEleitor(nome) {
      const index = this.eleitores.findIndex((eleitor) => eleitor.nome === nome);
  
      if (index === -1) {
        throw new Error(`Não foi encontrado nenhum eleitor com o nome ${nome}.`);
      }
  
      this.eleitores.splice(index, 1);
    }
  }
  
  const eleitorController = new EleitorController();
  
  eleitorController.adicionarEleitor('João', 25);
  eleitorController.adicionarEleitor('Maria', 35);
  
  eleitorController.exibirEleitores();
  
  eleitorController.atualizarEleitor('João', 'José', 30);
  
  eleitorController.exibirEleitores();
  
  eleitorController.excluirEleitor('Maria');
  
  eleitorController.exibirEleitores();
  