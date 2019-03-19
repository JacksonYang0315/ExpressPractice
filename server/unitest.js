const {User} = require('./models')
console.log(User)




User.create({"email":"abc@gmail.com","password":"1234"})
.then((result)=>{
    console.log(result)
})