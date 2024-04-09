import React, { useState } from 'react'
import Form from '../../compenentes-compartilhados/Form/Form'
import Input from '../../compenentes-compartilhados/Input/Input';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';
import Button from '../../compenentes-compartilhados/Button/Button';
import './Login.css'
import { logar } from './Servico/login.servico'; 
import Swal from 'sweetalert2';
import { Grid } from '@mui/material';
import Cookies from 'universal-cookie';
import { error } from 'console';
import path from 'path';
import { useNavigate } from 'react-router-dom';

declare interface LoginProps {
    titulo?: string
    txtBotao?: String
    hidden?: boolean 
}
export class LoginModel {
    matricula?: string
    password?: string
}

function Login(props: LoginProps) {
    
    const navigate = useNavigate();
    const [ matricula, setMatricula] = useState('');
    const [ password, setPassword] = useState('');
    const login = new LoginModel()

    function enviarFormulario(e:any) {
        e.preventDefault();
        login.matricula = matricula
        login.password = password
        try {
            const object_token = logar(login)
            object_token.then(data => {
                const token = data.token;
                const cookies = new Cookies(null, { path: '/'});
                cookies.set('Token', token);
                navigate('/');
            }).catch(error =>{
                console.error('Erro ao fazer login', error);
                Swal.fire("Oops!", error.message, "error")
            });
        } catch(err) {
            if (err instanceof Error)
            Swal.fire("Oops!", err.message, "error")
        }    
    }
    
    return <Conteudo>
        <div className="box" hidden={ props.titulo ? props.hidden : false }>
           
                <Form titulo={ props.titulo ? props.titulo : "Login"  }
                    onSubmit={ enviarFormulario }>
                    <div className="InputeButton">
                <Grid container spacing={1}>
                <Grid item xs={9}>
                    <Input label='Login:'
                    onChange={ (e) => setMatricula(e.target.value)} />
                    </Grid>
                    <Grid item xs={9}>
                    <Input label='Senha:'
                    onChange={ (e) => setPassword(e.target.value) }/>
                    </Grid>
                    <Grid item xs={5}>
                        <div className="buttons">
                            <Button>{ "Logar" }</Button>
                        </div>
                    </Grid>
                    </Grid>
                    </div>
                </Form>
        </div>
        
    </Conteudo>
}

export default Login