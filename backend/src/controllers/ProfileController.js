const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async index(request, response){
        const ongId = request.headers.authorization;
        const ong = await connection('incidents').where('ong_id', ongId).select('*').orderBy('id', 'desc');
        return response.json(ong);
    }
}