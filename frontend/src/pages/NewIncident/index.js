import React from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import pc from '../../assets/pc.png';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import api from '../../services/api';

export default function NewIncident() {

    const history = useHistory();
    const ongId = localStorage.getItem('ongId')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncidentes(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };
        try{
            await api.post('incidents', data,{
               headers:{
                    Authorization: ongId
               } 
            });
            history.push('/profile')
        }catch(err){
            alert('Erro ao salvar, tente novamente')
        }
    }
    return (
        <div className="incidents-container">
            <div className="content">
                <section>
                    <img src={pc} alt="" width="200px" />
                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhado para encontrar um herói para resolver isso</p>
                    <Link to="/">
                        <FiArrowLeft size={16} color="#E02041" className="mr-3" />
                        Voltar para a home
                    </Link>
                </section>
                <form onSubmit={handleNewIncidentes}>
                    <div className="form-row py-2">
                        <input className="form-control" 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e=> setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-row py-2">
                        <textarea name="" id="" cols="30" className="form-control" rows="10" 
                        placeholder="Descrição"
                        value={description}
                        onChange={e=> setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-row py-2">
                        <input className="form-control" 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e=> setValue(e.target.value)}
                        />
                    </div>
                    <Link to="/profile" className="btn btn-secondary mx-2">Cancelar</Link>
                    <button type="submit" className="btn btn-danger mx-2">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}