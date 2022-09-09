import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";

 const cliente1 = new Cliente("Ricardo", 88776655);
 const cliente2 = new Cliente("Alicia", 55667788);


 const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
 contaCorrenteRicardo.depositar(500); 
 const conta2 = new ContaCorrente(102, cliente2);
 
 contaCorrenteRicardo.transferir(200, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
