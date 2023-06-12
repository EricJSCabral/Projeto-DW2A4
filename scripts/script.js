let seuVotoPara = document.querySelector('.d-1-1 span');
 let cargo = document.querySelector('.d-1-2 span');
 let descricao = document.querySelector('.d-1-4');
 let aviso = document.querySelector('.d-2');
 let lateral = document.querySelector('.d-1-right');
 let numeros = document.querySelector('.d-1-3');

 let etapaAtual = 0;
 let numero = '';
 let votoBranco = false;
 let votos = [];

 let votacoesTotais = 0
 let votacoesMaximas = 3

 function comecarEtapa(){
    
    console.log(etapaAtual)
    let etapa = etapas[etapaAtual];

    console.log(etapa)
    let numeroHtml = '';
    numero = '';
    votoBranco = false;

    for (let i = 0; i<etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        }else{

            numeroHtml += '<div class="numero"></div>';
        }


    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
 }

 function atualizaInterface() {

     let etapa = etapas[etapaAtual];
     console.log(etapaAtual)

     let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero) {
            return true;
        }else{
            return false;
        }
     });

     if(candidato.length > 0){
         candidato = candidato[0];
         seuVotoPara.style.display = 'block';
         aviso.style.display = 'block';
         descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
         let fotosHtml = '';
         for(let i in candidato.fotos){
             if(candidato.fotos[i].small) {

                fotosHtml += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;

            }else{

                fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;

             }
         }

         lateral.innerHTML = fotosHtml;
     }else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';

     }

     console.log('Candidato' , candidato);
    }



 function clicou(n){
     let elNumero = document.querySelector('.numero.pisca');
     if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`; 
        console.log(numero)
        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){

            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }

     }
 }

 function branco(){
        numero = '';
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
        lateral.innerHTML = '';

}

function corrige(){
    comecarEtapa();
}

function confirma(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;

   if(votoBranco === true){
       votoConfirmado = true;
       votos.push({
           etapa: etapas[etapaAtual].titulo,
           voto: 'branco'
       });
   }else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });
   }

   if(votoConfirmado){
       etapaAtual++;
    if(etapas[etapaAtual] !== undefined){
        comecarEtapa();
    }else{
        document.querySelector('.tela').innerHTML = '<div class="aviso--gigante grande pisca">FIM</div>';
        votacoesTotais++
        if(votacoesTotais !== votacoesMaximas){
            document.getElementById("proximoVoto").style.display = "block";
        } else {
            document.getElementById("verApuracao").style.display = "block";
        }
        console.log(votos);
    }

   }
}
comecarEtapa();

document.getElementById("proximoVoto").onclick = function() {
    etapaAtual = 0;
    numero = '';
    votoBranco = false;
    document.querySelector('.tela').innerHTML = telaOriginal;
    seuVotoPara = document.querySelector('.d-1-1 span');
    cargo = document.querySelector('.d-1-2 span');
    descricao = document.querySelector('.d-1-4');
    aviso = document.querySelector('.d-2');
    lateral = document.querySelector('.d-1-right');
    numeros = document.querySelector('.d-1-3');
    document.getElementById("proximoVoto").style.display = "none"; // Oculta o botão novamente
    comecarEtapa();
};


document.getElementById("verApuracao").onclick = function () {

    var resultadoDiv = document.querySelector('.resultado');
    resultadoDiv.innerHTML = '';
    document.getElementById("verApuracao").style.display = "none"; // Oculta o botão novamente


    var votosPrefeito = {};
    var votosVereador = {};

    for (var i = 0; i < votos.length; i++) {
        var etapa = votos[i].etapa;
        var voto = votos[i].voto;

        if (etapa === 'PREFEITO') {
            if (votosPrefeito[voto]) {
                votosPrefeito[voto]++;
            } else {
                votosPrefeito[voto] = 1;
            }
        } else if (etapa === 'VEREADOR') {
            if (votosVereador[voto]) {
                votosVereador[voto]++;
            } else {
                votosVereador[voto] = 1;
            }
        }
    }

    var prefeitoOrdenado = Object.entries(votosPrefeito).sort((a, b) => b[1] - a[1]);
    var vereadorOrdenado = Object.entries(votosVereador).sort((a, b) => b[1] - a[1]);

    // Exibir votos para Prefeito
    resultadoDiv.innerHTML += '<h2>Votos para Prefeito:</h2>';
    for (var i = 0; i < prefeitoOrdenado.length; i++) {
        var voto = prefeitoOrdenado[i][0];
        var quantidade = prefeitoOrdenado[i][1];

        var candidato = etapas.find((etapa) => etapa.candidatos.find((candidato) => candidato.numero === voto) && etapa.titulo === 'PREFEITO');
        var nome = candidato ? candidato.candidatos.find((candidato) => candidato.numero === voto).nome : 'Branco ou Nulo';
        var partido = candidato ? candidato.candidatos.find((candidato) => candidato.numero === voto).partido : 'NA';

        resultadoDiv.innerHTML += `${nome} (${partido}): ${quantidade} votos<br>`;
    }

    // Exibir votos para Vereador
    resultadoDiv.innerHTML += '<h2>Votos para Vereador:</h2>';
    for (var i = 0; i < vereadorOrdenado.length; i++) {
        var voto = vereadorOrdenado[i][0];
        var quantidade = vereadorOrdenado[i][1];

        var candidato = etapas.find((etapa) => etapa.candidatos.find((candidato) => candidato.numero === voto) && etapa.titulo === 'VEREADOR');
        var nome = candidato ? candidato.candidatos.find((candidato) => candidato.numero === voto).nome : 'Branco ou Nulo';
        var partido = candidato ? candidato.candidatos.find((candidato) => candidato.numero === voto).partido : 'NA';

        resultadoDiv.innerHTML += `${nome} (${partido}): ${quantidade} votos<br>`;
    }


    // Ocultar a classe "urnA"
    var urnaDiv = document.querySelector('.urna');
    urnaDiv.style.display = 'none';
};
