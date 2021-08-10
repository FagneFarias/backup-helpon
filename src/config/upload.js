
const { diskStorage } = require('multer')
const { join } = require('path')

module.exports = {

    storage: diskStorage({ //Configurando como os arquivos (Imagens) serão armazenados

        destination: join(__dirname, '../../uploads'), //Definindo a pasta onde os arquivos serão armazenados
        filename: (req, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname.trim()}` //Nomeclatura dos arquivos
            cb(null, fileName)
        }

    })

}
