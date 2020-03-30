

/**
 * Import para utilizar o json
 */
app.use(express.json());

/**
 * Rota Normal
 */

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Patrick'
    })
});

/**
 * Rota Com Parametro
 */

app.get('/usuarios/:id', (request, response) => {
    if(request.params.id == 'Patrick'){
        return response.json({
            evento: 'Semana OmniStack',
            aluno: 'Patrick'
        })
    }
});




/**
 * Driver : SELECT * FROM users
 * Query Builder: table('users').select('*').
 */
