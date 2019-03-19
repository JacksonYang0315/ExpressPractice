const { User } = require('../models')

module.exports ={
    async create (req, res){
        console.log(req.body)
        try{
            const user = await User.create(req.body)
            res.send(user)
        }catch(err){
            res.status(500).send({
                error: '創造user時有錯誤發生'
            })
        }

    }
    

}