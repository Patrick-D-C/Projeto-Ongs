import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api'
import pc from '../../assets/pc.png';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    async function handleRegister(e){
        e.preventDefault();
       const data = {nome, email, whatsapp, cidade, uf};
       try{
        const resposta = await api.post('/ongs', data);
        alert(`Seu ID de acesso ${resposta.data}`);
        history.push('/');
       } catch(err){
           alert('Erro no cadastro');
           console.log(err);
       }
       
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={pc} alt="" width="200px" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/">
                        <FiArrowLeft size={16} color="#E02041" className="mr-3" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <div className="form-row py-2">
                        <input className="form-control" placeholder="Nome da ONG" value={nome} onChange={ e => setNome(e.target.value)} />
                    </div>
                    <div className="form-row py-2">
                        <input className="form-control" type="email" placeholder="Email" value={email} onChange={ e => setEmail(e.target.value)} />
                        </div>

                    <div className="form-row py-2">
                        <input className="form-control" placeholder="Whatsapp" value={whatsapp} onChange={ e => setWhatsapp(e.target.value)}/>
                    </div>

                    <div className="form-row py-2">
                        <div className="input-group py-2">
                            <input className="form-control" placeholder="Cidade" value={cidade} onChange={ e => setCidade(e.target.value)}/>
                            <input className="form-control col-xl-3" placeholder="UF" value={uf} onChange={ e => setUf(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}