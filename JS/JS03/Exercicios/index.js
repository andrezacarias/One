import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { sistemaAutenticacao } from "./Funcionario/SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 15000, 123456789);
diretor.cadastraSenha("22334455");
const gerente = new Gerente("Ricardo", 7500, 1234567899);
gerente.cadastraSenha("123")

const cliente = new Cliente("Lais", 19480325829, "456");
const gerenteEstaLogado = sistemaAutenticacao.login(gerente, "123");

const diretorEstaLogado = sistemaAutenticacao.login(diretor, "22334455");

const clienteEstaLogado = sistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);