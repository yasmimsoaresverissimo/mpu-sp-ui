import React from 'react'
import Form from '../../compenentes-compartilhados/Form/Form'
import Input from '../../compenentes-compartilhados/Input/Input';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';
import Button from '../../compenentes-compartilhados/Button/Button';

function Login() {
    return <Conteudo>
        
        <div className='FormLogin'>
       <Form titulo={"Login"}>
            <Input label='Login:'/>
            <Input label='Senha:'/>
            <Button value='Logar'></Button>
        </Form>   
        </div>
        
    </Conteudo>
}

export default Login