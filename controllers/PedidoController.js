const mongoose = require("../database");
const Pedido = mongoose.model("Pedido");

module.exports = {
  async index(req, res) {
    const pedido = await Pedido.find().populate("cliente").populate("produto");
    return res.json(pedido);
  },

  async show(req, res) {
    const PEDIDO_ID = req.params.id;
    const pedido = await Pedido.findById(PEDIDO_ID);
    if (!pedido) {
      res.json({
        message: `Não existe pedido com o id = ${PEDIDO_ID}, tente novamente!`,
      });
    }
    return res.json(pedido);
  },

  async save(req, res) {
    const pedido = await Pedido.create(req.body);
    return res.json(pedido);
  },

  async destroy(req, res) {
    const PEDIDO_ID = req.params.id;
    const pedido = await Pedido.findByIdAndRemove(PEDIDO_ID);
    return res.json({ message: "Pedido removido com sucesso" });
  },

  async update(req, res) {
    const PEDIDO_ID = req.params.id;
    const pedido = await Pedido.findByIdAndUpdate(PEDIDO_ID, req.body, {
      new: true,
    });
    return res.json(pedido);
  },
};
