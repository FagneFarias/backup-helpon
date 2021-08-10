
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(() => {
    console.log('Conectado com sucesso ao MongoDB !')
}).catch((err) => {
    console.log("Erro: " + err)
})

module.exports = mongoose; 
