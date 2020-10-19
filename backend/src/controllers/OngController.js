const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    async find(request, response){
        const { id } = request.params;
        const ong = await connection('incidents').where('ong_id', id).select('*');
        return response.json(ong);
    },
    async create(request, response){
        console.log(request.body);
        const {nome, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(8).toString('HEX');
        /**
         * AWAIT faz aguardar a finalização da função antes de ir para a proxima
         */
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json(id);
    }
}