class Vereador {
    constructor() {
        this.titulo = 'VEREADOR';
        this.numeros = 5;
        this.candidatos = [
            {
                numero: '38111',
                nome: 'Fulano de Tal',
                partido: 'ABC',
                fotos: [
                    { url: '1.jpg', legenda: 'Vereador' }
                ]
            },
            {
                numero: '77222',
                nome: 'Beltrano da Silva',
                partido: 'DEFG',
                fotos: [
                    { url: '2.jpg', legenda: 'Vereador' }
                ]
            }
        ];
    }
}

class Prefeito {
    constructor() {
        this.titulo = 'PREFEITO';
        this.numeros = 2;
        this.candidatos = [
            {
                numero: '99',
                nome: 'Ciclano',
                partido: 'ABC',
                vice: 'Cic',
                fotos: [
                    { url: '3.jpg', legenda: 'Prefeito' },
                    { url: '4.jpg', legenda: 'Vice-Prefeito', small: true }
                ]
            },
            {
                numero: '84',
                nome: 'Zulano',
                partido: 'QWERTY',
                vice: 'Zul',
                fotos: [
                    { url: '5.jpg', legenda: 'Prefeito' },
                    { url: '6.jpg', legenda: 'Vice-Prefeito', small: true }
                ]
            }
        ];
    }
}

let etapas = [new Vereador(), new Prefeito()];
