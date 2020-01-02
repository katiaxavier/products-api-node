const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    //listagem de todos os produtos
    async index(req, res) {
        const { terms } = req.query;
        try {
            const products = await Product.find();

            if (terms && terms === 'teste') {
                return res.json(products);
            }
            return res.status(400).json({ status: 400, message: "Termos invalidos" });
        }
        catch (e) {
            return res.status(400).json({ status: 400, message: "Termos invalidos" });
        }
    },

    async store(req, res) {
        const products = await Product.create(req.body);

        return res.json(products);
    }
}