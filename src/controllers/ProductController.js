const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    //listagem de todos os produtos
    async index(req, res) {
        const { terms } = req.query;

        const products = await Product.find();

        if (terms !== 'teste') {
            return res.status(400).json({ status: 400, message: "Termos invalidos" });
        }

        return res.json(products);
    },

    async store(req, res) {
        const products = await Product.create(req.body);

        return res.json(products);
    }
}