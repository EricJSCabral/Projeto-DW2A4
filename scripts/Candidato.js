class Candidato {
    constructor(nome, partido) {
      this.nome = nome;
      this.partido = partido;
      this.votos = 0;
    }
  }
  
  class CandidatoController {
    constructor() {
      this.candidatos = [];
    }
  
    adicionarCandidato(nome, partido) {
      const candidato = new Candidato(nome, partido);
      this.candidatos.push(candidato);
    }
  
    exibirCandidatos() {
      console.log('Candidatos:');
      this.candidatos.forEach((candidato) => {
        console.log(`- ${candidato.nome} (${candidato.partido}, Votos: ${candidato.votos})`);
      });
    }
  
    atualizarCandidato(nomeAntigo, nomeNovo, partidoNovo) {
      const candidato = this.candidatos.find((candidato) => candidato.nome === nomeAntigo);
  
      if (!candidato) {
        throw new Error(`Não foi encontrado nenhum candidato com o nome ${nomeAntigo}.`);
      }
  
      candidato.nome = nomeNovo;
      candidato.partido = partidoNovo;
    }
  
    excluirCandidato(nome) {
      const index = this.candidatos.findIndex((candidato) => candidato.nome === nome);
  
      if (index === -1) {
        throw new Error(`Não foi encontrado nenhum candidato com o nome ${nome}.`);
      }
  
      this.candidatos.splice(index, 1);
    }
  }
  
  // Usage example
  const candidatoController = new CandidatoController();
  
  candidatoController.adicionarCandidato('João', 'Partido A');
  candidatoController.adicionarCandidato('Maria', 'Partido B');
  
  candidatoController.exibirCandidatos();
  
  candidatoController.atualizarCandidato('João', 'José', 'Partido C');
  
  candidatoController.exibirCandidatos();
  
  candidatoController.excluirCandidato('Maria');
  
  candidatoController.exibirCandidatos();
  