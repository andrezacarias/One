import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 19480625847);

const contaCorrenteRicardo = new ContaCorrente( cliente1, 1382);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1392);
const contaSalario = new ContaSalario(cliente1);
//const conta = new Conta(0, cliente1, 1382);
contaSalario.depositar(100);
contaSalario.sacar(20);

console.log(contaSalario);
