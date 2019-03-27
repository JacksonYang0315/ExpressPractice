const {
    User
} = require('../models')

module.exports = {
    async create(req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: '創造user時有錯誤發生'
            })
        }
    },
    async index(req, res) {
        try {
            const users = await User.findAll()
            res.send(users)
        } catch (err) {
            res.status(500).send({
                error: '查詢users時有錯誤發生'
            })
        }
    },
    async show(req, res) {
        try {
            const users = await User.findByPk(req.params.userId)
            res.send(users)
        } catch (err) {
            res.status(500).send({
                error: '查詢user時有錯誤發生'
            })
        }
    },
    async update(req, res) {
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.userId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: '更新user時有錯誤發生'
            })
        }
    },
    async delete(req, res) {
        try {
            const user = await User.find({
                where: {
                    id: req.params.userId
                }
            })
            await user.update({
                isDelete:true
            })




        } catch (err) {
            res.status(500).send({
                error: '刪除user時有錯誤發生'
            })
        }
    }


}