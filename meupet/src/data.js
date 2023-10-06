
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
      peso: [{ data: "11/02/2014", valor: 4.5 }],
      dataNascimento: "27/10/2010",
      dataAcolhimento: '30/10/2011',
      vacinas: [{
         nome: "V10",
         lote: "91238",
         data: "30/10/2011",
         reforco: "30/10/2012"
      },
      {
         nome: "Raiva",
         data: "30/10/2013",
         lote: "93aaa238",
         reforco: "30/10/2014"
      },
      {
         nome: "Raiva",
         data: "30/10/2011",
         lote: "9323fsds8",
         reforco: "30/10/2012"
      },
      {
         nome: "Raiva",
         data: "30/10/2011",
         lote: "9323fafs8",
         reforco: "30/10/2012"
      },
      {
         nome: "Raiva",
         data: "30/10/2011",
         lote: "932dasd38",
         reforco: "30/10/2012"
      },
      {
         nome: "Raiva",
         data: "30/10/2011",
         lote: "9323dsdd8",
         reforco: "30/10/2012"
      },
      ],
      adocao: {
         nome: "Clara",
         id: 1,
         endereco: "doasijdaosidjoasijdoasi",
      },
      vet: [
         {
            nome: "Tati",
            id: "1234",
            ultimaVisita: "21/09/2023",
            agendamento: "15/10/2023",
            visitas: [
               { data: "11/02/2022", motivo: "descrição do motivo do atendimento feito pela vet" },
               { data: "11/02/2022", motivo: "descrição do motivo do atendimento feito pela vet" },
               { data: "11/02/2022", motivo: "descrição do motivo do atendimento feito pela vet" },
               { data: "11/02/2022", motivo: "descrição do motivo do atendimento feito pela vet" },
               { data: "11/02/2022", motivo: "descrição" },
               { data: "11/02/2022", motivo: "descrição" },
               { data: "11/02/2022", motivo: "descrição" },
               { data: "11/02/2022", motivo: "descrição" },
            ]
         },
         {
            nome: "Aline",
            id: "1dasiuh234",
            ultimaVisita: "21/09/2019",
            agendamento: false,
            visitas: [
               { data: "11/02/2022", motivo: "descrição do motivo do atendimento feito pela vet" },
            ]
         },
      ],
      exames: [
         {
            id: "090w832",
            nome: "sangue",
            data: "13/09/2023",
            resultados: "url"
         }
      ],
      idProtetora: "1232130",
      receitas: [
         {
            id: "9wq893",
            diagnostico: "aaaaaaa",
            ativo: true,
            medicacao: [
               {
                  id: "12",
                  nome: "aaaaaaaaa",
                  ativo: true,
                  posologia:
                  {
                     dose: 50,
                     unidadeDose: "g",
                     horas: 8,
                     duracaoDias: 3,
                     dataInicio: "10/02/2021"
                  }
               }],

         }
      ]
   },
   {
      id: 1,
      nome: "Ziah",
      tutorId: 1,
      sexo: "macho",
      tipo: "cachorro",
      pelagem: "marrom",
      raca: "srd",
      porte: "Grande",
      peso: [
         {
            id: "dihasiuda",
            data: "11/02/2014",
            valor: 30
         },
         {
            id: "-0912-13218098",
            data: "15/08/2020",
            valor: 23
         },
         {
            id: "doasjdioasja",
            data: "21/04/2023",
            valor: 25
         },
      ],
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