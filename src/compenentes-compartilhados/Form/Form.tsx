import React from "react";

declare interface FormProps {
    children?: React.ReactNode
    titulo?: string
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> = (props) => {
    const preventSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()//Quando enviar formulário não recarregar página.
        props.onSubmit && props.onSubmit(event)
    }

    return <form className="AppForm" onSubmit={preventSubmit}>
            {
                props.titulo && <div className="Titulo">
                    { props.titulo }
                </div>
            }
            { props.children }
        </form>

}

export default Form