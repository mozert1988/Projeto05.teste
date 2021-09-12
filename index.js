// Declarando variaveis

let motorista;
let humor = 50;
let combustivel = 20;
let energia = 50;
let atividade = 0;
let tarefa = [];
let clima = [frio, calor, chuva, normal];

//Frase de abertura do jogo 
console.log("Bom dia, são 06:00 da manhã, é hora de levantar e começar o dia! Tome seu café e decida qual vai ser a sua primeira atividade!\n Vamos abastecer o carro ou vamos ligar o aplicativo e começar as corridas?");

// imprimir a explicação do jogo 
console.log(" Nesse jogo você será um motorista de aplicativo, seu objetivo é terminar o dia sendo lucrativo, seus desafios serão ficar atento as melhores oportunidades de corridas, examinando se a utilização de energia e humor para aquela corrida é vantajosa para sua meta diária, você não pode se esquecer das regras de trânsito, abastecimento e preço da gasolina. Torça para não sofrer penalidades como multas da  guarda municipal ou ter o azar de ter um pneu furado.\n Regras do jogo Nenhum dos atributos, humor, energia e combustível podem zerar durante o dia. Você vence o jogo se conseguir bater a meta de R$200 reais com os atributos, humor, energia e combustível com no mínimo 30% O motorista mora em área de risco. O jogo vai se iniciar ali.")

//Executando uma função com as opções de tarefas 
tarefa();

// Iniciando o jogo 
// console.log("Escolha o que deseja fazer");
console.log(
    "1 = " + tarefa[0].nome + 
    "2 = " + tarefa[1].nome + 
    "3 = " + tarefa[2].nome + 
    "4 = " + tarefa[3].nome + 
    "5 = " + tarefa[4].nome +
    "6 = " + tarefa[5].nome
);

//Adicionando as tarefas possiveis em uma lista
function tarefa(){
  let abastecer = new Object();
  abastecer.nome = "Abastecer";

  let corridaCentro = new Object();
  corridaCentro.nome = "Corrida para o centro";

  let corridaBairro = new Object();
  corridaBairro.nome = "Corrida para o bairro";

  let corridaAreaRisco = new Object();
  corridaAreaRisco.nome = "Corrida para area de risco";

  let corridaMetropolitana = new Object();
  corridaMetropolitana.nome = "Corrida para Região Metropolitana";

  let almoco = new Object();
  almoco.nome = "Vou almoçar!";
}

// Criando uma funçao para incrementar o valor da corrida, tempo da corrida, tempo de chamado, km rodados  
function desenvolvimentoDiario (corrida, tempo, chamado,km ){

}

//Criar uma function que calcula os recebidos do motorista

// criar uma function que calcula as alterações de humor 

// criar uma random para tarefas
for(var i = 1; i <= tarefa; i ++){
  console.log('Vamos a proxima tarefa' + 1);
  motorista = tarefa[Math.floor(math.random() * (5 - 0)) + 0];
}
// criar uma random para clima


// criar um random para seleção de corridas ou penalidades 

// criar uma function para abastecimento 