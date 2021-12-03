const mongoose = require("../database/index");
const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
    min: 8,
    max: 12,
  },
});

mongoose.model("Cliente", ClienteSchema);

/* 
-------
CLIENTE
-------
id: number,
nome: string,
email: string,
telefone: string,
endereço: string,
senha: string,
-----------------------------
Body Postman:
----------------------------------
{
    "nome": "",
    "email": "",
    "telefone": "",
    "endereco": "",
    "senha": "",
}
*/
