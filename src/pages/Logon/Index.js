import React from "react"
import { LogonDiv } from "./Styles";
import Form from '../../components/LogonForm/Index';
import { UIButton } from "../../components/Button/Button";


export default function Logon() {
    return (
        <LogonDiv>
            <div className="logo">SEU LOGO AQUI</div>
            <Form/>
            <div className="links" >            
                <a href="http://jeanlima.dev.br/">Esqueceu a senha?</a>
                <a href="http://jeanlima.dev.br/">Esqueceu o usuário?</a>
            </div>
            <UIButton component='a'>Entrar</UIButton>

        </LogonDiv>
    )
}