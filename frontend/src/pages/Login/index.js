import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api'
import pc from '../../assets/pc.png';
import { FiLogIn } from 'react-icons/fi';


export default function Login() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const data = { id }
            const resposta = await api.post('/sessions', data); 
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', resposta.data.nome);
            alert(`Login Realizado.`);
            history.push('/profile')
        } catch(err){
           alert('Erro no login');
           console.log(err);
        }
       
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={pc} alt="PC Soluções em Tecnologia" width="200px" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <div className="form-row py-2 col-12">
                        <input placeholder="Sua ID" className="form-control" value={id} onChange={ e => setId(e.target.value)} />
                    </div>
                    <div className="form-row py-2 col-12">
                        <button type="submit" className="btn btn-danger btn-block">Entrar</button>
                    </div>
                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041" className="mr-3" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    )

}