import React from 'react'
import Form from '../../compenentes-compartilhados/Form/Form'
import Input from '../../compenentes-compartilhados/Input/Input';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';
import Button from '../../compenentes-compartilhados/Button/Button';
import './Login.css'

declare interface LoginProps {
    titulo?: string
    txtBotao?: String
    hidden?: boolean 
}

function Login(props: LoginProps) {
    return <Conteudo>
        
        <div className="box" hidden={ props.titulo ? props.hidden : false }>
            <div className="box-login">
                <Form titulo={ props.titulo ? props.titulo : "Login"  }>
                    <Input label='Login:'/>
                    <Input label='Senha:'/>
                    
                    <Button>{ props.txtBotao ? props.txtBotao : "Logar" }</Button>
                </Form>
            </div>
               
        </div>
        
    </Conteudo>
}

export default Login