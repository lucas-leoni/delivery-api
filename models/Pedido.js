const mongoose = require("../database/index");
const PedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produto",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Pedido", PedidoSchema);

/*
------
PEDIDO
------
Cliente
Produto
CreatedAt
----------------------------
Body Postman:
------------------------------------------
{
    "cliente": "",
    "produto": ""
}
*/
