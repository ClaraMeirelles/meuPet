
export const animaisAdocao = [
   {
      id: 0,
      nome: "Branca",
      sexo: "femea",
      tipo: "cachorro",
      pelagem: "preta e branca",
      porte: "Médio",
      dataNascimento: "27/10/2011",
      dataAcolhimento: '30/10/2012',
      vacinas: [{
         nome: "V10",
         data: "30/10/2011",
         reforco: "30/10/2012"
      }, {
         nome: "Raiva",
         data: "30/10/2011",
         reforco: "30/10/2012"
      }],
      adocao: false,
      idProtetora: "1232130"
   },
   {
      id: 1,
      nome: "Fred",
      sexo: "macho",
      tipo: "cachorro",
      pelagem: "preta",
      porte: "Médio",
      dataNascimento: "15/01/2016",
      dataAcolhimento: '15/01/2016',
      vacinas: [
         {
            nome: "V10",
            data: "30/02/2016",
            reforco: "30/03/2016"
         },
         {
            nome: "V10",
            data: "30/03/2016",
            reforco: "30/04/2016"
         },
         {
            nome: "V10",
            data: "30/04/2016",
            reforco: "30/04/2017"
         },
      ],
      adocao: false,
      idProtetora: "1232130"
   },
   {
      id: 2,
      nome: "Bombom",
      sexo: "femea",
      tipo: "cachorro",
      pelagem: "rajada",
      porte: "Pequeno",
      dataNascimento: "27/10/2010",
      dataAcolhimento: '27/01/2011',
      vacinas: [{
         nome: "V10",
         data: "30/10/2011",
         reforco: "30/10/2012"
      }],
      adocao: [{
         nomeAdotante: "Ana",
         contato: "(48)9999-9999",
         endereco: "Rua dos Bobos, nº 0.",
         data: "21/03/2015",
         devolveu: {
            data: "22/05/2015",
            motivo: "Não se adaptou."
         }
      }],
   },
   {
      id: 3,
      nome: "Bombom",
      sexo: "femea",
      tipo: "cachorro",
      pelagem: "rajada",
      porte: "Grande",
      dataNascimento: "27/10/2010",
      dataAcolhimento: '27/01/2011',
      vacinas: [{
         nome: "V10",
         data: "30/10/2011",
         reforco: "30/10/2012"
      }],
      adocao: false,
      idProtetora: "1232130"
   },
   {
      id: 4,
      nome: "Shisha",
      sexo: "femea",
      tipo: "cachorro",
      pelagem: "rajada",
      porte: "Pequeno",
      dataNascimento: "15/03/2011",
      dataAcolhimento: '15/03/2012',
      vacinas: [{
         nome: "V10",
         data: "20/03/2012",
         reforco: "20/03/2013"
      }],
      adocao: [{
         nomeAdotante: "Clara",
         contato: "(48)9999-9998",
         endereco: "Rua tal, numero x",
         data: "13/04/2012",
         devolveu: false
      }],
   },
   {
      id: 5,
      nome: "Fifi",
      sexo: "femea",
      tipo: "gato",
      pelagem: "branca",
      porte: "pequeno",
      dataNascimento: "15/03/2011",
      dataAcolhimento: '15/03/2012',
      vacinas: [{
         nome: "V8",
         data: "20/03/2012",
         reforco: "20/03/2013"
      }],
      adocao: false,
      idProtetora: "1232130"
   },
]

export const meusPets = [
   {
      id: 0,
      nome: "Shisha",
      sexo: "femea",
      tutorId: 1,
      tipo: "cachorro",
      pelagem: "preta e bege",
      raca: "srd",
      porte: "Pequeno",
      peso: 4.5,
      dataNascimento: "27/10/2010",
      dataAcolhimento: '30/10/2011',
      vacinas: [{
         nome: "V10",
         data: "30/10/2011",
         reforco: "30/10/2012"
      }, {
         nome: "Raiva",
         data: "30/10/2011",
         reforco: "30/10/2012"
      }],
      adocao: {
         nome: "Clara",
         id: 1,
         endereco: "doasijdaosidjoasijdoasi",
      },
      vet: [{ nome: "Tati Evangelista", id: "1234", ultimaVisita: "21/09/2023", agendamento: "15/10/2023" }],
      exames: false,
      idProtetora: "1232130"
   },
   {
      id: 0,
      nome: "Ziah",
      tutorId: 1,
      sexo: "macho",
      tipo: "cachorro",
      pelagem: "marrom",
      raca: "srd",
      porte: "Grande",
      peso: 25,
      dataNascimento: "27/10/2010",
      dataAcolhimento: '30/10/2012',
      vacinas: [{
         nome: "V10",
         data: "30/10/2011",
         reforco: "30/10/2012"
      }, {
         nome: "Raiva",
         data: "30/10/2011",
         reforco: "30/10/2012"
      }],
      adocao: {
         nome: "Clara",
         id: 1,
         endereco: "doasijdaosidjoasijdoasi",
      },
      vet: [{ nome: "Outro", id: "342483", ultimaVisita: "21/09/2023", agendamento: false }],
      exames: false,
      idProtetora: "1232130"
   }
]