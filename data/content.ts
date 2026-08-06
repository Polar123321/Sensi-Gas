export const navItems = [
  ["Início", "inicio"], ["Projeto", "projeto"], ["Funcionamento", "funcionamento"],
  ["Tecnologia", "tecnologia"], ["Protótipo", "prototipo"], ["Equipe", "equipe"], ["Pesquisa", "pesquisa"],
] as const;

export const technologies = [
  ["ESP32 DevKit V1", "Unidade de controle responsável por interpretar as leituras e coordenar as respostas."],
  ["Sensor MQ-4", "Sensor semicondutor utilizado no protótipo para indicar a presença de GLP e outros gases inflamáveis avaliados."],
  ["Eletrônica embarcada", "Integração entre sensores, atuadores e lógica de controle em um circuito compacto."],
  ["Buzzer", "Emissor do alerta sonoro quando a leitura supera o limite configurado."],
  ["LEDs", "Sinalização visual dos estados seguro, atenção e risco."],
  ["Protoboard", "Base de montagem que permite testar e ajustar o circuito experimental."],
  ["Resistores", "Componentes utilizados na adequação elétrica e proteção do circuito."],
  ["Cabos jumper", "Conexões entre o ESP32, os sensores e os dispositivos de saída."],
  ["Automação", "Lógica de resposta que relaciona as leituras do ambiente às ações do sistema."],
  ["ESP32 / Arduino C++", "Programação das leituras, limites, alertas e estados do protótipo."],
] as const;

export const methodology = [
  ["01", "Pesquisa bibliográfica", "Levantamento sobre GLP, sensores MQ-4 e MQ-5 e estratégias de detecção."],
  ["02", "Seleção dos componentes", "Escolha do ESP32 DevKit V1, do sensor MQ-4, dos LEDs, do buzzer e dos itens de montagem."],
  ["03", "Planejamento do circuito", "Definição das conexões e do comportamento esperado para cada estado."],
  ["04", "Desenvolvimento da programação", "Implementação da leitura analógica e da lógica de alertas."],
  ["05", "Montagem do protótipo", "Integração dos componentes em protoboard para validação inicial."],
  ["06", "Testes iniciais", "Observação experimental da resposta do conjunto em condições controladas."],
  ["07", "Calibração", "Etapa em andamento para aumentar consistência e interpretar melhor as leituras."],
  ["08", "Melhorias futuras", "Evolução planejada de conectividade, energia, gabinete e bloqueio de gás."],
] as const;

export const futureItems = [
  "Calibração avançada", "Validação ampliada do MQ-4", "Aplicativo para celular",
  "Alertas por internet", "Histórico em nuvem", "Sensores adicionais", "Bateria de emergência",
  "Bloqueio automático da válvula", "Integração com casas inteligentes", "Gabinete físico resistente",
];

export const team = [
  "Luís Henrique da Costa Lima", "Paulo Kauã Granjeiro da Silva", "Francisco Matheus da Silva",
  "Pedro Arthur Castro Alves", "João Pedro de Menezes Melo", "Carlos Henrique Ferreira Castro",
];

export const science = [
  ["Problemática", "Como empregar eletrônica e programação em um protótipo capaz de indicar possíveis vazamentos de gás de cozinha e acionar alertas, considerando as limitações de calibração e confiabilidade dos sensores?"],
  ["Objetivo geral", "Desenvolver e estudar um sistema experimental com ESP32 DevKit V1 e sensor MQ-4 para detectar sinais de GLP e outros gases inflamáveis e acionar alertas."],
  ["Objetivos específicos", "Pesquisar o funcionamento dos sensores; planejar e montar o circuito; programar níveis de resposta; integrar alertas visuais e sonoros; comparar o MQ-4 com o MQ-5; identificar limitações e propor melhorias."],
  ["Materiais e métodos", "Pesquisa aplicada e experimental, com revisão bibliográfica, comparação entre MQ-4 e MQ-5, montagem em protoboard, programação do ESP32 em Arduino/C++, testes com GLP e processo de calibração. O protótipo utiliza ESP32 DevKit V1, sensor MQ-4, LEDs, buzzer, resistores e cabos jumper."],
  ["Resultados e discussão", "Nos testes realizados pela equipe, o MQ-4 respondeu à maior variedade de gases avaliados e foi escolhido para o protótipo. O conjunto identificou a presença de GLP e acionou os alertas programados. Calibração, instalação e condições ambientais continuam influenciando as leituras."],
  ["Conclusões", "O SENSIGÁS demonstra uma aplicação educacional relevante da automação na segurança doméstica. O conceito é promissor como investigação científica, mas depende de testes controlados, calibração consistente e validação adicional antes de qualquer uso prático."],
  ["Referências", "A pesquisa considera documentação técnica do ESP32, do framework Arduino e folhas de dados dos sensores MQ-4 e MQ-5, além de materiais bibliográficos sobre GLP, sensores semicondutores e segurança doméstica. Os resultados comparativos apresentados correspondem aos testes experimentais da equipe."],
] as const;
